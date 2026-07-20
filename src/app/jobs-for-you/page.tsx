"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { SparklesFill, Person } from "@gravity-ui/icons"
import JobCard from "@/components/jobs-for-you/JobCard"
import JobCardSkeleton from "@/components/jobs-for-you/JobCardSkeleton"
import { api } from "@/lib/api"
import { authClient } from "@/lib/auth-client"
import { filterJobsByProfile } from "@/lib/jobs-service"

interface JobsForYouResponse {
    jobs: any[]
    personalized: boolean
}

export default function JobsForYouPage() {
    const { data: session, isPending } = authClient.useSession()
    const [isLoading, setIsLoading] = useState(true)
    const [jobs, setJobs] = useState<any[]>([])
    const [personalized, setPersonalized] = useState(false)
    const [profileComplete, setProfileComplete] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [profile, setProfile] = useState<any>(null)

    const email = session?.user?.email

    useEffect(() => {
        // Wait for the session to resolve so logged-in users get personalized results.
        if (isPending) return

        const fetchJobsForYou = async () => {
            try {
                setIsLoading(true)
                setError(null)

                // Fetch the user's profile using the API
                let profileData = null
                if (email) {
                    const profileResponse = await api.get<any>(`/api/profile/${encodeURIComponent(email)}`)
                    profileData = profileResponse.profile
                    setProfile(profileData)
                    setProfileComplete(
                        !!profileData && !!(profileData.skills?.length && profileData.role && profileData.location)
                    )
                }

                // Fetch jobs for you from the backend using the email from session
                const query = email ? `?email=${encodeURIComponent(email)}` : ""
                const jobsResponse = await api.get<JobsForYouResponse>(`/api/jobs-for-you${query}`)

                // If user is logged in and has a profile, filter jobs based on profile preferences
                if (profileData) {
                    const matchedJobs = filterJobsByProfile(jobsResponse.jobs, profileData)
                    setJobs(matchedJobs)
                    setPersonalized(true)
                } else {
                    // For anonymous users or users without profiles, show default sorted jobs
                    const sortedJobs = jobsResponse.jobs.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
                    setJobs(sortedJobs)
                    setPersonalized(false)
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load")
            } finally {
                setIsLoading(false)
            }
        }

        fetchJobsForYou()
    }, [email, isPending])

    return (
        <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen ">
            <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-12 mt-10 md:mt-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4edea3]/10 border border-[#4edea3]/20 rounded-full mb-4">
                        <SparklesFill className="w-5 h-5 text-[#4edea3]" />
                        <span className="text-[12px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#4edea3]">
                            AI-Powered Matches
                        </span>
                    </div>
                    <h1 className="text-[48px] leading-[56px] tracking-[-0.04em] font-bold text-[#dae2fd] mb-3">
                        Jobs For You
                    </h1>
                    <p className="text-[18px] leading-[28px] tracking-[0em] font-normal text-[#c7c4d7] max-w-2xl mx-auto">
                        {personalized
                            ? "Matched against your skills, preferred role, job type, and location from your profile."
                            : jobs.length > 0
                              ? "Here are the latest job opportunities available."
                              : "complete your profile to get matches tailored to you."}
                    </p>
                </div>

                {/* Profile nudge — shown when profile is incomplete */}
                {!isLoading && !error && !personalized && !profileComplete && (
                    <div className="glass-card p-4 rounded-2xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto border border-[#c0c1ff]/20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#c0c1ff]/10 flex items-center justify-center shrink-0">
                                <Person className="w-5 h-5 text-[#c0c1ff]" />
                            </div>
                            <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">
                                {email
                                    ? "Complete your profile so we can match jobs to your skills and preferences."
                                    : " complete your profile to get matches tailored to you."}
                            </p>
                        </div>
                        <Link
                            href={email ? "/profile" : "/login?redirect=/jobs-for-you"}
                            className="shrink-0 inline-flex items-center justify-center px-6 py-2 bg-[#c0c1ff] text-[#0d0096] rounded-2xl text-[12px] leading-[16px] tracking-[0.02em] font-bold hover:scale-95 transition-transform"
                        >
                            {email ? "Update Job Preferences" : "Log In"}
                        </Link>
                    </div>
                )}

                {/* Jobs Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <JobCardSkeleton key={idx} />
                        ))}
                    </div>
                ) : error ? (
                    <div className="glass-card p-8 rounded-2xl text-center text-[#ffb4ab] max-w-2xl mx-auto">
                        {error}
                    </div>
                ) : jobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </div>
                ) : (
                    // Empty state
                    <div className="glass-card p-12 rounded-2xl text-center max-w-2xl mx-auto">
                        <div className="w-20 h-20 rounded-full bg-[#c0c1ff]/10 flex items-center justify-center mx-auto mb-6">
                            <SparklesFill className="w-10 h-10 text-[#c0c1ff]" />
                        </div>
                        <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd] mb-3">
                            No Matching Jobs Yet
                        </h2>
                        <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#c7c4d7] mb-6">
                            Update your profile preferences (skills, role, location, job type) to get better matches.
                        </p>
                        <Link
                            href="/profile"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#c0c1ff] text-[#0d0096] rounded-2xl text-[14px] leading-[20px] tracking-[0em] font-bold hover:scale-95 transition-transform"
                        >
                            Update Job Preferences
                        </Link>
                    </div>
                )}
            </main>
        </div>
    )
}

