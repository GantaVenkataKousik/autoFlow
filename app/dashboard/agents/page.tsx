"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import {
  Bot,
  Plus,
  Search,
  MoreVertical,
  Play,
  Pause,
  Settings,
  Trash2,
  Activity,
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  TrendingUp,
  Clock,
  Users,
  Zap,
  Target,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const agents = [
  {
    id: 1,
    name: "Customer Support Agent",
    type: "Support",
    status: "active",
    conversations: 1247,
    avgResponseTime: "2.3s",
    satisfaction: 4.8,
    uptime: "99.9%",
    lastActive: "2 minutes ago",
    description: "Handles customer inquiries and support tickets",
    capabilities: ["Natural Language Processing", "Sentiment Analysis", "Ticket Routing"],
  },
  {
    id: 2,
    name: "Sales Assistant",
    type: "Sales",
    status: "active",
    conversations: 89,
    avgResponseTime: "1.8s",
    satisfaction: 4.6,
    uptime: "98.7%",
    lastActive: "5 minutes ago",
    description: "Qualifies leads and assists with sales processes",
    capabilities: ["Lead Qualification", "Product Recommendations", "CRM Integration"],
  },
  {
    id: 3,
    name: "Data Processor",
    type: "Analytics",
    status: "processing",
    conversations: 0,
    avgResponseTime: "N/A",
    satisfaction: 0,
    uptime: "100%",
    lastActive: "Processing",
    description: "Processes and analyzes large datasets",
    capabilities: ["Data Mining", "Pattern Recognition", "Report Generation"],
  },
  {
    id: 4,
    name: "Content Moderator",
    type: "Moderation",
    status: "paused",
    conversations: 456,
    avgResponseTime: "0.5s",
    satisfaction: 4.9,
    uptime: "97.2%",
    lastActive: "1 hour ago",
    description: "Moderates user-generated content",
    capabilities: ["Content Analysis", "Toxicity Detection", "Auto-moderation"],
  },
]

const agentTypes = ["All", "Support", "Sales", "Analytics", "Moderation"]

const performanceData = [
  { time: "00:00", support: 95, sales: 88, analytics: 100, moderation: 92 },
  { time: "04:00", support: 97, sales: 85, analytics: 98, moderation: 94 },
  { time: "08:00", support: 99, sales: 92, analytics: 100, moderation: 96 },
  { time: "12:00", support: 96, sales: 94, analytics: 99, moderation: 93 },
  { time: "16:00", support: 98, sales: 89, analytics: 100, moderation: 95 },
  { time: "20:00", support: 94, sales: 87, analytics: 98, moderation: 91 },
]

const interactionHeatmap = [
  { hour: "00", mon: 12, tue: 15, wed: 18, thu: 14, fri: 22, sat: 8, sun: 6 },
  { hour: "04", mon: 8, tue: 10, wed: 12, thu: 9, fri: 15, sat: 5, sun: 4 },
  { hour: "08", mon: 45, tue: 52, wed: 48, thu: 50, fri: 55, sat: 25, sun: 20 },
  { hour: "12", mon: 65, tue: 70, wed: 68, thu: 72, fri: 75, sat: 40, sun: 35 },
  { hour: "16", mon: 55, tue: 60, wed: 58, thu: 62, fri: 65, sat: 35, sun: 30 },
  { hour: "20", mon: 35, tue: 40, wed: 38, thu: 42, fri: 45, sat: 50, sun: 45 },
]

export default function AgentsPage() {
  const [selectedType, setSelectedType] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredAgents = agents.filter((agent) => {
    const matchesType = selectedType === "All" || agent.type === selectedType
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "paused":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />
      case "processing":
        return <Activity className="h-4 w-4" />
      case "paused":
        return <Pause className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const getHeatmapColor = (value: number) => {
    if (value >= 60) return "#00D1C7"
    if (value >= 40) return "#D6FF51"
    if (value >= 20) return "#6366F1"
    if (value >= 10) return "#10B981"
    return "#F3F4F6"
  }

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Agents</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage and monitor your AI agents across different workflows
                </p>
              </div>
              <Button className="bg-[#00D1C7] hover:bg-[#00bab1] text-white">
                <Plus className="h-4 w-4 mr-2" />
                Deploy New Agent
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="bg-[#00D1C7] p-3 rounded-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Agents</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="bg-green-500 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Active Agents</p>
                  <p className="text-2xl font-bold text-gray-900">18</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="bg-[#D6FF51] p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-black" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Interactions</p>
                  <p className="text-2xl font-bold text-gray-900">12.4K</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="bg-[#6366F1] p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Avg Performance</p>
                  <p className="text-2xl font-bold text-gray-900">94.2%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Trends and Interaction Heatmap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Performance Trends */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">24-Hour Performance Trends</h3>
              <div className="h-64">
                <svg width="100%" height="100%" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="supportGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00D1C7" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#00D1C7" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="salesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#D6FF51" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#D6FF51" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Grid */}
                  <defs>
                    <pattern id="performanceGrid" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#performanceGrid)" />
                  
                  {/* Y-axis labels */}
                  <text x="15" y="25" fontSize="10" fill="#6b7280">100%</text>
                  <text x="15" y="65" fontSize="10" fill="#6b7280">90%</text>
                  <text x="15" y="105" fontSize="10" fill="#6b7280">80%</text>
                  <text x="15" y="145" fontSize="10" fill="#6b7280">70%</text>
                  <text x="15" y="185" fontSize="10" fill="#6b7280">60%</text>
                  
                  {/* X-axis labels */}
                  {performanceData.map((data, index) => (
                    <text key={index} x={50 + index * 55} y="195" fontSize="10" fill="#6b7280">{data.time}</text>
                  ))}
                  
                  {/* Support line */}
                  <path 
                    d={`M${performanceData.map((data, index) => `${50 + index * 55},${200 - (data.support * 1.8)}`).join(' L')}`}
                    fill="none" 
                    stroke="#00D1C7" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Sales line */}
                  <path 
                    d={`M${performanceData.map((data, index) => `${50 + index * 55},${200 - (data.sales * 1.8)}`).join(' L')}`}
                    fill="none" 
                    stroke="#D6FF51" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Analytics line */}
                  <path 
                    d={`M${performanceData.map((data, index) => `${50 + index * 55},${200 - (data.analytics * 1.8)}`).join(' L')}`}
                    fill="none" 
                    stroke="#6366F1" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Data points */}
                  {performanceData.map((data, index) => (
                    <g key={index}>
                      <circle cx={50 + index * 55} cy={200 - (data.support * 1.8)} r="4" fill="#00D1C7"/>
                      <circle cx={50 + index * 55} cy={200 - (data.sales * 1.8)} r="4" fill="#D6FF51"/>
                      <circle cx={50 + index * 55} cy={200 - (data.analytics * 1.8)} r="4" fill="#6366F1"/>
                    </g>
                  ))}
                  
                  {/* Legend */}
                  <g transform="translate(40, 15)">
                    <circle cx="8" cy="5" r="4" fill="#00D1C7"/>
                    <text x="18" y="9" fontSize="11" fill="#374151">Support</text>
                    
                    <circle cx="70" cy="5" r="4" fill="#D6FF51"/>
                    <text x="80" y="9" fontSize="11" fill="#374151">Sales</text>
                    
                    <circle cx="120" cy="5" r="4" fill="#6366F1"/>
                    <text x="130" y="9" fontSize="11" fill="#374151">Analytics</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Interaction Heatmap */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Weekly Interaction Heatmap</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-8 gap-1 text-xs text-gray-500 mb-2">
                  <div></div>
                  <div className="text-center">Mon</div>
                  <div className="text-center">Tue</div>
                  <div className="text-center">Wed</div>
                  <div className="text-center">Thu</div>
                  <div className="text-center">Fri</div>
                  <div className="text-center">Sat</div>
                  <div className="text-center">Sun</div>
                </div>
                {interactionHeatmap.map((row, index) => (
                  <div key={index} className="grid grid-cols-8 gap-1">
                    <div className="text-xs text-gray-500 flex items-center">{row.hour}:00</div>
                    <div 
                      className="h-8 rounded flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: getHeatmapColor(row.mon), color: row.mon >= 40 ? 'white' : '#374151' }}
                    >
                      {row.mon}
                    </div>
                    <div 
                      className="h-8 rounded flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: getHeatmapColor(row.tue), color: row.tue >= 40 ? 'white' : '#374151' }}
                    >
                      {row.tue}
                    </div>
                    <div 
                      className="h-8 rounded flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: getHeatmapColor(row.wed), color: row.wed >= 40 ? 'white' : '#374151' }}
                    >
                      {row.wed}
                    </div>
                    <div 
                      className="h-8 rounded flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: getHeatmapColor(row.thu), color: row.thu >= 40 ? 'white' : '#374151' }}
                    >
                      {row.thu}
                    </div>
                    <div 
                      className="h-8 rounded flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: getHeatmapColor(row.fri), color: row.fri >= 40 ? 'white' : '#374151' }}
                    >
                      {row.fri}
                    </div>
                    <div 
                      className="h-8 rounded flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: getHeatmapColor(row.sat), color: row.sat >= 40 ? 'white' : '#374151' }}
                    >
                      {row.sat}
                    </div>
                    <div 
                      className="h-8 rounded flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: getHeatmapColor(row.sun), color: row.sun >= 40 ? 'white' : '#374151' }}
                    >
                      {row.sun}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>Less</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#F3F4F6' }}></div>
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#10B981' }}></div>
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#6366F1' }}></div>
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#D6FF51' }}></div>
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#00D1C7' }}></div>
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    placeholder="Search agents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                {agentTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      selectedType === type ? "bg-[#00D1C7] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {filteredAgents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-[#00D1C7] p-3 rounded-lg">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                      <p className="text-sm text-gray-500">{agent.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}
                    >
                      {getStatusIcon(agent.status)}
                      <span className="ml-1 capitalize">{agent.status}</span>
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Conversations</p>
                    <p className="text-lg font-semibold">{agent.conversations.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Avg Response</p>
                    <p className="text-lg font-semibold">{agent.avgResponseTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Satisfaction</p>
                    <p className="text-lg font-semibold">
                      {agent.satisfaction > 0 ? `${agent.satisfaction}/5` : "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Uptime</p>
                    <p className="text-lg font-semibold">{agent.uptime}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Capabilities</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.capabilities.map((capability, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00D1C7]/10 text-[#00D1C7]"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mini Performance Chart */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Performance Trend</p>
                  <svg width="100%" height="40" viewBox="0 0 200 40">
                    <path 
                      d={agent.status === "active" 
                        ? "M10,30 L30,25 L50,20 L70,15 L90,18 L110,12 L130,8 L150,10 L170,5 L190,7"
                        : agent.status === "processing"
                        ? "M10,20 L30,22 L50,18 L70,20 L90,16 L110,18 L130,14 L150,16 L170,12 L190,10"
                        : "M10,35 L30,35 L50,35 L70,35 L90,35 L110,35 L130,35 L150,35 L170,35 L190,35"
                      }
                      fill="none" 
                      stroke={agent.status === "active" ? "#00D1C7" : agent.status === "processing" ? "#6366F1" : "#9CA3AF"}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle 
                      cx="190" 
                      cy={agent.status === "active" ? "7" : agent.status === "processing" ? "10" : "35"} 
                      r="3" 
                      fill={agent.status === "active" ? "#00D1C7" : agent.status === "processing" ? "#6366F1" : "#9CA3AF"}
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Last active: {agent.lastActive}</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      {agent.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Agent Comparison Chart */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Agent Performance Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Response Time Comparison */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-4">Average Response Time</h4>
                <div className="space-y-3">
                  {agents.filter(agent => agent.avgResponseTime !== "N/A").map((agent, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-900">{agent.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-[#00D1C7]"
                            style={{ width: `${100 - (parseFloat(agent.avgResponseTime) * 20)}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500 w-8">{agent.avgResponseTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Satisfaction Comparison */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-4">Customer Satisfaction</h4>
                <div className="space-y-3">
                  {agents.filter(agent => agent.satisfaction > 0).map((agent, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-900">{agent.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-[#D6FF51]"
                            style={{ width: `${(agent.satisfaction / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500 w-8">{agent.satisfaction}/5</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Performance Overview */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Agent Performance Overview</h3>
            <div className="h-64 rounded-lg overflow-hidden">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Grid lines */}
                <defs>
                  <pattern id="agentGrid" width="40" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#agentGrid)" />
                
                {/* Performance bars */}
                <g>
                  {/* Customer Support Agent */}
                  <rect x="40" y="40" width="20" height="140" fill="#00D1C7" rx="2"/>
                  <text x="50" y="195" fontSize="10" textAnchor="middle" fill="#6b7280">Support</text>
                  <text x="50" y="35" fontSize="10" textAnchor="middle" fill="#6b7280">98%</text>
                  
                  {/* Sales Assistant */}
                  <rect x="100" y="60" width="20" height="120" fill="#D6FF51" rx="2"/>
                  <text x="110" y="195" fontSize="10" textAnchor="middle" fill="#6b7280">Sales</text>
                  <text x="110" y="55" fontSize="10" textAnchor="middle" fill="#6b7280">92%</text>
                  
                  {/* Data Processor */}
                  <rect x="160" y="20" width="20" height="160" fill="#6366F1" rx="2"/>
                  <text x="170" y="195" fontSize="10" textAnchor="middle" fill="#6b7280">Analytics</text>
                  <text x="170" y="15" fontSize="10" textAnchor="middle" fill="#6b7280">100%</text>
                  
                  {/* Content Moderator */}
                  <rect x="220" y="50" width="20" height="130" fill="#10B981" rx="2"/>
                  <text x="230" y="195" fontSize="10" textAnchor="middle" fill="#6b7280">Moderation</text>
                  <text x="230" y="45" fontSize="10" textAnchor="middle" fill="#6b7280">95%</text>
                  
                  {/* AI Assistant */}
                  <rect x="280" y="70" width="20" height="110" fill="#F59E0B" rx="2"/>
                  <text x="290" y="195" fontSize="10" textAnchor="middle" fill="#6b7280">Assistant</text>
                  <text x="290" y="65" fontSize="10" textAnchor="middle" fill="#6b7280">88%</text>
                  
                  {/* Workflow Bot */}
                  <rect x="340" y="45" width="20" height="135" fill="#EF4444" rx="2"/>
                  <text x="350" y="195" fontSize="10" textAnchor="middle" fill="#6b7280">Workflow</text>
                  <text x="350" y="40" fontSize="10" textAnchor="middle" fill="#6b7280">96%</text>
                </g>
                
                {/* Y-axis labels */}
                <text x="5" y="25" fontSize="12" fill="#6b7280">100%</text>
                <text x="5" y="65" fontSize="12" fill="#6b7280">75%</text>
                <text x="5" y="105" fontSize="12" fill="#6b7280">50%</text>
                <text x="5" y="145" fontSize="12" fill="#6b7280">25%</text>
                <text x="5" y="185" fontSize="12" fill="#6b7280">0%</text>
                
                {/* Legend */}
                <rect x="300" y="10" width="12" height="12" fill="#00D1C7" rx="2"/>
                <text x="320" y="20" fontSize="10" fill="#6b7280">High Performance</text>
                <rect x="300" y="25" width="12" height="12" fill="#D6FF51" rx="2"/>
                <text x="320" y="35" fontSize="10" fill="#6b7280">Good Performance</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
