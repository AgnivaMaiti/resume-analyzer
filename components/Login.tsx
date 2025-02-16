"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@heroui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@heroui/checkbox"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Nunito_Sans } from "next/font/google";
import { useForm, type SubmitHandler } from "react-hook-form"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

type FormInputs = {
    email: string
    password: string
    rememberMe: boolean
}

export default function LoginPage() {
    const formRef = useRef(null)
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm<FormInputs>()

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".animate-item", {
                y: 20,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
            })
        }, formRef)

        return () => ctx.revert()
    }, [])

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data)
    }

    return (
        <div className="flex min-h-screen bg-white">
            {/* Left Column */}
            <div className="hidden lg:flex lg:w-3/5 bg-green-50 relative overflow-hidden">
                <div className="absolute flex flex-col justify-between py-10 px-20">
                    <div className="z-10">
                        <h2 className="w-[203px]">
                            <Image src="/logo.svg" alt="Logo" width={100} height={100} style={{ objectFit: "contain" }} />
                            {/* <Image src="/logo.svg" alt="Login background" width={1000} height={1000} objectFit="contain" /> */}
                        </h2>
                        <div className="mt-2 font-bold">
                            <p className="text-[#17D059] text-5xl">KIIT<span className="text-white">Start</span> </p>
                            <p className="text-[#17D059] text-4xl">Connect. Collaborate. Earn.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-white/0 z-10"></div>
                    <Image src="/images/login-bg.jpg" alt="Login background" fill priority style={{ objectFit: "cover" }} />
                    {/* <Image src="/images/login-bg.jpg" alt="Login background" layout="fill" objectFit="cover" priority /> */}
                </div>
            </div>

            {/* Right Column */}
            <div className={`w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-16 ${nunitoSans.className}`} ref={formRef}  >
                <div className="max-w-md w-full space-y-8">
                    <div className="animate-item">
                        <h2 className="mt-6 text-3xl font-bold tracking-wider text-[#059669] capitalize text-center">
                            Login to your account
                        </h2>
                    </div>
                    <div className="space-y-4 px-6">
                        <div className="animate-item">
                            <Button className="w-full bg-white text-[#828282] hover:bg-green-50 border border-[#E8E8E8] disabled:cursor-not-allowed disabled:bg-[#E8E8E8] transition duration-300 ease-in-out">
                                <Image src="/image 2.svg" width={20} height={20} alt="Google" />
                                Continue with Google
                            </Button>
                        </div>
                        <div className="relative animate-item">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or sign in with email</span>
                            </div>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="rounded-md shadow-sm space-y-4">
                                <div className="animate-item">
                                    <Input
                                        id="email-address"
                                        type="email"
                                        autoComplete="email"
                                        className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out`}
                                        placeholder="Email address"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            }
                                        })}
                                    />
                                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                                </div>

                                <div className="animate-item relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        className={`rounded-md relative block w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out pr-10`}
                                        placeholder="Password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters long",
                                            }
                                        })}
                                    />
                                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 z-10" onClick={togglePasswordVisibility}   >
                                        {showPassword ? (
                                            <EyeOffIcon className="h-5 w-5 text-gray-400" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5 text-gray-400" />
                                        )}
                                    </button>
                                    {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                                </div>
                            </div>

                            <div className="flex items-center justify-between animate-item">
                                <div className="flex items-center">
                                    <Checkbox id="remember-me" defaultSelected color="success" {...register("rememberMe")} />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <Link href="#" className="font-medium text-green-600 hover:text-green-500 transition duration-300 ease-in-out">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div className="animate-item">
                                <Button type="submit" className="w-full bg-[#059669] hover:bg-green-700 text-white transition duration-300 ease-in-out transform hover:scale-105">
                                    Login
                                </Button>
                            </div>
                        </form>
                    </div>
                    <p className="mt-2 text-center text-sm text-gray-600 animate-item">
                        Not Registered Yet?{" "}
                        <Link href="/register" className="font-medium text-green-600 hover:text-green-500 transition duration-300 ease-in-out">
                            Create an Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

