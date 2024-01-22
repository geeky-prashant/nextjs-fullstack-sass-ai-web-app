"use client"

import { useAuth } from "@clerk/nextjs"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const font = Montserrat({
  weight: "600",
  subsets: ["latin"]
})

const LandingNavbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className="sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="flex items-center justify-between mx-auto max-w-screen-xl p-4">
        <Link href="/dashboard" className="flex items-center text-2xl font-bold text-white">
          365<span className={cn("text-2xl font-semibold text-yellow-500", font.className)}>SASS</span>
        </Link>

        <div className="flex items-center gap-x-2">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="outline" className="rounded-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default LandingNavbar