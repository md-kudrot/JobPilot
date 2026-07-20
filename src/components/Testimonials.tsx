"use client"

import React, { useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, StarFill } from "@gravity-ui/icons"

export default function Testimonials() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            card.style.setProperty("--mouse-x", `${x}px`)
            card.style.setProperty("--mouse-y", `${y}px`)
        }

        const currentCards = cardRefs.current
        const cleanupFns: (() => void)[] = []

        currentCards.forEach((card) => {
            if (card) {
                const listener = (e: MouseEvent) => handleMouseMove(e, card)
                card.addEventListener("mousemove", listener)
                cleanupFns.push(() => card.removeEventListener("mousemove", listener))
            }
        })

        return () => {
            cleanupFns.forEach((fn) => fn())
        }
    }, [])

    return (
        <section className="py-16 px-10 bg-[#131b2e]">
            <div className="max-w-container-max mx-auto">
                <div className="mb-16 flex flex-wrap justify-between gap-4">
                    <div>
                        <h2 className="text-[30px] leading-[38px] tracking-[-0.02em] font-semibold">
                            Winning Career Stories
                        </h2>
                        <p className="text-[#c7c4d7] text-[16px] leading-[24px] tracking-[0em] font-normal mt-3">
                            Join over 50,000 professionals who transformed their search.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div
                        ref={(el) => {
                            if (el) cardRefs.current[0] = el
                        }}
                        className="bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 p-6 rounded-2xl"
                    >
                        <div className="flex gap-1 text-[#4edea3] mb-6">
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                        </div>
                        <p className="text-[16px] leading-[24px] tracking-[0em] font-normal mb-16 italic text-[#dae2fd]">
                            "The AI Match engine is a game changer. I used to apply for 50 jobs a week. With JobPilot, I
                            only apply to 5 and get 3 interviews."
                        </p>
                        <div className="flex items-center gap-3">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                alt="Sarah Jenkins"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZfAAG7Ncr3yTlkHx9ETdL5o3K9bc_rWiUl6xFSwCBp0LeXLSNm96LjpJexm5NjRL8k7p5FNbc6SDo4iV2SrR6fttNqU537lF9rC69TRccO4bRh93pQPFsLvZErEwWF3VUDFwt2SjTONMtLSYfHPLlqMohAQ7sXwSUHbkg9kaaNGF-u29GKgqKOwAv07dg3jNYsCgRlrJtx8TKSGCO1IBuJLLldJ-3qTFVWAB_f4d4w2KE3acAL42oA"
                            />
                            <div>
                                <div className="text-[12px] leading-[16px] tracking-[0.02em] font-bold">
                                    Sarah Jenkins
                                </div>
                                <div className="text-[10px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7]">
                                    Senior Dev at Stripe
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={(el) => {
                            if (el) cardRefs.current[1] = el
                        }}
                        className="bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 p-6 rounded-2xl"
                    >
                        <div className="flex gap-1 text-[#4edea3] mb-6">
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                        </div>
                        <p className="text-[16px] leading-[24px] tracking-[0em] font-normal mb-16 italic text-[#dae2fd]">
                            "The auto-generated cover letters sounded more like me than I do. Landing my product role at
                            Meta was 10x easier with JobPilot tracking."
                        </p>
                        <div className="flex items-center gap-3">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                alt="David Chen"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB97NdQ9MTyUz2WFBDbzEt9rIXLbdCRqIWLpOYH5Fz6ojxZVrRsiNWcKiNZFAPjQWt26_J8L2c18BQCn7GT8MXmQmxauMAIZx4IX9SRapxkivIoDepRT2T5cvJKB_uMUDOe_wbyn_vTqKh-mJ_OtaBqhAbZZmrXQPzj-Ja99SSCiHkUnwJHEaeVAspq2ble7SBOgXUl7PZMiXV_l17bq22qNCxVA79bCZCswlCImtA-wr72XttoAkG4qw"
                            />
                            <div>
                                <div className="text-[12px] leading-[16px] tracking-[0.02em] font-bold">David Chen</div>
                                <div className="text-[10px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7]">
                                    Product Manager at Meta
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={(el) => {
                            if (el) cardRefs.current[2] = el
                        }}
                        className="bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 p-6 rounded-2xl"
                    >
                        <div className="flex gap-1 text-[#4edea3] mb-6">
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                            <StarFill className="w-6 h-6" />
                        </div>
                        <p className="text-[16px] leading-[24px] tracking-[0em] font-normal mb-16 italic text-[#dae2fd]">
                            "I found a role through the hidden discovery tool that wasn't even listed on LinkedIn yet. I
                            was the first to apply and got the offer."
                        </p>
                        <div className="flex items-center gap-3">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                alt="Maya Rodriguez"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6GEiqM0EY9aXjaDzJ96hCJyhKCjOsb_k-xDVH8JouRrutsPetiRuldy3J0U_WggaqR9LWKY_NVsxjKFQtCdvctGueMZDvlocb9OH0iN5PUMJ10kffLK4oSjVEEGr0J2mC7g4go9RsBcbevVwAmLr_Sq93hV3yoNOO1f4hfNMOunL3jRuQyisaKZvEQ5hk_YH44h4_RaDc9u16ngW1HMiKjHK2GsKBChhLgFaJsL_3ybY0UFFTDbI_dw"
                            />
                            <div>
                                <div className="text-[12px] leading-[16px] tracking-[0.02em] font-bold">
                                    Maya Rodriguez
                                </div>
                                <div className="text-[10px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7]">
                                    UX Lead at Figma
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

