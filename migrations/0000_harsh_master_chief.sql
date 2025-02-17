CREATE TYPE "public"."roles" AS ENUM('student', 'faculty', 'recruiter');--> statement-breakpoint
CREATE TABLE "faculty_form" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"school" text NOT NULL,
	"facultyID" varchar(256) NOT NULL,
	"university" text NOT NULL,
	"contact" varchar(256) NOT NULL,
	"domain" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "faculty_form_facultyID_unique" UNIQUE("facultyID"),
	CONSTRAINT "faculty_form_contact_unique" UNIQUE("contact")
);
--> statement-breakpoint
CREATE TABLE "payment" (
	"transactionId" varchar(256) PRIMARY KEY NOT NULL,
	"amount" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"studentId" integer NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"startDate" date NOT NULL,
	"endDate" date NOT NULL,
	"recruiterId" integer NOT NULL,
	"facultyId" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"student_id" integer NOT NULL,
	"faculty_id" integer NOT NULL,
	"recruiter_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "projects_student_id_faculty_id_recruiter_id_pk" PRIMARY KEY("student_id","faculty_id","recruiter_id")
);
--> statement-breakpoint
CREATE TABLE "recruiter_form" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"companyName" text NOT NULL,
	"roleInCompany" text NOT NULL,
	"companyGSTNumber" varchar(15) NOT NULL,
	"domain" text NOT NULL,
	"skillsExpected" text NOT NULL,
	"programmingLanguage" text NOT NULL,
	"platformToolKnowledge" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "student_form" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"rollNumber" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"school" text NOT NULL,
	"batch" varchar(256) NOT NULL,
	"semester" varchar(256) NOT NULL,
	"contact" varchar(256) NOT NULL,
	"linkedInProfile" text,
	"gitHubProfile" text,
	"skills" text,
	"interestedDomains" text,
	"interestedCompanies" text,
	"projectsWorkedOn" text,
	"projectSummary" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "student_form_rollNumber_unique" UNIQUE("rollNumber")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"username" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"role" "roles" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "project_details" ADD CONSTRAINT "project_details_studentId_student_form_id_fk" FOREIGN KEY ("studentId") REFERENCES "public"."student_form"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_details" ADD CONSTRAINT "project_details_recruiterId_recruiter_form_id_fk" FOREIGN KEY ("recruiterId") REFERENCES "public"."recruiter_form"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_details" ADD CONSTRAINT "project_details_facultyId_faculty_form_id_fk" FOREIGN KEY ("facultyId") REFERENCES "public"."faculty_form"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_student_id_student_form_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."student_form"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_faculty_id_faculty_form_id_fk" FOREIGN KEY ("faculty_id") REFERENCES "public"."faculty_form"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_recruiter_id_recruiter_form_id_fk" FOREIGN KEY ("recruiter_id") REFERENCES "public"."recruiter_form"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_id_student_form_id_fk" FOREIGN KEY ("id") REFERENCES "public"."student_form"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_id_faculty_form_id_fk" FOREIGN KEY ("id") REFERENCES "public"."faculty_form"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_id_recruiter_form_id_fk" FOREIGN KEY ("id") REFERENCES "public"."recruiter_form"("id") ON DELETE no action ON UPDATE no action;