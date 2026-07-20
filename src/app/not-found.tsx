import Link from "next/link"
import { House, Magnifier } from "@gravity-ui/icons"

export default function NotFound() {
    return (
        <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen flex items-center">
            <div className="w-[80%] mx-auto">
                <div className="glass-card ai-border-animate rounded-[24px] p-10 md:p-16 text-center max-w-2xl mx-auto space-y-6">
                    <p className="text-[96px] leading-[96px] tracking-[-0.04em] font-bold text-[#c0c1ff]">404</p>
                    <div className="space-y-2">
                        <h1 className="text-[28px] leading-[36px] tracking-[-0.02em] font-semibold text-[#dae2fd]">
                            Page not found
                        </h1>
                        <p className="text-[16px] leading-[24px] text-[#c7c4d7] max-w-md mx-auto">
                            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <Link
                            href="/"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#c0c1ff] text-[#0d0096] text-[12px] leading-[16px] tracking-[0.02em] font-bold px-8 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all"
                        >
                            <House className="w-[18px] h-[18px]" />
                            Back to home
                        </Link>
                        <Link
                            href="/jobs"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 glass-stroke text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#dae2fd] px-8 py-3 rounded-xl hover:bg-[#ffffff]/5 transition-colors"
                        >
                            <Magnifier className="w-[18px] h-[18px]" />
                            Browse jobs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
