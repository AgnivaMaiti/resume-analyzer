import React from 'react'
import LoginForm from '@/components/LoginForm'
import Image from "next/image"


export default function page() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Column */}
      <div className="hidden lg:flex lg:w-3/5 bg-green-50 relative overflow-hidden">
        <div className="absolute flex flex-col h-full justify-between items-center py-10 px-20">
          <div className="z-10 flex justify-center h-full flex-col relative gap-2">
            <h2 className='z-10 w-full absolute top-0 left-0'>
              <Image src="/logo.svg" alt="Logo" width={150} height={150} style={{ objectFit: "contain" }} />
            </h2>
            <div className="font-bold ">
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
