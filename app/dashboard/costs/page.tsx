"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  Download,
  AlertTriangle,
  CheckCircle,
  Target,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const costMetrics = [
  {
    title: "Total Monthly Cost",
    value: "$2,847",
    change: "-12.3%",
    changeType: "decrease",
    icon: DollarSign,
    color: "bg-[#00D1C7]",
  },
  {
    title: "Cost per Operation",
    value: "$0.023",
    change: "-8.7%",
    changeType: "decrease",
    icon: Target,
    color: "bg-[#D6FF51]",
  },
  {
    title: "Savings This Month",
    value: "$1,234",
    change: "+45.2%",
    changeType: "increase",
    icon: TrendingDown,
    color: "bg-green-500",
  },
  {
    title: "Budget Utilization",
    value: "67.8%",
    change: "+5.1%",
    changeType: "increase",
    icon: BarChart3,
    color: "bg-[#6366F1]",
  },
]

const costBreakdown = [
  { category: "AI Model Usage", amount: 1245, percentage: 43.7, trend: "up" },
  { category: "Data Processing", amount: 687, percentage: 24.1, trend: "down" },
  { category: "Storage", amount: 423, percentage: 14.9, trend: "stable" },
  { category: "API Calls", amount: 312, percentage: 11.0, trend: "up" },
  { category: "Infrastructure", amount: 180, percentage: 6.3, trend: "down" },
]

const optimizationSuggestions = [
  {
    title: "Optimize AI Model Usage",
    description: "Switch to more efficient models for routine tasks",
    potentialSavings: "$234/month",
    impact: "high",
    effort: "medium",
  },
  {
    title: "Implement Caching Strategy",
    description: "Cache frequently requested data to reduce API calls",
    potentialSavings: "$156/month",
    impact: "medium",
    effort: "low",
  },
  {
    title: "Schedule Non-Critical Tasks",
    description: "Run batch processes during off-peak hours",
    potentialSavings: "$89/month",
    impact: "low",
    effort: "low",
  },
]

const agentCosts = [
  { name: "Customer Support Agent", cost: 456, operations: 12450, efficiency: 92.3 },
  { name: "Sales Assistant", cost: 234, operations: 5670, efficiency: 87.1 },
  { name: "Data Processor", cost: 789, operations: 45230, efficiency: 96.8 },
  { name: "Content Moderator", cost: 123, operations: 3450, efficiency: 89.4 },
]

export default function CostsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Cost Management</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Monitor and optimize your AI automation costs and resource usage
                </p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Budget Settings
                </Button>
              </div>
            </div>
          </div>

          {/* Period Selector */}
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Cost Overview</h3>
              <div className="flex space-x-2">
                {["week", "month", "quarter", "year"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-3 py-1 text-sm rounded-md capitalize ${
                      selectedPeriod === period ? "bg-[#00D1C7] text-white" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cost Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {costMetrics.map((metric) => (
              <div key={metric.title} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                    <div
                      className={`flex items-center mt-2 text-sm ${
                        metric.changeType === "decrease" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {metric.changeType === "decrease" ? (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingUp className="h-4 w-4 mr-1" />
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

          {/* Charts and Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Cost Trends */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Cost Trends</h3>
                <BarChart3 className="h-5 w-5 text-gray-400" />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="costGrid" width="40" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#costGrid)" />
                  
                  {/* Y-axis labels */}
                  <text x="15" y="25" fontSize="10" fill="#6b7280">$4k</text>
                  <text x="15" y="75" fontSize="10" fill="#6b7280">$3k</text>
                  <text x="15" y="125" fontSize="10" fill="#6b7280">$2k</text>
                  <text x="15" y="175" fontSize="10" fill="#6b7280">$1k</text>
                  
                  {/* X-axis labels */}
                  <text x="60" y="195" fontSize="10" fill="#6b7280">Jan</text>
                  <text x="110" y="195" fontSize="10" fill="#6b7280">Feb</text>
                  <text x="160" y="195" fontSize="10" fill="#6b7280">Mar</text>
                  <text x="210" y="195" fontSize="10" fill="#6b7280">Apr</text>
                  <text x="260" y="195" fontSize="10" fill="#6b7280">May</text>
                  <text x="310" y="195" fontSize="10" fill="#6b7280">Jun</text>
                  
                  {/* Cost bars */}
                  <rect x="50" y="60" width="20" height="120" fill="#00D1C7" rx="2"/>
                  <rect x="100" y="50" width="20" height="130" fill="#00D1C7" rx="2"/>
                  <rect x="150" y="70" width="20" height="110" fill="#00D1C7" rx="2"/>
                  <rect x="200" y="80" width="20" height="100" fill="#00D1C7" rx="2"/>
                  <rect x="250" y="90" width="20" height="90" fill="#00D1C7" rx="2"/>
                  <rect x="300" y="100" width="20" height="80" fill="#00D1C7" rx="2"/>
                  
                  {/* Value labels */}
                  <text x="60" y="50" fontSize="10" textAnchor="middle" fill="#374151">$3.2k</text>
                  <text x="110" y="40" fontSize="10" textAnchor="middle" fill="#374151">$3.5k</text>
                  <text x="160" y="60" fontSize="10" textAnchor="middle" fill="#374151">$3.0k</text>
                  <text x="210" y="70" fontSize="10" textAnchor="middle" fill="#374151">$2.8k</text>
                  <text x="260" y="80" fontSize="10" textAnchor="middle" fill="#374151">$2.9k</text>
                  <text x="310" y="90" fontSize="10" textAnchor="middle" fill="#374151">$2.8k</text>
                </svg>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Cost Breakdown</h3>
                <PieChart className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {costBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-3 ${
                          index === 0
                            ? "bg-[#00D1C7]"
                            : index === 1
                              ? "bg-[#D6FF51]"
                              : index === 2
                                ? "bg-[#6366F1]"
                                : index === 3
                                  ? "bg-green-500"
                                  : "bg-gray-400"
                        }`}
                      />
                      <span className="text-sm font-medium text-gray-900">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">${item.amount}</div>
                      <div className="text-xs text-gray-500">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent Cost Analysis */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Agent Cost Analysis</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Agent Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monthly Cost
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Operations
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cost per Operation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Efficiency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {agentCosts.map((agent, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${agent.cost}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {agent.operations.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${(agent.cost / agent.operations).toFixed(4)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm text-gray-900">{agent.efficiency}%</div>
                          <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                agent.efficiency >= 95
                                  ? "bg-green-500"
                                  : agent.efficiency >= 85
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${agent.efficiency}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            agent.efficiency >= 95
                              ? "bg-green-100 text-green-800"
                              : agent.efficiency >= 85
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {agent.efficiency >= 95 ? "Optimal" : agent.efficiency >= 85 ? "Good" : "Needs Optimization"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Optimization Suggestions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Cost Optimization Suggestions</h3>
              <div className="space-y-4">
                {optimizationSuggestions.map((suggestion, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{suggestion.title}</h4>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          suggestion.impact === "high"
                            ? "bg-red-100 text-red-800"
                            : suggestion.impact === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {suggestion.impact} impact
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{suggestion.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium text-green-600">{suggestion.potentialSavings}</span>
                        <span className="text-gray-500"> potential savings</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Implement
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Budget Alerts</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-yellow-800">Budget Warning</p>
                    <p className="text-xs text-yellow-700">You've used 67.8% of your monthly budget</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">Cost Reduction</p>
                    <p className="text-xs text-green-700">12.3% cost reduction achieved this month</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-800">Efficiency Improvement</p>
                    <p className="text-xs text-blue-700">Data Processor efficiency increased by 8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Budget vs Actual */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Budget vs Actual Spending</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">$4,200</div>
                <div className="text-sm text-gray-500">Monthly Budget</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00D1C7]">$2,847</div>
                <div className="text-sm text-gray-500">Actual Spending</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$1,353</div>
                <div className="text-sm text-gray-500">Remaining Budget</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-[#00D1C7] h-4 rounded-full" style={{ width: "67.8%" }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>0%</span>
                <span>67.8% used</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
