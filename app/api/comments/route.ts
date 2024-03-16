// pages/api/comments/index.ts
import { dbConnect } from "@/libs/database/db";
import Comment, { CommentModel } from "@/libs/database/models/comment.model";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const { userId } = req.query;
        const comments = await Comment.find({ userId });
        res.status(200).json(comments);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
      break;
    case "POST":
      try {
        const { text, userId } = req.body;
        const comment: CommentModel = await Comment.create({ text, userId });
        res.status(201).json(comment);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
