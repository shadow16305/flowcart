"use client";

import { useEffect, useState } from "react";
import Container from "../ui/container";
import ButtonSecondary from "../ui/button-secondary";
import Link from "next/link";
import { getComments, createComment } from "@/libs/actions/comments.actions";
import ReviewCard from "./review-card";
import ReviewModal from "./review-modal";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

const Reviews: React.FC<{ productId: number }> = ({ productId }) => {
  const [comments, setComments] = useState<Reviews[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");

  const user = useUser();

  useEffect(() => {
    const loadComments = async () => {
      try {
        const comments = await getComments(productId.toString());
        setComments(comments!);
      } catch (error) {
        console.error("Error loading comments:", error);
      }
    };

    loadComments();
  }, [productId]);

  const handleAddComment = async () => {
    try {
      await createComment(
        newCommentText,
        productId.toString(),
        user.user?.firstName,
        user.user?.lastName,
        user.user?.id,
        user.user?.imageUrl,
      );
      closeModal();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="rounded-3xl bg-neutral-800 p-8">
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] font-semibold tracking-widest text-white">
            Reviews
          </h1>
          <SignedIn>
            <button type="button" onClick={() => setShowModal(true)}>
              <ButtonSecondary>Add a review</ButtonSecondary>
            </button>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <ButtonSecondary>Sign in to add a review</ButtonSecondary>
            </Link>
          </SignedOut>
        </div>
        {comments.length > 0 ? (
          <div className="flex gap-6">
            {comments.map((comment) => (
              <ReviewCard
                key={comment.clerkId}
                text={comment.text}
                firstName={comment.firstName}
                lastName={comment.lastName}
                photo={comment.photo}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-200">
            There are no reviews for this product yet...
          </p>
        )}
      </section>
      {showModal && (
        <ReviewModal
          newCommentText={newCommentText}
          setNewCommentText={setNewCommentText}
          handleAddComment={handleAddComment}
          closeModal={closeModal}
        />
      )}
    </Container>
  );
};

export default Reviews;
