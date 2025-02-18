import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as z from "zod";
import {
  studentForm,
  recruiterForm,
  facultyForm,
  projects,
  payments,
  projectDetails,
  users,
} from "./schema";

const FREE_EMAIL_PROVIDERS = new Set([
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "protonmail.com",
  "hotmail.com",
]);

const kiitStudentEmailRegex = /^[0-9]+@kiit\.ac\.in$/;
// NOTE: Faculty emails are like `xxxxxfcs@kiit.ac.in` or for any other branch `xxxxfcm@kiit.ac.in`
// I have yet to see faculty emails with numbers in it so not including them
const kiitFacultyEmailRegex = /^[a-zA-Z]+@kiit\.ac\.in$/;

// Insert Schemas
export const insertStudentFormSchema = createInsertSchema(studentForm, {
  email: (s) => s.email().regex(kiitStudentEmailRegex, "Invalid student email"),
});
//TODO: Make them internal once these schemas have an email field
export const insertRecruiterFormSchema = createInsertSchema(
  recruiterForm
).extend({
  email: z
    .string()
    .email()
    .refine((email) => {
      const domain = email.split("@")[1];
      if (FREE_EMAIL_PROVIDERS.has(domain)) {
        throw new Error("Must use a company email address");
      }
    }),
});
export const insertFacultyFormSchema = createInsertSchema(facultyForm).extend({
  email: z
    .string()
    .email("Invalid email")
    .regex(kiitFacultyEmailRegex, "Invalid faculty email"),
});
export const insertProjectSchema = createInsertSchema(projects);
export const insertPaymentSchema = createInsertSchema(payments);
export const insertProjectDetailsSchema = createInsertSchema(projectDetails);
export const insertUserSchema = createInsertSchema(users);

// Select Schemas
export const selectStudentFormSchema = createSelectSchema(studentForm);
export const selectRecruiterFormSchema = createSelectSchema(recruiterForm);
export const selectFacultyFormSchema = createSelectSchema(facultyForm);
export const selectProjectSchema = createSelectSchema(projects);
export const selectPaymentSchema = createSelectSchema(payments);
export const selectProjectDetailsSchema = createSelectSchema(projectDetails);
export const selectUserSchema = createSelectSchema(users);

// Table Types
export type StudentForm = typeof studentForm.$inferSelect;
export type RecruiterForm = typeof recruiterForm.$inferSelect;
export type FacultyForm = typeof facultyForm.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Payment = typeof payments.$inferSelect;
export type ProjectDetail = typeof projectDetails.$inferSelect;
export type User = typeof users.$inferSelect;

// Insert Types
export type StudentFormInsert = typeof studentForm.$inferInsert;
export type RecruiterFormInsert = typeof recruiterForm.$inferInsert;
export type FacultyFormInsert = typeof facultyForm.$inferInsert;
export type ProjectInsert = typeof projects.$inferInsert;
export type PaymentInsert = typeof payments.$inferInsert;
export type ProjectDetailInsert = typeof projectDetails.$inferInsert;
export type UserInsert = typeof users.$inferInsert;
