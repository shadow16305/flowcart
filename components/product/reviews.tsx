import { SignedIn, SignedOut } from "@clerk/nextjs";
import Container from "../ui/container";
import ReviewCard from "./review-card";
import ButtonSecondary from "../ui/button-secondary";
import Link from "next/link";

const Reviews = () => {
  return (
    <Container className="rounded-3xl bg-neutral-800 p-8">
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] font-semibold tracking-widest text-white">
            Reviews
          </h1>
          <SignedIn>
            <button type="button">
              <ButtonSecondary>Add a review</ButtonSecondary>
            </button>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <ButtonSecondary>Sign in to add a review</ButtonSecondary>
            </Link>
          </SignedOut>
        </div>
        <div className="flex gap-6">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
    </Container>
  );
};

export default Reviews;
