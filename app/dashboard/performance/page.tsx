"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import {
  Activity,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  AlertTriangle,
  LineChart,
  PieChart,
  Download,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const performanceMetrics = [
  {
    name: "Overall Success Rate",
    value: "98.5%",
    change: "+2.1%",
    changeType: "increase",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    name: "Average Response Time",
    value: "1.8s",
    change: "-0.3s",
    changeType: "decrease",
    icon: Clock,
    color: "text-blue-600",
  },
  {
    name: "Error Rate",
    value: "1.5%",
    change: "-0.8%",
    changeType: "decrease",
    icon: AlertTriangle,
    color: "text-red-600",
  },
  {
    name: "Throughput",
    value: "2.4K/hr",
    change: "+15%",
    changeType: "increase",
    icon: Activity,
    color: "text-purple-600",
  },
]

const agentPerformance = [
  { name: "Customer Support", success: 99.2, responseTime: 2.3, throughput: 1247, errors: 8 },
  { name: "Sales Assistant", success: 97.8, responseTime: 1.8, throughput: 89, errors: 2 },
  { name: "Data Processor", success: 99.9, responseTime: 0.1, throughput: 45230, errors: 5 },
  { name: "Content Moderator", success: 98.1, responseTime: 0.5, throughput: 456, errors: 9 },
]

const timeRanges = ["24h", "7d", "30d", "90d"]

export default function PerformancePage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Performance Analytics</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Monitor and analyze the performance of your AI agents and automations
                </p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
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
              <h3 className="text-lg font-medium text-gray-900">Performance Overview</h3>
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

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceMetrics.map((metric) => (
              <div key={metric.name} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{metric.name}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                    <div
                      className={`flex items-center mt-2 text-sm ${
                        metric.changeType === "increase" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {metric.changeType === "increase" ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {metric.change} from last period
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50`}>
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Response Time Trends */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Response Time Trends</h3>
                <LineChart className="h-5 w-5 text-gray-400" />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="performanceGrid" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                    </pattern>
                    <linearGradient id="responseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00D1C7" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#00D1C7" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#performanceGrid)" />
                  
                  {/* Y-axis labels */}
                  <text x="15" y="25" fontSize="10" fill="#6b7280">3.0s</text>
                  <text x="15" y="75" fontSize="10" fill="#6b7280">2.0s</text>
                  <text x="15" y="125" fontSize="10" fill="#6b7280">1.0s</text>
                  <text x="15" y="175" fontSize="10" fill="#6b7280">0s</text>
                  
                  {/* X-axis labels */}
                  <text x="60" y="195" fontSize="10" fill="#6b7280">Mon</text>
                  <text x="120" y="195" fontSize="10" fill="#6b7280">Tue</text>
                  <text x="180" y="195" fontSize="10" fill="#6b7280">Wed</text>
                  <text x="240" y="195" fontSize="10" fill="#6b7280">Thu</text>
                  <text x="300" y="195" fontSize="10" fill="#6b7280">Fri</text>
                  <text x="360" y="195" fontSize="10" fill="#6b7280">Sat</text>
                  
                  {/* Response time line */}
                  <path 
                    d="M40,100 L100,80 L160,90 L220,70 L280,85 L340,75 L380,65"
                    fill="none" 
                    stroke="#00D1C7" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Area fill */}
                  <path 
                    d="M40,100 L100,80 L160,90 L220,70 L280,85 L340,75 L380,65 L380,180 L40,180 Z"
                    fill="url(#responseGradient)"
                  />
                  
                  {/* Data points */}
                  <circle cx="40" cy="100" r="4" fill="#00D1C7"/>
                  <circle cx="100" cy="80" r="4" fill="#00D1C7"/>
                  <circle cx="160" cy="90" r="4" fill="#00D1C7"/>
                  <circle cx="220" cy="70" r="4" fill="#00D1C7"/>
                  <circle cx="280" cy="85" r="4" fill="#00D1C7"/>
                  <circle cx="340" cy="75" r="4" fill="#00D1C7"/>
                  <circle cx="380" cy="65" r="4" fill="#00D1C7"/>
                </svg>
              </div>
            </div>

            {/* Success Rate Distribution */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Success Rate Distribution</h3>
                <PieChart className="h-5 w-5 text-gray-400" />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Pie chart */}
                  <g transform="translate(140, 100)">
                    {/* Customer Support - 99.2% */}
                    <path d="M 0,-60 A 60,60 0 1,1 58.3,12.3 L 0,0 Z" fill="#00D1C7"/>
                    
                    {/* Sales Assistant - 97.8% */}
                    <path d="M 58.3,12.3 A 60,60 0 0,1 -58.8,10.8 L 0,0 Z" fill="#D6FF51"/>
                    
                    {/* Data Processor - 99.9% */}
                    <path d="M -58.8,10.8 A 60,60 0 0,1 -0.6,-60 L 0,0 Z" fill="#6366F1"/>
                    
                    {/* Content Moderator - 98.1% */}
                    <path d="M -0.6,-60 A 60,60 0 0,1 0,-60 L 0,0 Z" fill="#EF4444"/>
                  </g>
                  
                  {/* Legend */}
                  <g transform="translate(260, 60)">
                    <circle cx="8" cy="8" r="6" fill="#00D1C7"/>
                    <text x="20" y="12" fontSize="11" fill="#374151">Customer Support</text>
                    <text x="20" y="24" fontSize="9" fill="#6b7280">99.2%</text>
                    
                    <circle cx="8" cy="40" r="6" fill="#D6FF51"/>
                    <text x="20" y="44" fontSize="11" fill="#374151">Sales Assistant</text>
                    <text x="20" y="56" fontSize="9" fill="#6b7280">97.8%</text>
                    
                    <circle cx="8" cy="72" r="6" fill="#6366F1"/>
                    <text x="20" y="76" fontSize="11" fill="#374151">Data Processor</text>
                    <text x="20" y="88" fontSize="9" fill="#6b7280">99.9%</text>
                    
                    <circle cx="8" cy="104" r="6" fill="#EF4444"/>
                    <text x="20" y="108" fontSize="11" fill="#374151">Content Moderator</text>
                    <text x="20" y="120" fontSize="9" fill="#6b7280">98.1%</text>
                  </g>
                  
                  {/* Center text */}
                  <g transform="translate(140, 100)">
                    <text x="0" y="-5" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#374151">98.8%</text>
                    <text x="0" y="10" fontSize="10" textAnchor="middle" fill="#6b7280">Average</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Agent Performance Table */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Agent Performance Breakdown</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Agent Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Success Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg Response Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Throughput
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Errors
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {agentPerformance.map((agent, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm text-gray-900">{agent.success}%</div>
                          <div className={`ml-2 w-16 bg-gray-200 rounded-full h-2`}>
                            <div
                              className={`h-2 rounded-full ${
                                agent.success >= 99
                                  ? "bg-green-500"
                                  : agent.success >= 95
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${agent.success}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{agent.responseTime}s</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {agent.throughput.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{agent.errors}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            agent.success >= 99
                              ? "bg-green-100 text-green-800"
                              : agent.success >= 95
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {agent.success >= 99 ? "Excellent" : agent.success >= 95 ? "Good" : "Needs Attention"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Performers */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Top Performing Agents</h3>
              <div className="space-y-4">
                {agentPerformance
                  .sort((a, b) => b.success - a.success)
                  .slice(0, 3)
                  .map((agent, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                            index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-orange-500"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{agent.name}</p>
                          <p className="text-xs text-gray-500">{agent.success}% success rate</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{agent.throughput.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">operations</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Performance Alerts */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Performance Alerts</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-yellow-800">High Response Time</p>
                    <p className="text-xs text-yellow-700">Customer Support Agent response time increased by 15%</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">Error Rate Spike</p>
                    <p className="text-xs text-red-700">Content Moderator showing increased error rate</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">Performance Improvement</p>
                    <p className="text-xs text-green-700">Data Processor efficiency improved by 12%</p>
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
