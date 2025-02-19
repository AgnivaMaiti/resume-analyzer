"use client";

import { Input } from "@/components/ui/input";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFormContext,
} from "react-hook-form";
import { Button } from "@heroui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  onNext: () => void;
}

const StudentStepOne = ({ onNext }: Props) => {
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
    <section className="w-full" ref={formRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="animate-item">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <Input
              id="name"
              placeholder="Enter your full name"
              className={inputClasses(errors.name)}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name?.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={inputClasses(errors.email)}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="rollNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Roll Number
            </label>
            <Input
              id="rollNumber"
              placeholder="Enter your roll number"
              className={inputClasses(errors.rollNumber)}
              {...register("rollNumber")}
            />
            {errors.rollNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.rollNumber.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="school"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              School
            </label>
            <Input
              id="school"
              placeholder="Enter your school"
              className={inputClasses(errors.school)}
              {...register("school")}
            />
            {errors.school && (
              <p className="text-red-500 text-xs mt-1">
                {errors.school.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="batch"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Batch
            </label>
            <Input
              id="batch"
              placeholder="Enter your batch"
              className={inputClasses(errors.batch)}
              {...register("batch")}
            />
            {errors.batch && (
              <p className="text-red-500 text-xs mt-1">
                {errors.batch.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="animate-item">
            <label
              htmlFor="semester"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Current Semester
            </label>
            <Input
              id="semester"
              placeholder="Enter your semester"
              className={inputClasses(errors.semester)}
              {...register("semester")}
            />
            {errors.semester && (
              <p className="text-red-500 text-xs mt-1">
                {errors.semester.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number
            </label>
            <Input
              id="contact"
              placeholder="Enter your contact number"
              className={inputClasses(errors.contact)}
              {...register("contact")}
            />
            {errors.contact && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contact.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="linkedInProfile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Linkedin Profile URL
            </label>
            <Input
              id="linkedInProfile"
              placeholder="Enter your linkedInProfile profile URL"
              className={inputClasses(errors.linkedInProfile)}
              {...register("linkedInProfile")}
            />
            {errors.linkedInProfile && (
              <p className="text-red-500 text-xs mt-1">
                {errors.linkedInProfile.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="gitHubProfile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Github Profile URL
            </label>
            <Input
              id="gitHubProfile"
              placeholder="Enter your gitHubProfile profile URL"
              className={inputClasses(errors.gitHubProfile)}
              {...register("gitHubProfile")}
            />
            {errors.gitHubProfile && (
              <p className="text-red-500 text-xs mt-1">
                {errors.gitHubProfile.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={inputClasses(errors.password)}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center animate-item">
        <Button
          type="button"
          onPress={() => onNext()}
          className="md:w-1/3 w-full h-12 font-bold text-lg bg-secondary  text-white transition duration-300 ease-in-out transform hover:scale-105"
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default StudentStepOne;
