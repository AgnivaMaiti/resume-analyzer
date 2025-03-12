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
  name: (value) => value.trim().min(3, "Name must be at least 3 characters"),
  email: (value) =>
    value
      .email("Invalid email address")
      .regex(kiitStudentEmailRegex, "Invalid student email"),
  rollNumber: (value) =>
    value.trim().min(7, "Roll number must be at least 7 characters"),
  school: (value) => value.trim().min(2, "School name is required"),
  batch: (value) => value.trim().min(4, "Batch year is required"),
  semester: (value) =>
    value
      .trim()
      .min(1, "Semester is required")
      .regex(/^[0-9]+$/, "Semester must be a number"),
  contact: (value) =>
    value
      .trim()
      .min(10, "Contact number must be 10 digits")
      .regex(/^[0-9]+$/, "Contact number must be a number"),
  skills: (value) => value.trim().min(2, "Skills are required"),
  interestedDomains: (value) =>
    value.trim().min(2, "Interested domains are required"),
  interestedCompanies: (value) =>
    value.trim().min(2, "Interested companies are required"),
  projectsWorkedOn: (value) =>
    value.trim().min(2, "Projects worked on are required"),
  projectSummary: (value) => value.trim().min(2, "Project summary is required"),
  gitHubProfile: (value) => value.url("Invalid GitHub URL").optional(),
  linkedInProfile: (value) => value.url("Invalid LinkedIn URL").optional(),
}).extend({
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const insertRecruiterFormSchema = createInsertSchema(recruiterForm, {
  name: (value) => value.trim().min(3, "Name must be at least 3 characters"),
  email: (s) =>
    s.email("Invalid email address").refine((email) => {
      const domain = email.split("@")[1];
      if (FREE_EMAIL_PROVIDERS.has(domain)) {
        return false;
      }
      return true;
    }, "Must use a company email address"),
  companyName: (value) => value.trim().min(2, "Company name is required"),
  roleInCompany: (value) => value.trim().min(2, "Role in company is required"),
  companyGSTNumber: (value) => 
    value.length(15, "GST number must be 15 characters"),
  domain: (value) => value.trim().min(2, "Domain is required"),
  skillsExpected: (value) => value.trim().min(2, "Skills expected are required"),
  programmingLanguage: (value) => value.trim().min(2, "Programming languages are required"),
  platformToolKnowledge: (value) => value.trim().min(2, "Platform/tool knowledge is required"),
}).extend({
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const insertFacultyFormSchema = createInsertSchema(facultyForm, {
  facultymail: (s) =>
    s
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
