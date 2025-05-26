"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Users, Search, MoreVertical, Mail, Shield, Edit, Trash2, UserPlus, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const teamStats = [
  {
    title: "Total Team Members",
    value: "24",
    change: "+3",
    changeType: "increase",
    icon: Users,
    color: "bg-[#00D1C7]",
  },
  {
    title: "Active Users",
    value: "18",
    change: "+2",
    changeType: "increase",
    icon: Shield,
    color: "bg-green-500",
  },
  {
    title: "Pending Invitations",
    value: "3",
    change: "-1",
    changeType: "decrease",
    icon: Mail,
    color: "bg-yellow-500",
  },
  {
    title: "Admin Users",
    value: "4",
    change: "0",
    changeType: "stable",
    icon: Crown,
    color: "bg-[#6366F1]",
  },
]

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "Admin",
    department: "Engineering",
    status: "active",
    lastActive: "2 minutes ago",
    joinDate: "2023-01-15",
    avatar: "/testimonial-user-1.png",
    permissions: ["Full Access", "User Management", "Billing"],
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@company.com",
    role: "Manager",
    department: "Operations",
    status: "active",
    lastActive: "15 minutes ago",
    joinDate: "2023-02-20",
    avatar: "/testimonial-user-2.png",
    permissions: ["Agent Management", "Analytics", "Team View"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@company.com",
    role: "Developer",
    department: "Engineering",
    status: "active",
    lastActive: "1 hour ago",
    joinDate: "2023-03-10",
    avatar: "/testimonial-user-3.png",
    permissions: ["Agent Development", "Testing", "Deployment"],
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@company.com",
    role: "Analyst",
    department: "Data Science",
    status: "inactive",
    lastActive: "2 days ago",
    joinDate: "2023-04-05",
    avatar: "/person-dark-hair.png",
    permissions: ["Analytics", "Reports", "Data Export"],
  },
]

const roles = ["All", "Admin", "Manager", "Developer", "Analyst"]
const departments = ["All", "Engineering", "Operations", "Data Science", "Marketing"]

export default function TeamPage() {
  const [selectedRole, setSelectedRole] = useState("All")
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showInviteModal, setShowInviteModal] = useState(false)

  const filteredMembers = teamMembers.filter((member) => {
    const matchesRole = selectedRole === "All" || member.role === selectedRole
    const matchesDepartment = selectedDepartment === "All" || member.department === selectedDepartment
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRole && matchesDepartment && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-800"
      case "Manager":
        return "bg-blue-100 text-blue-800"
      case "Developer":
        return "bg-green-100 text-green-800"
      case "Analyst":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
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
                <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage team members, roles, and permissions for your organization
                </p>
              </div>
              <Button onClick={() => setShowInviteModal(true)} className="bg-[#00D1C7] hover:bg-[#00bab1] text-white">
                <UserPlus className="h-4 w-4 mr-2" />
                Invite Member
              </Button>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamStats.map((stat) => (
              <div key={stat.title} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <div
                      className={`flex items-center mt-2 text-sm ${
                        stat.changeType === "increase"
                          ? "text-green-600"
                          : stat.changeType === "decrease"
                            ? "text-red-600"
                            : "text-gray-600"
                      }`}
                    >
                      {stat.changeType !== "stable" && <span>{stat.change} this month</span>}
                      {stat.changeType === "stable" && <span>No change</span>}
                    </div>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters and Search */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    placeholder="Search team members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role} Role
                    </option>
                  ))}
                </select>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept} Department
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {filteredMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-lg">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Role</span>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(member.role)}`}
                    >
                      {member.role}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Department</span>
                    <span className="text-sm font-medium text-gray-900">{member.department}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Status</span>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(member.status)}`}
                    >
                      {member.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Last Active</span>
                    <span className="text-sm text-gray-900">{member.lastActive}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Permissions</p>
                  <div className="flex flex-wrap gap-1">
                    {member.permissions.slice(0, 2).map((permission, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 text-xs font-medium bg-[#00D1C7]/10 text-[#00D1C7] rounded-full"
                      >
                        {permission}
                      </span>
                    ))}
                    {member.permissions.length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                        +{member.permissions.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2 pt-4 border-t border-gray-200">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="h-4 w-4 mr-1" />
                    Message
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Team Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Sarah Johnson updated team permissions</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Michael Chen invited new team member</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Emily Rodriguez changed department</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Department Distribution</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Engineering</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-[#00D1C7] h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <span className="text-sm text-gray-600">11 members</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Operations</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-[#D6FF51] h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <span className="text-sm text-gray-600">7 members</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Data Science</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-[#6366F1] h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <span className="text-sm text-gray-600">5 members</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Marketing</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                    <span className="text-sm text-gray-600">1 member</span>
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
