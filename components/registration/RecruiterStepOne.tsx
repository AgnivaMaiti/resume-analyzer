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

const RecruiterStepOne = () => {
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
              placeholder="Enter your company email"
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
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <Input
              id="companyName"
              placeholder="Enter your company name"
              className={inputClasses(errors.companyName)}
              {...register("companyName")}
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.companyName.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="roleInCompany"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Role In Company
            </label>
            <Input
              id="roleInCompany"
              placeholder="Enter your role in the company"
              className={inputClasses(errors.roleInCompany)}
              {...register("roleInCompany")}
            />
            {errors.roleInCompany && (
              <p className="text-red-500 text-xs mt-1">
                {errors.roleInCompany.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="companyGSTNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company GST Number
            </label>
            <Input
              id="companyGSTNumber"
              placeholder="Enter your company's GST number"
              className={inputClasses(errors.companyGSTNumber)}
              {...register("companyGSTNumber")}
            />
            {errors.companyGSTNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.companyGSTNumber.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="animate-item">
            <label
              htmlFor="domain"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Domain
            </label>
            <Input
              id="domain"
              placeholder="Enter your company's domain"
              className={inputClasses(errors.domain)}
              {...register("domain")}
            />
            {errors.domain && (
              <p className="text-red-500 text-xs mt-1">
                {errors.domain.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="skillsExpected"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Skills Expected
            </label>
            <Input
              id="skillsExpected"
              placeholder="Enter skills you expect from candidates"
              className={inputClasses(errors.skillsExpected)}
              {...register("skillsExpected")}
            />
            {errors.skillsExpected && (
              <p className="text-red-500 text-xs mt-1">
                {errors.skillsExpected.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="programmingLanguage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Programming Languages
            </label>
            <Input
              id="programmingLanguage"
              placeholder="Enter required programming languages"
              className={inputClasses(errors.programmingLanguage)}
              {...register("programmingLanguage")}
            />
            {errors.programmingLanguage && (
              <p className="text-red-500 text-xs mt-1">
                {errors.programmingLanguage.message as string}
              </p>
            )}
          </div>

          <div className="animate-item">
            <label
              htmlFor="platformToolKnowledge"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Platform/Tool Knowledge
            </label>
            <Input
              id="platformToolKnowledge"
              placeholder="Enter required platforms or tools"
              className={inputClasses(errors.platformToolKnowledge)}
              {...register("platformToolKnowledge")}
            />
            {errors.platformToolKnowledge && (
              <p className="text-red-500 text-xs mt-1">
                {errors.platformToolKnowledge.message as string}
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
          type="submit"
          className="md:w-1/3 w-full h-12 font-bold text-lg bg-secondary text-white transition duration-300 ease-in-out transform hover:scale-105"
        >
          Register
        </Button>
      </div>
    </section>
  );
};

export default RecruiterStepOne;