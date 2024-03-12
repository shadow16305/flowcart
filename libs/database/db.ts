import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const db = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing.");
  }

  cached.promise =
    cached.promise ||
    mongoose
      .connect(MONGODB_URI, {
        dbName: "flowcart",
        bufferCommands: false,
      })
      .then(() => {
        console.log("Connected to DB");
      })
      .catch((err) => {
        console.error("Error connecting to DB:", err);
        throw err;
      });

  cached.conn = await cached.promise;

  return cached.conn;
};
