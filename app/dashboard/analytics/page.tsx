"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import {
  BarChart3,
  Users,
  MessageSquare,
  Clock,
  Target,
  Download,
  Filter,
  RefreshCw,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const analyticsData = [
  {
    title: "Total Interactions",
    value: "24,567",
    change: "+12.5%",
    changeType: "increase",
    icon: MessageSquare,
    color: "bg-[#00D1C7]",
  },
  {
    title: "Unique Users",
    value: "8,432",
    change: "+8.2%",
    changeType: "increase",
    icon: Users,
    color: "bg-[#D6FF51]",
  },
  {
    title: "Avg Session Duration",
    value: "4m 32s",
    change: "+15.3%",
    changeType: "increase",
    icon: Clock,
    color: "bg-[#6366F1]",
  },
  {
    title: "Goal Completion Rate",
    value: "87.4%",
    change: "+3.1%",
    changeType: "increase",
    icon: Target,
    color: "bg-green-500",
  },
]

const channelData = [
  { name: "Website Chat", users: 12450, sessions: 18230, conversion: 23.4 },
  { name: "Mobile App", users: 8920, sessions: 12450, conversion: 31.2 },
  { name: "Email Support", users: 5670, sessions: 7890, conversion: 18.7 },
  { name: "Social Media", users: 3240, sessions: 4560, conversion: 15.9 },
  { name: "API Integration", users: 2180, sessions: 3450, conversion: 42.1 },
]

const topPages = [
  { page: "/dashboard", views: 15420, uniqueViews: 12340, avgTime: "3m 45s", bounceRate: 12.3 },
  { page: "/agents", views: 8930, uniqueViews: 7120, avgTime: "5m 12s", bounceRate: 8.7 },
  { page: "/analytics", views: 6780, uniqueViews: 5430, avgTime: "4m 28s", bounceRate: 15.2 },
  { page: "/settings", views: 4560, uniqueViews: 3890, avgTime: "2m 56s", bounceRate: 22.1 },
]

const timeRanges = ["24h", "7d", "30d", "90d"]

export default function AnalyticsPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d")
  const [selectedMetric, setSelectedMetric] = useState("interactions")

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Comprehensive insights into user behavior and system performance
                </p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Time Range Selector */}
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Analytics Overview</h3>
              <div className="flex space-x-2">
                {timeRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedTimeRange(range)}
                    className={`px-3 py-1 text-sm rounded-md ${
                      selectedTimeRange === range ? "bg-[#00D1C7] text-white" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {analyticsData.map((metric) => (
              <div key={metric.title} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                    <div
                      className={`flex items-center mt-2 text-sm ${
                        metric.changeType === "increase" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {metric.changeType === "increase" ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      )}
                      {metric.change} from last period
                    </div>
                  </div>
                  <div className={`${metric.color} p-3 rounded-lg`}>
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* User Engagement Trends */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">User Engagement Trends</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedMetric("interactions")}
                    className={`px-3 py-1 text-sm rounded-md ${
                      selectedMetric === "interactions"
                        ? "bg-[#00D1C7] text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Interactions
                  </button>
                  <button
                    onClick={() => setSelectedMetric("users")}
                    className={`px-3 py-1 text-sm rounded-md ${
                      selectedMetric === "users" ? "bg-[#00D1C7] text-white" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Users
                  </button>
                </div>
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Chart data */}
                  {selectedMetric === "interactions" ? (
                    <>
                      {/* Interactions trend line */}
                      <path
                        d="M 20,180 L 60,160 L 100,140 L 140,120 L 180,100 L 220,80 L 260,90 L 300,70 L 340,60 L 380,40"
                        fill="none"
                        stroke="#00D1C7"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Data points */}
                      {[
                        { x: 20, y: 180 }, { x: 60, y: 160 }, { x: 100, y: 140 }, { x: 140, y: 120 },
                        { x: 180, y: 100 }, { x: 220, y: 80 }, { x: 260, y: 90 }, { x: 300, y: 70 },
                        { x: 340, y: 60 }, { x: 380, y: 40 }
                      ].map((point, index) => (
                        <circle key={index} cx={point.x} cy={point.y} r="4" fill="#00D1C7" />
                      ))}
                      {/* Area fill */}
                      <path
                        d="M 20,180 L 60,160 L 100,140 L 140,120 L 180,100 L 220,80 L 260,90 L 300,70 L 340,60 L 380,40 L 380,200 L 20,200 Z"
                        fill="url(#gradient1)"
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#00D1C7" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#00D1C7" stopOpacity="0.05"/>
                        </linearGradient>
                      </defs>
                    </>
                  ) : (
                    <>
                      {/* Users trend line */}
                      <path
                        d="M 20,160 L 60,150 L 100,130 L 140,110 L 180,95 L 220,85 L 260,80 L 300,75 L 340,65 L 380,50"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Data points */}
                      {[
                        { x: 20, y: 160 }, { x: 60, y: 150 }, { x: 100, y: 130 }, { x: 140, y: 110 },
                        { x: 180, y: 95 }, { x: 220, y: 85 }, { x: 260, y: 80 }, { x: 300, y: 75 },
                        { x: 340, y: 65 }, { x: 380, y: 50 }
                      ].map((point, index) => (
                        <circle key={index} cx={point.x} cy={point.y} r="4" fill="#6366F1" />
                      ))}
                      {/* Area fill */}
                      <path
                        d="M 20,160 L 60,150 L 100,130 L 140,110 L 180,95 L 220,85 L 260,80 L 300,75 L 340,65 L 380,50 L 380,200 L 20,200 Z"
                        fill="url(#gradient2)"
                      />
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.05"/>
                        </linearGradient>
                      </defs>
                    </>
                  )}
                  
                  {/* Y-axis labels */}
                  <text x="5" y="50" fontSize="12" fill="#6b7280">100k</text>
                  <text x="5" y="100" fontSize="12" fill="#6b7280">50k</text>
                  <text x="5" y="150" fontSize="12" fill="#6b7280">25k</text>
                  <text x="5" y="195" fontSize="12" fill="#6b7280">0</text>
                  
                  {/* X-axis labels */}
                  <text x="20" y="195" fontSize="10" fill="#6b7280">Week 1</text>
                  <text x="120" y="195" fontSize="10" fill="#6b7280">Week 2</text>
                  <text x="220" y="195" fontSize="10" fill="#6b7280">Week 3</text>
                  <text x="320" y="195" fontSize="10" fill="#6b7280">Week 4</text>
                </svg>
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Conversion Funnel</h3>
                <Eye className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#00D1C7]/10 rounded-lg">
                  <span className="text-sm font-medium">Visitors</span>
                  <span className="text-lg font-bold">24,567</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#D6FF51]/20 rounded-lg">
                  <span className="text-sm font-medium">Engaged Users</span>
                  <span className="text-lg font-bold">18,432</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#6366F1]/10 rounded-lg">
                  <span className="text-sm font-medium">Active Sessions</span>
                  <span className="text-lg font-bold">12,890</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-100 rounded-lg">
                  <span className="text-sm font-medium">Conversions</span>
                  <span className="text-lg font-bold">3,245</span>
                </div>
              </div>
            </div>
          </div>

          {/* Channel Performance */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Channel Performance</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Channel
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Users
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sessions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Conversion Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {channelData.map((channel, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{channel.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {channel.users.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {channel.sessions.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{channel.conversion}%</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div
                              className={`h-2 rounded-full ${
                                channel.conversion >= 30
                                  ? "bg-green-500"
                                  : channel.conversion >= 20
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${Math.min(channel.conversion * 2, 100)}%` }}
                            />
                          </div>
                          <span
                            className={`text-sm ${
                              channel.conversion >= 30
                                ? "text-green-600"
                                : channel.conversion >= 20
                                  ? "text-yellow-600"
                                  : "text-red-600"
                            }`}
                          >
                            {channel.conversion >= 30
                              ? "Excellent"
                              : channel.conversion >= 20
                                ? "Good"
                                : "Needs Improvement"}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Page Analytics */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Top Pages</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Page
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unique Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bounce Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topPages.map((page, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{page.page}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {page.views.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {page.uniqueViews.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{page.avgTime}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            page.bounceRate <= 15
                              ? "bg-green-100 text-green-800"
                              : page.bounceRate <= 25
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {page.bounceRate}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Real-time Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Real-time Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm">Active Users</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">247</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">Active Sessions</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">189</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm">Page Views/min</span>
                  </div>
                  <span className="text-lg font-bold text-purple-600">1,234</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Geographic Distribution</h3>
              <div className="h-64 rounded-lg p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-3 bg-blue-500 rounded-sm mr-3"></div>
                      <span className="text-sm font-medium">United States</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="w-28 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold">42.3%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-3 bg-green-500 rounded-sm mr-3"></div>
                      <span className="text-sm font-medium">Canada</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold">28.7%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-3 bg-purple-500 rounded-sm mr-3"></div>
                      <span className="text-sm font-medium">United Kingdom</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="w-12 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold">15.2%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-3 bg-orange-500 rounded-sm mr-3"></div>
                      <span className="text-sm font-medium">Germany</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="w-8 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold">8.9%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-3 bg-red-500 rounded-sm mr-3"></div>
                      <span className="text-sm font-medium">Australia</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="w-6 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold">4.9%</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total Countries</span>
                      <span className="font-bold">47</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
