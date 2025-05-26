"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userEmail", formData.email)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 flex items-center justify-center p-4 font-poppins">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-[#00D1C7] text-white p-3 rounded-full mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Workflow nodes */}
                <circle cx="6" cy="6" r="2" fill="currentColor"/>
                <circle cx="18" cy="6" r="2" fill="currentColor"/>
                <circle cx="6" cy="18" r="2" fill="currentColor"/>
                <circle cx="18" cy="18" r="2" fill="currentColor"/>
                <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                
                {/* Flow arrows */}
                <path d="M8 6L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16 6L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 18L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16 18L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                
                {/* AI brain pattern */}
                <path d="M10.5 10.5C10.5 10.5 11 9.5 12 10.5C13 9.5 13.5 10.5 13.5 10.5" 
                      stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                <path d="M10.5 13.5C10.5 13.5 11 14.5 12 13.5C13 14.5 13.5 13.5 13.5 13.5" 
                      stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold">AutoFlow</h1>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your AutoFlow dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 h-12 border-gray-200 focus:border-[#00D1C7] focus:ring-[#00D1C7]"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 h-12 border-gray-200 focus:border-[#00D1C7] focus:ring-[#00D1C7]"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-[#00D1C7] focus:ring-[#00D1C7]" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-[#00D1C7] hover:text-[#00bab1]">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#00D1C7] hover:bg-[#00bab1] text-white font-medium rounded-lg flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight size={16} />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-[#00D1C7] hover:text-[#00bab1] font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <Link href="#" className="text-[#00D1C7] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#00D1C7] hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
