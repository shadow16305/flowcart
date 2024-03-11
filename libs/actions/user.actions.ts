"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/libs/database/db";
import User from "../database/models/user.model";
import { handleError } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    await db();
    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    await db();
    const updateUser = await User.findOneAndUpdate(
      {
        clerkId,
      },
      user,
      { new: true },
    );

    if (!updateUser) {
      throw new Error("User update failed!");
    }

    return JSON.parse(JSON.stringify(updateUser));
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    await db();
    const deleteUser = await User.findOne({
      clerkId,
    });

    if (!deleteUser) {
      throw new Error("User not found.");
    }

    const deletedUser = await User.findByIdAndDelete(deleteUser._id);

    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
};
