"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertRecruiterFormSchema } from "@/db/schema.types";
import type { RecruiterFormInsert } from "@/db/schema.types";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import RecruiterStepOne from "./registration/RecruiterStepOne";
import { createRecruiter } from "@/actions/register";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const RecruitRegestration = () => {
  const methods = useForm({
    resolver: zodResolver(insertRecruiterFormSchema),
    defaultValues: {},
    mode: "onBlur",
  });

  const onSubmit = async (data: RecruiterFormInsert) => {
    const result = await createRecruiter(data);
    console.log(result);
    if (result.success) {
      alert("Recruiter registered successfully");
    } else {
      alert(`Failed to register recruiter: ${result.error}`);
    }
  };

  return (
    <div
      className={`min-h-screen bg-white flex justify-center ${nunitoSans.className}`}
    >
      <div className="w-full">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="mx-auto md:px-24 px-12"
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
                Register as a Recruiter
              </h1>
            </div>

            <RecruiterStepOne />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RecruitRegestration;