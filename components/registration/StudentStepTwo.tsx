"use client";

import { Input } from "@/components/ui/input";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFormContext,
} from "react-hook-form";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { insertStudentFormSchema } from "@/db/schema.types";
import { Button } from "@heroui/button";

export const stepTwoSchema = insertStudentFormSchema.pick({
  skills: true,
  interestedDomains: true,
  interestedCompanies: true,
  projectsWorkedOn: true,
  projectSummary: true,
});

interface Props {
  onBack: () => void;
}

const StudentStepTwo = ({ onBack }: Props) => {
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputClasses = (
    error?:
      | FieldError
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<Record<string, unknown>>>
      | undefined
  ) => `
    w-full h-12 px-3 py-2 rounded-md 
    ${error ? "border-red-500" : "border-gray-300"} 
    placeholder-gray-500 text-gray-900 
    focus:outline-none focus:ring-green-500 focus:border-green-500 
    transition duration-300 ease-in-out
  `;

  return (
    <div className="w-full" ref={formRef}>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="animate-item">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Skills
          </label>
          <Input
            id="skills"
            placeholder="Enter your skills (e.g., JavaScript, React, Node.js)"
            className={inputClasses(errors.skills)}
            {...register("skills")}
          />
          {errors.skills && (
            <p className="text-red-500 text-xs mt-1">
              {errors.skills.message as string}
            </p>
          )}
        </div>

        <div className="animate-item">
          <label
            htmlFor="interestedDomains"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Domains Interested In
          </label>
          <Input
            id="interestedDomains"
            placeholder="Enter domains you're interested in (e.g., Web Development, AI/ML, Cloud)"
            className={inputClasses(errors.interestedDomains)}
            {...register("interestedDomains")}
          />
          {errors.interestedDomains && (
            <p className="text-red-500 text-xs mt-1">
              {errors.interestedDomains.message as string}
            </p>
          )}
        </div>

        <div className="animate-item">
          <label
            htmlFor="interestedCompanies"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Companies Interested In
          </label>
          <Input
            id="interestedCompanies"
            placeholder="Enter companies you're interested in"
            className={inputClasses(errors.interestedCompanies)}
            {...register("interestedCompanies")}
          />
          {errors.interestedCompanies && (
            <p className="text-red-500 text-xs mt-1">
              {errors.interestedCompanies.message as string}
            </p>
          )}
        </div>

        <div className="animate-item">
          <label
            htmlFor="projectsWorkedOn"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Projects Worked On
          </label>
          <Input
            id="projectsWorkedOn"
            placeholder="Describe your projects"
            className={inputClasses(errors.projectsWorkedOn)}
            {...register("projectsWorkedOn")}
          />
          {errors.projectsWorkedOn && (
            <p className="text-red-500 text-xs mt-1">
              {errors.projectsWorkedOn.message as string}
            </p>
          )}
        </div>

        <div className="animate-item">
          <label
            htmlFor="projectSummary"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Brief Project Summary
          </label>
          <Input
            id="projectSummary"
            placeholder="Write a brief projectSummary about yourself"
            className={inputClasses(errors.projectSummary)}
            {...register("projectSummary")}
          />
          {errors.projectSummary && (
            <p className="text-red-500 text-xs mt-1">
              {errors.projectSummary.message as string}
            </p>
          )}
        </div>

        <div className="mt-12 flex justify-center gap-4 animate-item">
          <Button
            type="button"
            onPress={onBack}
            className="md:w-1/3 w-full h-12 font-bold text-lg bg-transparent border border-secondary  text-secondary transition duration-300 ease-in-out transform hover:scale-105"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="md:w-1/3 w-full h-12 font-bold text-lg bg-secondary  text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentStepTwo;
