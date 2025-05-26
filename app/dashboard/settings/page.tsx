"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Settings, User, Bell, Shield, CreditCard, Database, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const settingsSections = [
  { id: "profile", name: "Profile", icon: User },
  { id: "notifications", name: "Notifications", icon: Bell },
  { id: "security", name: "Security", icon: Shield },
  { id: "billing", name: "Billing", icon: CreditCard },
  { id: "integrations", name: "Integrations", icon: Database },
  { id: "appearance", name: "Appearance", icon: Palette },
  { id: "general", name: "General", icon: Settings },
]

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile")
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@company.com",
    company: "AutoFlow Inc.",
    timezone: "America/Los_Angeles",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    securityAlerts: true,
    marketingEmails: false,
    weeklyReports: true,
  })

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={profileData.firstName}
              onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={profileData.lastName}
              onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={profileData.company}
              onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
              className="mt-1"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="timezone">Timezone</Label>
            <select
              id="timezone"
              value={profileData.timezone}
              onChange={(e) => setProfileData({ ...profileData, timezone: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00D1C7] focus:border-[#00D1C7]"
            >
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
              <option value="America/Denver">Mountain Time (MT)</option>
              <option value="America/Chicago">Central Time (CT)</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="UTC">UTC</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="bg-[#00D1C7] hover:bg-[#00bab1] text-white">Save Changes</Button>
      </div>
    </div>
  )

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {Object.entries(notificationSettings).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </h4>
                <p className="text-xs text-gray-500">
                  {key === "emailNotifications" && "Receive notifications via email"}
                  {key === "pushNotifications" && "Receive push notifications in your browser"}
                  {key === "securityAlerts" && "Get notified about security events"}
                  {key === "marketingEmails" && "Receive marketing and promotional emails"}
                  {key === "weeklyReports" && "Get weekly performance reports"}
                </p>
              </div>
              <button
                onClick={() => setNotificationSettings({ ...notificationSettings, [key]: !value })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  value ? "bg-[#00D1C7]" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    value ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSecuritySection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Change Password</h4>
            <div className="space-y-3">
              <Input type="password" placeholder="Current password" />
              <Input type="password" placeholder="New password" />
              <Input type="password" placeholder="Confirm new password" />
              <Button variant="outline">Update Password</Button>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Two-Factor Authentication</h4>
            <p className="text-xs text-gray-500 mb-3">Add an extra layer of security to your account</p>
            <Button className="bg-[#00D1C7] hover:bg-[#00bab1] text-white">Enable 2FA</Button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBillingSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Billing Information</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Pro Plan</h4>
              <p className="text-sm text-gray-500">$49/month • Billed monthly</p>
            </div>
            <Button variant="outline">Change Plan</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Next billing date</p>
              <p className="text-sm font-medium text-gray-900">February 15, 2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Payment method</p>
              <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">Update Payment Method</Button>
            <Button variant="outline">Download Invoice</Button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderIntegrationsSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Connected Integrations</h3>
        <div className="space-y-4">
          {[
            { name: "Slack", status: "connected", description: "Team communication" },
            { name: "Salesforce", status: "connected", description: "CRM integration" },
            { name: "Google Workspace", status: "disconnected", description: "Email and calendar" },
            { name: "Microsoft Teams", status: "disconnected", description: "Team collaboration" },
          ].map((integration, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="text-sm font-medium text-gray-900">{integration.name}</h4>
                <p className="text-xs text-gray-500">{integration.description}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    integration.status === "connected" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {integration.status}
                </span>
                <Button variant="outline" size="sm">
                  {integration.status === "connected" ? "Disconnect" : "Connect"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderAppearanceSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Appearance Settings</h3>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Theme</h4>
            <div className="grid grid-cols-3 gap-3">
              {["Light", "Dark", "System"].map((theme) => (
                <button
                  key={theme}
                  className="p-3 border border-gray-200 rounded-lg text-center hover:border-[#00D1C7] focus:border-[#00D1C7] focus:ring-2 focus:ring-[#00D1C7]/20"
                >
                  <div
                    className={`w-full h-8 rounded mb-2 ${
                      theme === "Light"
                        ? "bg-white border"
                        : theme === "Dark"
                          ? "bg-gray-900"
                          : "bg-gradient-to-r from-white to-gray-900"
                    }`}
                  ></div>
                  <span className="text-sm">{theme}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Language</h4>
            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00D1C7] focus:border-[#00D1C7]">
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )

  const renderGeneralSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Data Export</h4>
            <p className="text-xs text-gray-500 mb-3">Download all your data in a portable format</p>
            <Button variant="outline">Request Data Export</Button>
          </div>
          <div className="p-4 border border-red-200 rounded-lg bg-red-50">
            <h4 className="text-sm font-medium text-red-900 mb-2">Danger Zone</h4>
            <p className="text-xs text-red-700 mb-3">Permanently delete your account and all associated data</p>
            <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return renderProfileSection()
      case "notifications":
        return renderNotificationsSection()
      case "security":
        return renderSecuritySection()
      case "billing":
        return renderBillingSection()
      case "integrations":
        return renderIntegrationsSection()
      case "appearance":
        return renderAppearanceSection()
      case "general":
        return renderGeneralSection()
      default:
        return renderProfileSection()
    }
  }

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="mt-1 text-sm text-gray-500">Manage your account settings and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Settings Navigation */}
            <div className="lg:col-span-1">
              <nav className="space-y-1">
                {settingsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeSection === section.id
                        ? "bg-[#00D1C7] text-white"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <section.icon className="mr-3 h-5 w-5" />
                    {section.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
