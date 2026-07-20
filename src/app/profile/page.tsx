import type { Metadata } from "next"
import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProfileForm from "@/components/profile/ProfileForm"

export const metadata: Metadata = {
    title: "My Profile | JobPilot AI",
    description: "Build your career profile so JobPilot AI can recommend jobs matched to your skills and preferences."
}

export default function ProfilePage() {
    return (
        <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen flex flex-col">
            <Header active="Profile" />
            <main className="flex-grow pt-32 pb-16 px-6 max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-[36px] leading-[44px] md:text-[48px] md:leading-[56px] tracking-[-0.04em] font-bold text-[#dae2fd] mb-1 mt-10 md:mt-0">
                        Your Career Profile
                    </h1>
                    <p className="text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] tracking-[0em] font-normal text-[#c7c4d7] max-w-2xl mx-auto">
                        Tell us about your skills and preferences so we can match you with the right roles.
                    </p>
                </div>

                <ProfileForm />
            </main>
            {/* <Footer /> */}
        </div>
    )
}

