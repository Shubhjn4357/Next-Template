'use server'
import { db } from "@/lib/db";
import { queryProps } from "@/types";
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserByID = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}

export const getUsers = async (args?:queryProps) => {
  try {
    const user = await db.user.findMany(args);
    return user;
  } catch (error) {
    throw error;
  }
};
