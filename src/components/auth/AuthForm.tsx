"use client"

import React, { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Envelope, Lock, Eye, ArrowRight, Rocket, Person, Briefcase, Headphones, CircleCheck } from "@gravity-ui/icons"
import { authClient } from "@/lib/auth-client"

interface AuthFormProps {
    mode: "login" | "signup"
}

export default function AuthForm({ mode }: AuthFormProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get("redirect") || "/profile"
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const isLogin = mode === "login"

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        if (!isLogin && password !== confirmPassword) {
            setError("Passwords do not match.")
            return
        }

        setIsLoading(true)

        try {
            if (isLogin) {
                const { error } = await authClient.signIn.email({ email, password })
                if (error) {
                    setError(error.message ?? "Unable to sign in. Please try again.")
                    return
                }
            } else {
                const { error } = await authClient.signUp.email({
                    email,
                    password,
                    name: `${firstName} ${lastName}`.trim() || email
                })
                if (error) {
                    setError(error.message ?? "Unable to create account. Please try again.")
                    return
                }
            }
            router.push(redirectTo)
            router.refresh()
        } catch {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-[#0b1326] overflow-y-auto">
            <div className="w-full max-w-[440px] space-y-8 py-8">
                {/* Header */}
                <div className="text-center lg:text-left space-y-3">
                    <div className="lg:hidden flex justify-center mb-6">
                        <Rocket className="text-[#c0c1ff] w-8 h-8" />
                    </div>
                    <h3 className="text-[24px]  leading-[32px] tracking-[-0.02em] mt-15 font-semibold text-[#dae2fd]">
                        {isLogin ? "Welcome back" : "Join JobPilot AI"}
                    </h3>
                    <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#c7c4d7]">
                        {isLogin
                            ? "Enter your credentials to access your dashboard."
                            : "Launch your career trajectory with the power of neural matching."}
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Google Login */}
                    <button
                        className="w-full h-14 rounded-2xl border border-[#ffffff]/10 bg-[#ffffff]/5 flex items-center justify-center gap-3 text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#dae2fd] hover:bg-[#ffffff]/10 transition-all active:scale-95"
                        type="button"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            ></path>
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            ></path>
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                fill="#FBBC05"
                            ></path>
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            ></path>
                        </svg>
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-[#ffffff]/5"></div>
                        <span className="flex-shrink mx-4 text-[#c7c4d7] text-[12px] leading-[16px] tracking-[0.05em] font-bold uppercase">
                            or email
                        </span>
                        <div className="flex-grow border-t border-[#ffffff]/5"></div>
                    </div>

                    {/* Name Fields - Signup Only */}
                    {!isLogin && (
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label
                                    className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] ml-1"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                                <div className="relative group">
                                    <Person className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] group-focus-within:text-[#c0c1ff] transition-colors w-5 h-5" />
                                    <input
                                        className="w-full h-12 pl-12 pr-4 bg-[#131b2e] border border-[#ffffff]/10 rounded-2xl text-[#dae2fd] placeholder:text-[#908fa0]/50 focus:border-[#8083ff] focus:ring-0 focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                                        id="firstName"
                                        placeholder="John"
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label
                                    className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] ml-1"
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </label>
                                <div className="relative group">
                                    <Person className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] group-focus-within:text-[#c0c1ff] transition-colors w-5 h-5" />
                                    <input
                                        className="w-full h-12 pl-12 pr-4 bg-[#131b2e] border border-[#ffffff]/10 rounded-2xl text-[#dae2fd] placeholder:text-[#908fa0]/50 focus:border-[#8083ff] focus:ring-0 focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                                        id="lastName"
                                        placeholder="Doe"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Email Input */}
                    <div className="space-y-1">
                        <label
                            className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] ml-1"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <div className="relative group">
                            <Envelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] group-focus-within:text-[#c0c1ff] transition-colors w-5 h-5" />
                            <input
                                className="w-full h-12 pl-12 pr-4 bg-[#131b2e] border border-[#ffffff]/10 rounded-2xl text-[#dae2fd] placeholder:text-[#908fa0]/50 focus:border-[#8083ff] focus:ring-0 focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                                id="email"
                                placeholder="name@company.com"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Phone - Signup Only */}
                    {!isLogin && (
                        <div className="space-y-1">
                            <label
                                className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] ml-1"
                                htmlFor="phone"
                            >
                                Phone (Optional)
                            </label>
                            <div className="relative group">
                                <Headphones className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] group-focus-within:text-[#c0c1ff] transition-colors w-5 h-5" />
                                <input
                                    className="w-full h-12 pl-12 pr-4 bg-[#131b2e] border border-[#ffffff]/10 rounded-2xl text-[#dae2fd] placeholder:text-[#908fa0]/50 focus:border-[#8083ff] focus:ring-0 focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                                    id="phone"
                                    placeholder="+1 (555) 000-0000"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* Password Input */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-end mb-1">
                            <label
                                className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] ml-1"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            {isLogin && (
                                <a
                                    className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c0c1ff] hover:text-[#4edea3] transition-colors"
                                    href="#"
                                >
                                    Forgot password?
                                </a>
                            )}
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] group-focus-within:text-[#c0c1ff] transition-colors w-5 h-5" />
                            <input
                                className="w-full h-12 pl-12 pr-12 bg-[#131b2e] border border-[#ffffff]/10 rounded-2xl text-[#dae2fd] placeholder:text-[#908fa0]/50 focus:border-[#8083ff] focus:ring-0 focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                                id="password"
                                placeholder="••••••••"
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] hover:text-[#dae2fd] transition-colors"
                                onClick={() => setShowPassword(!showPassword)}
                                type="button"
                            >
                                <Eye className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password - Signup Only */}
                    {!isLogin && (
                        <div className="space-y-1">
                            <label
                                className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] ml-1"
                                htmlFor="confirmPassword"
                            >
                                Confirm Password
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] group-focus-within:text-[#c0c1ff] transition-colors w-5 h-5" />
                                <input
                                    className="w-full h-12 pl-12 pr-12 bg-[#131b2e] border border-[#ffffff]/10 rounded-2xl text-[#dae2fd] placeholder:text-[#908fa0]/50 focus:border-[#8083ff] focus:ring-0 focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] hover:text-[#dae2fd] transition-colors"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    type="button"
                                >
                                    <Eye className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Terms & Conditions - Signup Only */}
                    {!isLogin && (
                        <label className="flex items-start gap-2 cursor-pointer">
                            <input
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                                className="sr-only peer"
                                type="checkbox"
                            />
                            <div className="relative flex-shrink-0 mt-1">
                                <div className="w-5 h-5 border border-[#908fa0] rounded peer-checked:bg-[#c0c1ff] peer-checked:border-[#c0c1ff] transition-all"></div>
                                {agreedToTerms && <CircleCheck className="absolute inset-0 text-[#0b1326] w-5 h-5" />}
                            </div>
                            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-normal text-[#c7c4d7]">
                                I agree to the{" "}
                                <a className="text-[#c0c1ff] hover:text-[#4edea3] transition-colors" href="#">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a className="text-[#c0c1ff] hover:text-[#4edea3] transition-colors" href="#">
                                    Privacy Policy
                                </a>
                            </span>
                        </label>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="rounded-2xl border border-[#ff6b6b]/30 bg-[#ff6b6b]/10 px-4 py-3 text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#ff9d9d]">
                            {error}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        className="w-full h-12 rounded-2xl bg-gradient-to-b from-[#8083ff] to-[#494bd6] text-[#ffffff] text-[14px] leading-[20px] tracking-[0em] font-medium flex items-center justify-center gap-2 mt-4 hover:opacity-90 active:scale-95 transition-all shadow-lg disabled:opacity-50"
                        disabled={isLoading || (!isLogin && !agreedToTerms)}
                        type="submit"
                    >
                        {isLoading ? (
                            <>
                                <div className="animate-spin">⟳</div>
                                <span>Processing...</span>
                            </>
                        ) : (
                            <>
                                <span>{isLogin ? "Sign In" : "Get Started"}</span>
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>

                    {/* Toggle State */}
                    <p className="text-center text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] pt-2">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <a
                            className="text-[#c0c1ff] font-bold hover:text-[#4edea3] ml-1 transition-colors"
                            href={isLogin ? "/signup" : "/login"}
                        >
                            {isLogin ? "Create account" : "Sign in here"}
                        </a>
                    </p>
                </form>

                {/* Footer Links */}
                <div className="flex items-center justify-center gap-6 pt-8 border-t border-[#ffffff]/5">
                    <a
                        className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                    <span className="w-1 h-1 rounded-full bg-[#ffffff]/10"></span>
                    <a
                        className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors"
                        href="#"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </section>
    )
}

