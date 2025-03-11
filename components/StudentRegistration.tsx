"use client";

import { useState } from "react";
import StudentStepOne from "./registration/StudentStepOne";
import StudentStepTwo from "./registration/StudentStepTwo";
import { insertStudentFormSchema } from "@/db/schema.types";
import type { StudentFormInsert } from "@/db/schema.types";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createStudent } from "@/actions/register";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const stepOneFields = [
  "name",
  "email",
  "rollNumber",
  "school",
  "batch",
  "semester",
  "contact",
  "linkedInProfile",
  "gitHubProfile",
  "password",
];

export const stepOneSchema = insertStudentFormSchema.pick(
  Object.fromEntries(stepOneFields.map((field) => [field, true])) as Record<
    keyof StudentFormInsert,
    true
  >
);

const StudentRegistration = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: zodResolver(insertStudentFormSchema),
    defaultValues: {},
    mode: "onBlur",
  });

  const handleStepOneNext = async () => {
    const result = await methods.trigger(
      stepOneFields as Partial<keyof StudentFormInsert>[]
    );
    if (result) setStep(2);
  };

  const handleStepTwoBack = () => {
    setStep(1);
  };

  const onSubmit = async (data: StudentFormInsert) => {
    const result = await createStudent(data);
    console.log(result);
    if (result.success) {
      alert("Student registered successfully");
    } else {
      alert("Failed to register student");
    }
  };

  return (
    <div
      className={`min-h-screen bg-white flex justify-center ${nunitoSans.className}`}
    >
      <div className="w-full ">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className=" mx-auto md:px-24 px-12"
          >
            <div className="flex flex-col md:flex-row py-6 md:py-12 justify-between items-center gap-6">
              <section className="text-center md:text-left">
                <h2 className="flex justify-center md:justify-start">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </h2>
                <div className="mt-2 font-bold">
                  <p className="text-primary text-3xl md:text-5xl text-shadow-lg">
                    KIIT<span className="text-black">Start</span>
                  </p>
                  <p className="text-secondary text-2xl md:text-4xl inset-7 text-shadow-lg">
                    Connect. Collaborate. Earn.
                  </p>
                </div>
              </section>
              <h1 className="text-3xl md:text-6xl font-bold text-center text-secondary">
                Register as a Student
              </h1>
            </div>

            {step === 1 && <StudentStepOne onNext={handleStepOneNext} />}
            {step === 2 && <StudentStepTwo onBack={handleStepTwoBack} />}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default StudentRegistration;
