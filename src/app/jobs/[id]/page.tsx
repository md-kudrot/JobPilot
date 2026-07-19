"use client"

import React, { use, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "@gravity-ui/icons"
import Header from "@/components/Header"
import JobDetailsHeader from "@/components/job-details/JobDetailsHeader"
import JobDescription from "@/components/job-details/JobDescription"
import CompanyInfo from "@/components/job-details/CompanyInfo"
import AIMatchAnalysis from "@/components/job-details/AIMatchAnalysis"
import ApplySection from "@/components/job-details/ApplySection"
import { api, type Job } from "@/lib/api"

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const router = useRouter()
    const [job, setJob] = useState<Job | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        api.get<Job>(`/api/jobs/${id}`)
            .then((data) => setJob(data))
            .catch((err) => setError(err instanceof Error ? err.message : "Failed to load job"))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen">
            <div className="w-[80%] mx-auto">
                <Header active="Explore Jobs" />
                <main className="pt-32 pb-16">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-1 mb-10 group cursor-pointer w-fit text-[#c0c1ff] hover:-translate-x-1 transition-transform"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">
                            Back to Search
                        </span>
                    </button>

                    {loading ? (
                        <div className="glass-card p-12 rounded-2xl text-center text-[#c7c4d7]">Loading job...</div>
                    ) : error || !job ? (
                        <div className="glass-card p-12 rounded-2xl text-center text-[#ffb4ab]">
                            {error ?? "Job not found"}
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-8 space-y-6">
                                    <JobDetailsHeader
                                        title={job.title}
                                        company={job.company}
                                        location={job.location}
                                        logo={job.logo}
                                        salary={job.salary}
                                    />
                                    <JobDescription />
                                    <CompanyInfo
                                        company={job.company}
                                        logo={job.logo}
                                        location={job.location}
                                        industry={job.industry}
                                        description={job.description}
                                    />
                                </div>

                                <div className="lg:col-span-4 space-y-6">
                                    <AIMatchAnalysis score={job.matchPercent} matchingSkills={job.skills} />
                                    <ApplySection job={job} />
                                </div>
                            </div>
                        </>
                    )}
                </main>
            </div>
        </div>
    )
}

