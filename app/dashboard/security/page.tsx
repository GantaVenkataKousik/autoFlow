"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Shield, Key, AlertTriangle, CheckCircle, Download, RefreshCw, Settings, Users, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

const securityMetrics = [
  {
    title: "Security Score",
    value: "94/100",
    change: "+2",
    changeType: "increase",
    icon: Shield,
    color: "bg-green-500",
  },
  {
    title: "Active Sessions",
    value: "18",
    change: "+3",
    changeType: "increase",
    icon: Users,
    color: "bg-[#00D1C7]",
  },
  {
    title: "Failed Login Attempts",
    value: "7",
    change: "-12",
    changeType: "decrease",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
  {
    title: "API Key Rotations",
    value: "3",
    change: "+1",
    changeType: "increase",
    icon: Key,
    color: "bg-[#6366F1]",
  },
]

const securityEvents = [
  {
    id: 1,
    type: "login_success",
    message: "Successful login from new device",
    user: "sarah.johnson@company.com",
    location: "San Francisco, CA",
    time: "2 minutes ago",
    severity: "info",
  },
  {
    id: 2,
    type: "api_key_created",
    message: "New API key generated",
    user: "michael.chen@company.com",
    location: "New York, NY",
    time: "15 minutes ago",
    severity: "info",
  },
  {
    id: 3,
    type: "failed_login",
    message: "Multiple failed login attempts",
    user: "unknown@suspicious.com",
    location: "Unknown",
    time: "1 hour ago",
    severity: "warning",
  },
  {
    id: 4,
    type: "permission_change",
    message: "User permissions modified",
    user: "admin@company.com",
    location: "Seattle, WA",
    time: "2 hours ago",
    severity: "high",
  },
]

const activeSessions = [
  {
    id: 1,
    device: "MacBook Pro",
    browser: "Chrome 120.0",
    location: "San Francisco, CA",
    ip: "192.168.1.100",
    lastActive: "2 minutes ago",
    current: true,
  },
  {
    id: 2,
    device: "iPhone 15",
    browser: "Safari Mobile",
    location: "San Francisco, CA",
    ip: "192.168.1.101",
    lastActive: "1 hour ago",
    current: false,
  },
  {
    id: 3,
    device: "Windows PC",
    browser: "Edge 119.0",
    location: "New York, NY",
    ip: "10.0.0.50",
    lastActive: "3 hours ago",
    current: false,
  },
]

const apiKeys = [
  {
    id: 1,
    name: "Production API Key",
    key: "ak_prod_1234...5678",
    created: "2024-01-15",
    lastUsed: "2 minutes ago",
    permissions: ["read", "write"],
    status: "active",
  },
  {
    id: 2,
    name: "Development API Key",
    key: "ak_dev_abcd...efgh",
    created: "2024-01-10",
    lastUsed: "1 day ago",
    permissions: ["read"],
    status: "active",
  },
  {
    id: 3,
    name: "Testing API Key",
    key: "ak_test_wxyz...1234",
    created: "2024-01-05",
    lastUsed: "1 week ago",
    permissions: ["read"],
    status: "inactive",
  },
]

export default function SecurityPage() {
  const [showApiKey, setShowApiKey] = useState<number | null>(null)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "info":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case "login_success":
        return <CheckCircle className="h-4 w-4" />
      case "failed_login":
        return <AlertTriangle className="h-4 w-4" />
      case "api_key_created":
        return <Key className="h-4 w-4" />
      case "permission_change":
        return <Settings className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
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
                <h1 className="text-2xl font-bold text-gray-900">Security Center</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Monitor and manage security settings, access controls, and audit logs
                </p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Logs
                </Button>
                <Button variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </div>

          {/* Security Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {securityMetrics.map((metric) => (
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
                      <span>{metric.change} this week</span>
                    </div>
                  </div>
                  <div className={`${metric.color} p-3 rounded-lg`}>
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Security Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-xs text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <button
                    onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      twoFactorEnabled ? "bg-[#00D1C7]" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        twoFactorEnabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Session Timeout</h4>
                    <p className="text-xs text-gray-500">Automatically log out after inactivity</p>
                  </div>
                  <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                    <option>Never</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Login Notifications</h4>
                    <p className="text-xs text-gray-500">Get notified of new login attempts</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#00D1C7]">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Recent Security Events</h3>
              <div className="space-y-4">
                {securityEvents.slice(0, 4).map((event) => (
                  <div
                    key={event.id}
                    className={`flex items-start p-3 rounded-lg border ${getSeverityColor(event.severity)}`}
                  >
                    <div className="mr-3 mt-0.5">{getEventIcon(event.type)}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.message}</p>
                      <p className="text-xs opacity-75">
                        {event.user} • {event.location}
                      </p>
                      <p className="text-xs opacity-75">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Sessions */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Active Sessions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Device
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      IP Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Active
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activeSessions.map((session) => (
                    <tr key={session.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{session.device}</div>
                            <div className="text-sm text-gray-500">{session.browser}</div>
                          </div>
                          {session.current && (
                            <span className="ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Current
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.ip}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{session.lastActive}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {!session.current && <button className="text-red-600 hover:text-red-900">Revoke</button>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* API Keys */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">API Keys</h3>
              <Button className="bg-[#00D1C7] hover:bg-[#00bab1] text-white">
                <Key className="h-4 w-4 mr-2" />
                Generate New Key
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Key
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Permissions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Used
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {apiKeys.map((apiKey) => (
                    <tr key={apiKey.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{apiKey.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <code className="text-sm text-gray-900 bg-gray-100 px-2 py-1 rounded">
                            {showApiKey === apiKey.id ? apiKey.key : "••••••••••••••••"}
                          </code>
                          <button
                            onClick={() => setShowApiKey(showApiKey === apiKey.id ? null : apiKey.id)}
                            className="ml-2 text-[#00D1C7] hover:text-[#00bab1] text-sm"
                          >
                            {showApiKey === apiKey.id ? "Hide" : "Show"}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-1">
                          {apiKey.permissions.map((permission, index) => (
                            <span
                              key={index}
                              className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-[#00D1C7]/10 text-[#00D1C7]"
                            >
                              {permission}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{apiKey.lastUsed}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            apiKey.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {apiKey.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-[#00D1C7] hover:text-[#00bab1]">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Revoke</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
