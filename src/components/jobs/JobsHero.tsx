import React from "react"
import { Magnifier, GeoPin } from "@gravity-ui/icons"

interface JobsHeroProps {
    search: string
    location: string
    onSearchChange: (value: string) => void
    onLocationChange: (value: string) => void
    onSubmit: () => void
}

export default function JobsHero({ search, location, onSearchChange, onLocationChange, onSubmit }: JobsHeroProps) {
    return (
        <section className="space-y-6 mt-10">
            <div className="space-y-1">
                <h1 className="text-[36px] leading-[44px] tracking-[-0.03em] font-bold text-[#dae2fd]">
                    Find your next <span className="text-[#c0c1ff] italic">dream role</span>
                </h1>
                <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#c7c4d7] max-w-2xl">
                    Powered by AI to match your unique skill set with high-performance opportunities across the globe.
                </p>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit()
                }}
                className="glass-card ai-border-animate rounded-[20px] p-3 flex flex-col md:flex-row gap-3 items-center"
            >
                <div className="flex-1 flex items-center gap-3 px-3 w-full">
                    <Magnifier className="text-[#c0c1ff] w-5 h-5 shrink-0" />
                    <input
                        className="bg-transparent border-none focus:ring-0 focus:outline-none w-full text-[#dae2fd] text-[16px] leading-[24px] placeholder:text-[#908fa0]/50"
                        placeholder="Search by job title, keywords, or company..."
                        type="text"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
                <div className="h-10 w-px bg-[#ffffff]/10 hidden md:block"></div>
                <div className="flex items-center gap-3 px-3 w-full md:w-auto">
                    <GeoPin className="text-[#908fa0] w-5 h-5 shrink-0" />
                    <input
                        className="bg-transparent border-none focus:ring-0 focus:outline-none w-full md:w-32 text-[#dae2fd] text-[16px] leading-[24px] placeholder:text-[#908fa0]/50"
                        placeholder="Location"
                        type="text"
                        value={location}
                        onChange={(e) => onLocationChange(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full md:w-auto bg-[#c0c1ff] text-[#0d0096] text-[12px] leading-[16px] tracking-[0.02em] font-bold px-16 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all whitespace-nowrap"
                >
                    Search Jobs
                </button>
            </form>
        </section>
    )
}

