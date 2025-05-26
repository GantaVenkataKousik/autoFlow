"use client"

import { useState, useEffect } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { BarChart3, TrendingUp, TrendingDown, Users, Bot, DollarSign, Activity, CheckCircle, Zap } from "lucide-react"

const stats = [
  {
    name: "Active AI Agents",
    value: "24",
    change: "+12%",
    changeType: "increase",
    icon: Bot,
    color: "bg-[#00D1C7]",
  },
  {
    name: "Total Automations",
    value: "1,247",
    change: "+8%",
    changeType: "increase",
    icon: Zap,
    color: "bg-[#D6FF51]",
  },
  {
    name: "Cost Savings",
    value: "$45,230",
    change: "+23%",
    changeType: "increase",
    icon: DollarSign,
    color: "bg-[#6366F1]",
  },
  {
    name: "Success Rate",
    value: "98.5%",
    change: "+2.1%",
    changeType: "increase",
    icon: CheckCircle,
    color: "bg-green-500",
  },
]

const recentActivities = [
  {
    id: 1,
    type: "agent_deployed",
    message: "Customer Support Agent deployed successfully",
    time: "2 minutes ago",
    status: "success",
  },
  {
    id: 2,
    type: "automation_completed",
    message: "Data processing automation completed",
    time: "15 minutes ago",
    status: "success",
  },
  {
    id: 3,
    type: "alert",
    message: "High API usage detected on Sales Agent",
    time: "1 hour ago",
    status: "warning",
  },
  {
    id: 4,
    type: "cost_optimization",
    message: "Cost optimization suggestion available",
    time: "2 hours ago",
    status: "info",
  },
]

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const email = localStorage.getItem("userEmail")
    if (email) {
      setUserEmail(email)
    }
  }, [])

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="mt-1 text-sm text-gray-500">
              Welcome back! Here's what's happening with your AI automation platform.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                          <div
                            className={`ml-2 flex items-baseline text-sm font-semibold ${
                              stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {stat.changeType === "increase" ? (
                              <TrendingUp className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                            ) : (
                              <TrendingDown className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
                            )}
                            <span className="ml-1">{stat.change}</span>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts and Activity Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Performance Chart */}
            <div className="lg:col-span-2 bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Performance Overview</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-[#00D1C7] text-white rounded-md">7D</button>
                  <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 rounded-md">30D</button>
                  <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 rounded-md">90D</button>
                </div>
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="dashboardGrid" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                    </pattern>
                    <linearGradient id="dashboardGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00D1C7" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#00D1C7" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="dashboardGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dashboardGrid)" />
                  
                  {/* Y-axis labels */}
                  <text x="15" y="25" fontSize="10" fill="#6b7280">100%</text>
                  <text x="15" y="65" fontSize="10" fill="#6b7280">75%</text>
                  <text x="15" y="105" fontSize="10" fill="#6b7280">50%</text>
                  <text x="15" y="145" fontSize="10" fill="#6b7280">25%</text>
                  <text x="15" y="185" fontSize="10" fill="#6b7280">0%</text>
                  
                  {/* X-axis labels */}
                  <text x="60" y="195" fontSize="10" fill="#6b7280">Mon</text>
                  <text x="120" y="195" fontSize="10" fill="#6b7280">Tue</text>
                  <text x="180" y="195" fontSize="10" fill="#6b7280">Wed</text>
                  <text x="240" y="195" fontSize="10" fill="#6b7280">Thu</text>
                  <text x="300" y="195" fontSize="10" fill="#6b7280">Fri</text>
                  <text x="360" y="195" fontSize="10" fill="#6b7280">Sat</text>
                  
                  {/* Success Rate Area */}
                  <path 
                    d="M40,50 L100,40 L160,45 L220,35 L280,40 L340,30 L380,25 L380,180 L40,180 Z"
                    fill="url(#dashboardGradient1)"
                  />
                  
                  {/* Efficiency Area */}
                  <path 
                    d="M40,80 L100,70 L160,75 L220,65 L280,70 L340,60 L380,55 L380,180 L40,180 Z"
                    fill="url(#dashboardGradient2)"
                  />
                  
                  {/* Success Rate Line */}
                  <path 
                    d="M40,50 L100,40 L160,45 L220,35 L280,40 L340,30 L380,25"
                    fill="none" 
                    stroke="#00D1C7" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Efficiency Line */}
                  <path 
                    d="M40,80 L100,70 L160,75 L220,65 L280,70 L340,60 L380,55"
                    fill="none" 
                    stroke="#6366F1" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Data points */}
                  <circle cx="40" cy="50" r="4" fill="#00D1C7"/>
                  <circle cx="100" cy="40" r="4" fill="#00D1C7"/>
                  <circle cx="160" cy="45" r="4" fill="#00D1C7"/>
                  <circle cx="220" cy="35" r="4" fill="#00D1C7"/>
                  <circle cx="280" cy="40" r="4" fill="#00D1C7"/>
                  <circle cx="340" cy="30" r="4" fill="#00D1C7"/>
                  <circle cx="380" cy="25" r="4" fill="#00D1C7"/>
                  
                  <circle cx="40" cy="80" r="4" fill="#6366F1"/>
                  <circle cx="100" cy="70" r="4" fill="#6366F1"/>
                  <circle cx="160" cy="75" r="4" fill="#6366F1"/>
                  <circle cx="220" cy="65" r="4" fill="#6366F1"/>
                  <circle cx="280" cy="70" r="4" fill="#6366F1"/>
                  <circle cx="340" cy="60" r="4" fill="#6366F1"/>
                  <circle cx="380" cy="55" r="4" fill="#6366F1"/>
                  
                  {/* Legend */}
                  <g transform="translate(40, 15)">
                    <circle cx="8" cy="5" r="4" fill="#00D1C7"/>
                    <text x="18" y="9" fontSize="11" fill="#374151">Success Rate</text>
                    
                    <circle cx="110" cy="5" r="4" fill="#6366F1"/>
                    <text x="120" y="9" fontSize="11" fill="#374151">Efficiency</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div
                      className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                        activity.status === "success"
                          ? "bg-green-400"
                          : activity.status === "warning"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-medium text-gray-900">Customer Support Agent</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-green-600">Active</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Conversations</span>
                  <span className="text-sm font-medium">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Avg Response Time</span>
                  <span className="text-sm font-medium">2.3s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Satisfaction</span>
                  <span className="text-sm font-medium">4.8/5</span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-medium text-gray-900">Sales Assistant</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-green-600">Active</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Leads Generated</span>
                  <span className="text-sm font-medium">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Conversion Rate</span>
                  <span className="text-sm font-medium">23.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Revenue Impact</span>
                  <span className="text-sm font-medium">$12,450</span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-medium text-gray-900">Data Processor</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-yellow-600">Processing</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Records Processed</span>
                  <span className="text-sm font-medium">45,230</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Processing Speed</span>
                  <span className="text-sm font-medium">1.2k/min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Error Rate</span>
                  <span className="text-sm font-medium">0.02%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#00D1C7] hover:bg-[#00D1C7]/5 transition-colors">
                <div className="text-center">
                  <Bot className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">Deploy New Agent</span>
                </div>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#00D1C7] hover:bg-[#00D1C7]/5 transition-colors">
                <div className="text-center">
                  <Activity className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">View Analytics</span>
                </div>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#00D1C7] hover:bg-[#00D1C7]/5 transition-colors">
                <div className="text-center">
                  <DollarSign className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">Cost Analysis</span>
                </div>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#00D1C7] hover:bg-[#00D1C7]/5 transition-colors">
                <div className="text-center">
                  <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">Manage Team</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
