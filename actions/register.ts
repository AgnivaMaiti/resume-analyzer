"use server";

import { db } from "@/db/drizzle";
import { rolesEnum, studentForm, users, recruiterForm } from "@/db/schema";
import { insertStudentFormSchema, insertRecruiterFormSchema } from "@/db/schema.types";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const createStudent = async (data: unknown) => {
  try {
    const insertData = insertStudentFormSchema.parse(data);

    const exisitingUser = await db
      .select()
      .from(users)
      .where(eq(users.username, insertData.email));

    if (exisitingUser.length) {
      return {
        success: false,
        error: "User already exists with this email",
      };
    }

    const student = await db
      .insert(studentForm)
      .values(insertData)
      .returning({ id: studentForm.id });

    await db.insert(users).values({
      id: student[0].id,
      username: insertData.email,
      pasword: bcrypt.hashSync(insertData.password, 10),
      role: rolesEnum.enumValues[0],
    });

    return {
      success: true,
      error: null,
    };
  } catch (error: unknown) {
    console.error(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};

export const createRecruiter = async (data: unknown) => { 
  try {
    const insertData = insertRecruiterFormSchema.parse(data);

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.username, insertData.email));

    if (existingUser.length) {
      return {
        success: false,
        error: "User already exists with this email",
      };
    }

    const recruiter = await db
      .insert(recruiterForm)
      .values(insertData)
      .returning({ id: recruiterForm.id });

    await db.insert(users).values({
      id: recruiter[0].id,
      username: insertData.email,
      pasword: bcrypt.hashSync(insertData.password, 10),
      role: rolesEnum.enumValues[2],
    });

    return {
      success: true,
      error: null,
    };
  } catch (error: unknown) {
    console.error(error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
