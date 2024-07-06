"use client";

import { useEffect, useState } from "react";
import Container from "../../../../../components/ui/container";
import ButtonSecondary from "../../../../../components/ui/button-secondary";
import Link from "next/link";
import { getComments, createComment } from "@/libs/actions/comments.actions";
import ReviewCard from "./review-card";
import ReviewModal from "./review-modal";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { CommentModel } from "@/libs/database/models/comment.model";

const Reviews: React.FC<{ productId: number }> = ({ productId }) => {
  const [comments, setComments] = useState<CommentModel[]>([]);
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
      const newComment = await createComment(
        newCommentText,
        productId.toString(),
        user.user?.firstName,
        user.user?.lastName,
        user.user?.id,
        user.user?.imageUrl,
      );
      setComments((prevComments) => [...prevComments, newComment]);
      closeModal();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="bg-neutral-800 p-8 lg:rounded-3xl">
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
          <div className="flex flex-col items-center gap-y-6 lg:flex-row lg:flex-wrap lg:justify-between">
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
      <AnimatePresence mode="wait">
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(!showModal)}
              className="fixed inset-0 z-30 h-screen w-screen bg-black opacity-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 mx-auto my-auto h-fit w-fit origin-center"
            >
              <ReviewModal
                newCommentText={newCommentText}
                setNewCommentText={setNewCommentText}
                handleAddComment={handleAddComment}
                closeModal={closeModal}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Reviews;
