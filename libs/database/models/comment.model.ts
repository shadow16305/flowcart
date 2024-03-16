import { model, models, Schema, Document } from "mongoose";

export interface CommentModel extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  text: string;
  clerkId: string;
  createdAt: Date;
  photo: string;
}

const commentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  text: { type: String, required: true },
  clerkId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  productId: { type: String, required: true },
  photo: { type: String, required: true },
});

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
