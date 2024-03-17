import { dbConnect } from "@/libs/database/db";
import { Request, Response } from "express";
import Comment, { CommentModel } from "@/libs/database/models/comment.model";

export async function GET(req: Request, res: Response) {
  await dbConnect();
  try {
    const { clerkId } = req.body;
    const comments = await Comment.find({ clerkId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }

  try {
    const { text, clerkId } = req.body;
    const comment: CommentModel = await Comment.create({ text, clerkId });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
