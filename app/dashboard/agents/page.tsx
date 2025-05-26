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
