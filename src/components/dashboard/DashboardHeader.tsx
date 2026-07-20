"use client"

import React from "react"
import Link from "next/link"
import { Funnel, Plus } from "@gravity-ui/icons"
import { authClient } from "@/lib/auth-client"

export default function DashboardHeader() {
    const { data: session } = authClient.useSession()
    const name = session?.user?.name ?? "there"

    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 animate-fade-in">
            <div>
                <h1 className="text-[30px] leading-[38px] mt-10 tracking-[-0.02em] font-semibold text-[#dae2fd] mb-1">
                    Welcome back, {name}
                </h1>
                <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#c7c4d7]">
                    Your career trajectory is looking strong. Check your latest AI-matched roles.
                </p>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center gap-1 px-6 py-3 rounded-xl bg-[#222a3d] border border-[#ffffff]/10 hover:bg-[#2d3449] transition-all">
                    <Funnel className="w-5 h-5" />
                    <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">Filter Data</span>
                </button>
                <Link
                    href="/post-job"
                    className="flex items-center gap-1 px-6 py-3 rounded-xl bg-[#8083ff] text-[#0d0096] font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#8083ff]/20"
                >
                    <Plus className="w-5 h-5" />
                    <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">Post New Job</span>
                </Link>
            </div>
        </div>
    )
}

