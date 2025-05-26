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
  Globe,
  TrendingUp,
  Activity,
  Zap,
  MousePointer,
  Smartphone,
  Monitor,
  Tablet,
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

const deviceData = [
  { device: "Desktop", users: 15420, percentage: 62.3, icon: Monitor },
  { device: "Mobile", users: 7890, percentage: 31.9, icon: Smartphone },
  { device: "Tablet", users: 1430, percentage: 5.8, icon: Tablet },
]

const geographicData = [
  { country: "United States", users: 8450, percentage: 34.2, color: "#00D1C7" },
  { country: "United Kingdom", users: 3240, percentage: 13.1, color: "#D6FF51" },
  { country: "Germany", users: 2890, percentage: 11.7, color: "#6366F1" },
  { country: "France", users: 2340, percentage: 9.5, color: "#10B981" },
  { country: "Canada", users: 1890, percentage: 7.6, color: "#F59E0B" },
  { country: "Others", users: 5930, percentage: 23.9, color: "#9CA3AF" },
]

const funnelData = [
  { stage: "Visitors", count: 24567, percentage: 100, color: "#00D1C7" },
  { stage: "Engaged Users", count: 18430, percentage: 75, color: "#D6FF51" },
  { stage: "Active Sessions", count: 12340, percentage: 50.2, color: "#6366F1" },
  { stage: "Goal Completions", count: 8920, percentage: 36.3, color: "#10B981" },
  { stage: "Conversions", count: 4560, percentage: 18.6, color: "#F59E0B" },
]

const userFlowData = [
  { from: "Landing Page", to: "Dashboard", users: 8450, percentage: 68.5 },
  { from: "Dashboard", to: "Agents", users: 5780, percentage: 46.8 },
  { from: "Agents", to: "Analytics", users: 3240, percentage: 26.2 },
  { from: "Analytics", to: "Settings", users: 1890, percentage: 15.3 },
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
                    <linearGradient id="engagementGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00D1C7" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#00D1C7" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Y-axis labels */}
                  <text x="15" y="25" fontSize="10" fill="#6b7280">100%</text>
                  <text x="15" y="65" fontSize="10" fill="#6b7280">75%</text>
                  <text x="15" y="105" fontSize="10" fill="#6b7280">50%</text>
                  <text x="15" y="145" fontSize="10" fill="#6b7280">25%</text>
                  <text x="15" y="185" fontSize="10" fill="#6b7280">0%</text>
                  
                  {/* X-axis labels */}
                  <text x="60" y="195" fontSize="10" fill="#6b7280">Week 1</text>
                  <text x="140" y="195" fontSize="10" fill="#6b7280">Week 2</text>
                  <text x="220" y="195" fontSize="10" fill="#6b7280">Week 3</text>
                  <text x="300" y="195" fontSize="10" fill="#6b7280">Week 4</text>
                  
                  {/* Area chart */}
                  <path
                    d="M40,160 L100,140 L160,120 L220,100 L280,80 L340,60 L380,40 L380,180 L40,180 Z"
                    fill="url(#engagementGradient)"
                  />
                  
                  {/* Line chart */}
                  <path
                    d="M40,160 L100,140 L160,120 L220,100 L280,80 L340,60 L380,40"
                    fill="none"
                    stroke="#00D1C7"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Data points */}
                  <circle cx="40" cy="160" r="4" fill="#00D1C7"/>
                  <circle cx="100" cy="140" r="4" fill="#00D1C7"/>
                  <circle cx="160" cy="120" r="4" fill="#00D1C7"/>
                  <circle cx="220" cy="100" r="4" fill="#00D1C7"/>
                  <circle cx="280" cy="80" r="4" fill="#00D1C7"/>
                  <circle cx="340" cy="60" r="4" fill="#00D1C7"/>
                  <circle cx="380" cy="40" r="4" fill="#00D1C7"/>
                </svg>
              </div>
            </div>

            {/* Device Distribution */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Device Distribution</h3>
              <div className="space-y-4">
                {deviceData.map((device, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#00D1C7] p-2 rounded-lg">
                        <device.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{device.device}</p>
                        <p className="text-xs text-gray-500">{device.users.toLocaleString()} users</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-[#00D1C7]"
                          style={{ width: `${device.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 w-12">{device.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Device Usage Donut Chart */}
              <div className="mt-6 flex justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <defs>
                    {deviceData.map((device, index) => (
                      <linearGradient key={index} id={`deviceGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={index === 0 ? "#00D1C7" : index === 1 ? "#D6FF51" : "#6366F1"} stopOpacity="1"/>
                        <stop offset="100%" stopColor={index === 0 ? "#00D1C7" : index === 1 ? "#D6FF51" : "#6366F1"} stopOpacity="0.7"/>
                      </linearGradient>
                    ))}
                  </defs>
                  
                  <g transform="translate(100, 100)">
                    {deviceData.map((device, index) => {
                      const total = deviceData.reduce((sum, d) => sum + d.percentage, 0)
                      const percentage = device.percentage / total
                      const angle = percentage * 2 * Math.PI
                      const startAngle = deviceData.slice(0, index).reduce((sum, d) => sum + (d.percentage / total) * 2 * Math.PI, 0)
                      const endAngle = startAngle + angle
                      
                      const x1 = Math.cos(startAngle) * 70
                      const y1 = Math.sin(startAngle) * 70
                      const x2 = Math.cos(endAngle) * 70
                      const y2 = Math.sin(endAngle) * 70
                      
                      const x3 = Math.cos(startAngle) * 40
                      const y3 = Math.sin(startAngle) * 40
                      const x4 = Math.cos(endAngle) * 40
                      const y4 = Math.sin(endAngle) * 40
                      
                      const largeArcFlag = angle > Math.PI ? 1 : 0
                      
                      return (
                        <path
                          key={index}
                          d={`M ${x3} ${y3} L ${x1} ${y1} A 70 70 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x4} ${y4} A 40 40 0 ${largeArcFlag} 0 ${x3} ${y3} Z`}
                          fill={`url(#deviceGradient-${index})`}
                          stroke="white"
                          strokeWidth="2"
                        />
                      )
                    })}
                  </g>
                  
                  {/* Center text */}
                  <text x="100" y="95" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#374151">Total</text>
                  <text x="100" y="115" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#374151">
                    {deviceData.reduce((sum, d) => sum + d.users, 0).toLocaleString()}
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Geographic Distribution and Conversion Funnel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Geographic Distribution */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Geographic Distribution</h3>
              <div className="space-y-3">
                {geographicData.map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: country.color }}></div>
                      <span className="text-sm text-gray-900">{country.country}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{ 
                            width: `${country.percentage}%`, 
                            backgroundColor: country.color 
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 w-12">{country.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* World Map Visualization */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <svg width="100%" height="120" viewBox="0 0 400 120">
                  {/* Simplified world map representation */}
                  <rect x="50" y="30" width="80" height="60" rx="8" fill="#00D1C7" opacity="0.8"/>
                  <text x="90" y="65" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">US</text>
                  
                  <rect x="140" y="25" width="60" height="50" rx="6" fill="#D6FF51" opacity="0.8"/>
                  <text x="170" y="55" textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">UK</text>
                  
                  <rect x="210" y="28" width="55" height="55" rx="6" fill="#6366F1" opacity="0.8"/>
                  <text x="237" y="60" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">DE</text>
                  
                  <rect x="275" y="32" width="50" height="48" rx="6" fill="#10B981" opacity="0.8"/>
                  <text x="300" y="60" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">FR</text>
                  
                  <rect x="335" y="20" width="45" height="65" rx="6" fill="#F59E0B" opacity="0.8"/>
                  <text x="357" y="57" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">CA</text>
                </svg>
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Conversion Funnel</h3>
              <div className="space-y-2">
                {funnelData.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{stage.stage}</span>
                      <span className="text-sm text-gray-500">{stage.count.toLocaleString()}</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-8">
                        <div
                          className="h-8 rounded-full flex items-center justify-center text-white text-xs font-medium"
                          style={{ 
                            width: `${stage.percentage}%`, 
                            backgroundColor: stage.color 
                          }}
                        >
                          {stage.percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Funnel Visualization */}
              <div className="mt-6">
                <svg width="100%" height="200" viewBox="0 0 300 200">
                  {funnelData.map((stage, index) => {
                    const width = (stage.percentage / 100) * 250
                    const x = (300 - width) / 2
                    const y = index * 35 + 10
                    
                    return (
                      <g key={index}>
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height="25"
                          fill={stage.color}
                          rx="4"
                          opacity="0.8"
                        />
                        <text
                          x="150"
                          y={y + 17}
                          textAnchor="middle"
                          fontSize="11"
                          fill="white"
                          fontWeight="bold"
                        >
                          {stage.stage}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* User Flow and Real-time Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* User Flow */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">User Flow Analysis</h3>
              <div className="space-y-4">
                {userFlowData.map((flow, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#00D1C7] p-2 rounded-full">
                        <MousePointer className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{flow.from} → {flow.to}</p>
                        <p className="text-xs text-gray-500">{flow.users.toLocaleString()} users</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">{flow.percentage}%</p>
                      <p className="text-xs text-gray-500">conversion</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Flow Diagram */}
              <div className="mt-6">
                <svg width="100%" height="150" viewBox="0 0 400 150">
                  {/* Flow connections */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#00D1C7" />
                    </marker>
                  </defs>
                  
                  {/* Nodes */}
                  <circle cx="50" cy="75" r="20" fill="#00D1C7" opacity="0.8"/>
                  <text x="50" y="80" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">LP</text>
                  
                  <circle cx="150" cy="75" r="18" fill="#D6FF51" opacity="0.8"/>
                  <text x="150" y="80" textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">DB</text>
                  
                  <circle cx="250" cy="75" r="16" fill="#6366F1" opacity="0.8"/>
                  <text x="250" y="80" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">AG</text>
                  
                  <circle cx="350" cy="75" r="14" fill="#10B981" opacity="0.8"/>
                  <text x="350" y="80" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">AN</text>
                  
                  {/* Flow arrows */}
                  <line x1="70" y1="75" x2="130" y2="75" stroke="#00D1C7" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                  <line x1="170" y1="75" x2="230" y2="75" stroke="#00D1C7" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  <line x1="270" y1="75" x2="330" y2="75" stroke="#00D1C7" strokeWidth="1.5" markerEnd="url(#arrowhead)"/>
                  
                  {/* Flow percentages */}
                  <text x="100" y="65" textAnchor="middle" fontSize="10" fill="#6b7280">68.5%</text>
                  <text x="200" y="65" textAnchor="middle" fontSize="10" fill="#6b7280">46.8%</text>
                  <text x="300" y="65" textAnchor="middle" fontSize="10" fill="#6b7280">26.2%</text>
                </svg>
              </div>
            </div>

            {/* Real-time Metrics */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Real-time Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Active Users */}
                <div className="text-center">
                  <div className="bg-[#00D1C7] p-4 rounded-lg mb-3">
                    <Activity className="h-8 w-8 text-white mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                  <p className="text-sm text-gray-500">Active Users</p>
                </div>
                
                {/* Page Views */}
                <div className="text-center">
                  <div className="bg-[#D6FF51] p-4 rounded-lg mb-3">
                    <Eye className="h-8 w-8 text-black mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">3,456</p>
                  <p className="text-sm text-gray-500">Page Views</p>
                </div>
                
                {/* Bounce Rate */}
                <div className="text-center">
                  <div className="bg-[#6366F1] p-4 rounded-lg mb-3">
                    <TrendingUp className="h-8 w-8 text-white mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">23.4%</p>
                  <p className="text-sm text-gray-500">Bounce Rate</p>
                </div>
                
                {/* Conversion Rate */}
                <div className="text-center">
                  <div className="bg-[#10B981] p-4 rounded-lg mb-3">
                    <Zap className="h-8 w-8 text-white mx-auto" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">4.7%</p>
                  <p className="text-sm text-gray-500">Conversion</p>
                </div>
              </div>
              
              {/* Real-time Activity Feed */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Live Activity</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-600">User from US visited /dashboard</span>
                    <span className="text-gray-400">2s ago</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-600">New session started from UK</span>
                    <span className="text-gray-400">5s ago</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-600">Goal completed by user from DE</span>
                    <span className="text-gray-400">12s ago</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-600">Agent interaction from CA</span>
                    <span className="text-gray-400">18s ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Channel Performance and Top Pages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Channel Performance */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Channel Performance</h3>
              <div className="space-y-4">
                {channelData.map((channel, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium text-gray-900">{channel.name}</h4>
                      <span className="text-sm text-gray-500">{channel.conversion}% conversion</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Users</p>
                        <p className="font-semibold">{channel.users.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Sessions</p>
                        <p className="font-semibold">{channel.sessions.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-[#00D1C7]"
                          style={{ width: `${(channel.conversion / 50) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Pages */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Top Pages</h3>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium text-gray-900">{page.page}</h4>
                      <span className="text-sm text-gray-500">{page.bounceRate}% bounce</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Views</p>
                        <p className="font-semibold">{page.views.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Unique</p>
                        <p className="font-semibold">{page.uniqueViews.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Avg Time</p>
                        <p className="font-semibold">{page.avgTime}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-[#D6FF51]"
                          style={{ width: `${100 - page.bounceRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
