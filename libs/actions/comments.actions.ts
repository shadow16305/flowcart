"use server";

import Comment, { CommentModel } from "@/libs/database/models/comment.model";
import { dbConnect } from "../database/db";

export async function getComments(productId: string) {
  await dbConnect();
  const comments = await Comment.find({ productId });
  return JSON.parse(JSON.stringify(comments));
}

export async function createComment(
  text: string,
  productId: string,
  firstName?: string | null,
  lastName?: string | null,
  clerkId?: string | null,
  photo?: string | null,
): Promise<CommentModel> {
  await dbConnect();
  const newComment = await Comment.create({
    text,
    productId,
    firstName,
    lastName,
    clerkId,
    photo,
  });
  return JSON.parse(JSON.stringify(newComment));
}
