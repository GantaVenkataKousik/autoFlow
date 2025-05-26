"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import {
  BarChart3,
  Bot,
  DollarSign,
  Settings,
  Users,
  Activity,
  TrendingUp,
  Shield,
  Menu,
  X,
  LogOut,
  Bell,
  Search,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: BarChart3 },
  { name: "AI Agents", href: "/dashboard/agents", icon: Bot },
  { name: "Performance", href: "/dashboard/performance", icon: Activity },
  { name: "Analytics", href: "/dashboard/analytics", icon: TrendingUp },
  { name: "Cost Management", href: "/dashboard/costs", icon: DollarSign },
  { name: "Team Management", href: "/dashboard/team", icon: Users },
  { name: "Security", href: "/dashboard/security", icon: Shield },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated")
    if (!auth) {
      router.push("/auth/signin")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/auth/signin")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#00D1C7] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center">
              <div className="bg-[#00D1C7] text-white p-2 rounded-full mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className="text-xl font-bold">AutoFlow</span>
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive ? "bg-[#00D1C7] text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <div className="bg-[#00D1C7] text-white p-2 rounded-full mr-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <span className="text-xl font-bold">AutoFlow</span>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive ? "bg-[#00D1C7] text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00D1C7] lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <Search className="h-5 w-5" />
                  </div>
                  <input
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent"
                    placeholder="Search..."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00D1C7]">
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#00D1C7] text-white p-2 rounded-full">
                    <User className="h-5 w-5" />
                  </div>
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
