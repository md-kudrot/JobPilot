import type { Metadata } from "next"
import React from "react"
import Header from "@/components/Header"
import DashboardHeader from "@/components/dashboard/DashboardHeader"
import DashboardContent from "@/components/dashboard/DashboardContent"

export const metadata: Metadata = {
    title: "Dashboard | JobPilot AI",
    description:
        "Track your job applications, interview rate, offers, and AI match scores in one intelligent career dashboard."
}

export default function DashboardPage() {
    return (
        <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen">
            <div className="w-[80%] mx-auto">
                <Header active="dashboard" />
                <main className="pt-32 pb-16">
                    <DashboardHeader />
                    <DashboardContent />
                </main>
            </div>
        </div>
    )
}

