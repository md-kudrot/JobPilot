"use client"

import React, { useEffect, useState } from "react"
import { Funnel, Plus } from "@gravity-ui/icons"
import { api } from "@/lib/api"
import { authClient } from "@/lib/auth-client"

export default function ApplicationsHeader() {
    const { data: session } = authClient.useSession()
    const [count, setCount] = useState<number | null>(null)

    useEffect(() => {
        const query = session?.user?.email ? `?email=${encodeURIComponent(session.user.email)}` : ""
        api.get<{ stats: { totalApplications: number } }>(`/api/applications/stats${query}`)
            .then((data) => setCount(data.stats.totalApplications))
            .catch(() => setCount(null))
    }, [session])

    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 animate-fade-in">
            <div>
                <h1 className="text-[30px] leading-[38px] tracking-[-0.02em] font-semibold text-[#dae2fd] mt-10 mb-1">
                    My Applications
                </h1>
                <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#c7c4d7]">
                    Track all your job applications in one place.
                    {count !== null && ` ${count} total applications.`}
                </p>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center gap-1 px-6 py-3 rounded-xl bg-[#222a3d] border border-[#ffffff]/10 hover:bg-[#2d3449] transition-all">
                    <Funnel className="w-5 h-5" />
                    <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">Filter</span>
                </button>
                <button className="flex items-center gap-1 px-6 py-3 rounded-xl bg-[#8083ff] text-[#0d0096] font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#8083ff]/20">
                    <Plus className="w-5 h-5" />
                    <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">New Application</span>
                </button>
            </div>
        </div>
    )
}

