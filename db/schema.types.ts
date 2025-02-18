import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import {
  studentForm,
  recruiterForm,
  facultyForm,
  projects,
  payments,
  projectDetails,
  users,
} from "./schema";

// Insert Schemas
export const insertStudentFormSchema = createInsertSchema(studentForm);
export const insertRecruiterFormSchema = createInsertSchema(recruiterForm);
export const insertFacultyFormSchema = createInsertSchema(facultyForm);
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
