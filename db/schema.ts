import {
  date,
  integer,
  pgEnum,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["student", "faculty", "recruiter"]);

export const studentForm = pgTable("student_form", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  rollNumber: varchar("rollNumber", { length: 256 }).notNull().unique(),
  email: varchar("email", { length: 256 }).notNull(),
  school: text("school").notNull(),
  batch: varchar("batch", { length: 256 }).notNull(),
  semester: varchar("semester", { length: 256 }).notNull(),
  contact: varchar("contact", { length: 256 }).notNull(),
  linkedInProfile: text("linkedInProfile"),
  gitHubProfile: text("gitHubProfile"),
  skills: text("skills"),
  interestedDomains: text("interestedDomains"),
  interestedCompanies: text("interestedCompanies"),
  projectsWorkedOn: text("projectsWorkedOn"),
  projectSummary: text("projectSummary"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const recruiterForm = pgTable("recruiter_form", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  companyName: text("companyName").notNull(),
  roleInCompany: text("roleInCompany").notNull(),
  companyGSTNumber: varchar("companyGSTNumber", { length: 15 }).notNull(),
  domain: text("domain").notNull(),
  skillsExpected: text("skillsExpected").notNull(),
  programmingLanguage: text("programmingLanguage").notNull(),
  platformToolKnowledge: text("platformToolKnowledge").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const facultyForm = pgTable("faculty_form", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  school: text("school").notNull(),
  facultyID: varchar("facultyID", { length: 256 }).notNull().unique(),
  university: text("university").notNull(),
  contact: varchar("contact", { length: 256 }).notNull().unique(),
  domain: text("domain").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const projects = pgTable(
  "projects",
  {
    studentId: integer("student_id")
      .references(() => studentForm.id)
      .notNull(),
    facultyId: integer("faculty_id")
      .references(() => facultyForm.id)
      .notNull(),
    recruiterId: integer("recruiter_id")
      .references(() => recruiterForm.id)
      .notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => [
    primaryKey({
      columns: [table.studentId, table.facultyId, table.recruiterId],
    }),
  ]
);

export const payments = pgTable("payment", {
  transactionId: varchar("transactionId", { length: 256 })
    .notNull()
    .primaryKey(),
  amount: integer("amount").notNull(),
});

export const projectDetails = pgTable("project_details", {
  id: serial("id").primaryKey(),
  studentId: integer("studentId")
    .notNull()
    .references(() => studentForm.id),
  name: text("name").notNull(),
  description: text("description").notNull(),
  startDate: date("startDate").notNull(),
  endDate: date("endDate").notNull(),
  recruiterId: integer("recruiterId")
    .notNull()
    .references(() => recruiterForm.id),
  facultyId: integer("facultyId")
    .notNull()
    .references(() => facultyForm.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const users = pgTable("users", {
  id: integer("id")
    .notNull()
    .primaryKey()
    .references(() => studentForm.id)
    .references(() => facultyForm.id)
    .references(() => recruiterForm.id),
  username: varchar("username", { length: 256 }).notNull().unique(),
  pasword: varchar("password", { length: 256 }).notNull(),
  role: rolesEnum().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
