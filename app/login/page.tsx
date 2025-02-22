import React from 'react'
import LoginForm from '@/components/LoginForm'
import Image from "next/image"


export default function page() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Column */}
      <div className="hidden lg:flex lg:w-3/5 bg-green-50 relative overflow-hidden">
        <div className="absolute flex flex-col justify-between py-10 px-20">
          <div className="z-10">
            <h2 className="w-[203px]">
              <Image src="/logo.svg" alt="Logo" width={100} height={100} style={{ objectFit: "contain" }} />
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
        </div>
      </div>

      {/* Right Column */}
      <LoginForm />
    </div >

  )
}
