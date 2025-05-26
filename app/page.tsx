import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BrainCircuit,
  Calendar,
  Clock,
  Code,
  Cog,
  Database,
  FileCode,
  Github,
  Lightbulb,
  LineChart,
  Linkedin,
  MessageSquare,
  ShoppingCart,
  Sparkles,
  Target,
  Terminal,
  Users,
  Workflow,
  Clock4,
  DollarSign,
  TrendingUp,
  Shield,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen font-poppins overflow-x-hidden">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-[#00D1C7] text-white p-2 rounded-full mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 7L12 13L21 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">AutoFlow</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About Us
          </Link>
          <Link href="/benefits" className="text-gray-800 hover:text-gray-600">
            Benefits
          </Link>
          <Link href="/blog" className="text-gray-800 hover:text-gray-600">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-[#00D1C7] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
          </div>
          <Link href="/auth/signin" className="text-gray-800 hover:text-gray-600 hidden md:block">
            Sign In
          </Link>
          <Link href="#" className="bg-[#D6FF51] hover:bg-[#c7f038] text-black px-4 py-2 rounded-full hidden md:block">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 rounded-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automate Your
            <br />
            Workflow Efficiently
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Our powerful automation platform ensures that streamlining your workflows is seamless. With just a few
            clicks, you can automate repetitive tasks and focus on what matters most.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="#"
              className="bg-white border border-gray-200 hover:bg-gray-50 text-black px-8 py-3 rounded-full shadow-sm"
            >
              Start A Free Trial
            </Link>

            <div className="flex items-center">
              <div className="flex -space-x-4">
                <Image
                  src="/brown-haired-person.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/blonde-hair-portrait.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/person-black-hair.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div className="ml-4">
                <div className="font-bold text-xl">1,00,000+</div>
                <div className="text-sm text-gray-600">Global Satisfied Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose AutoFlow?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our automation platform delivers tangible benefits that help your business grow and operate more
            efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D6FF51]/20 rounded-bl-full"></div>
            <div className="bg-[#00D1C7] text-white p-3 rounded-xl inline-block mb-4">
              <Clock4 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Save Time</h3>
            <p className="text-gray-700">
              Reduce manual work by up to 80% by automating repetitive tasks and workflows across your organization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D1C7]/20 rounded-bl-full"></div>
            <div className="bg-[#D6FF51] text-black p-3 rounded-xl inline-block mb-4">
              <DollarSign size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Reduce Costs</h3>
            <p className="text-gray-700">
              Cut operational costs by 30-40% by eliminating manual processes and optimizing resource allocation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6366F1]/20 rounded-bl-full"></div>
            <div className="bg-[#6366F1] text-white p-3 rounded-xl inline-block mb-4">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Boost Productivity</h3>
            <p className="text-gray-700">
              Increase team productivity by 50% by freeing employees from repetitive tasks to focus on strategic work.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200/50 rounded-bl-full"></div>
            <div className="bg-gray-800 text-white p-3 rounded-xl inline-block mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Minimize Errors</h3>
            <p className="text-gray-700">
              Reduce human error by 90% with consistent, automated processes that follow predefined rules every time.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 py-16 overflow-hidden">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#00D1C7] text-white p-2 rounded-full mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold">AutoFlow</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Hi, Jacob Johnson</h3>
                    <p className="text-gray-600 text-sm">Let's automate your workflows today!</p>
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/person-dark-hair.png" alt="User" width={40} height={40} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-900 text-white p-6 rounded-xl">
                    <h4 className="text-sm mb-4">Active Automations</h4>
                    <div className="text-4xl font-bold mb-2">65</div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full border-4 border-[#00D1C7] border-r-transparent relative">
                        <span className="absolute inset-0 flex items-center justify-center text-sm">45%</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-2xl font-bold">100</span>
                        <div className="text-xs text-gray-400">Total</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-100">
                    <div className="flex justify-between mb-4">
                      <h4 className="text-sm">Execution Stats</h4>
                      <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md">Last 24h</div>
                    </div>
                    <div className="h-32 relative">
                      <svg viewBox="0 0 200 100" className="w-full h-full">
                        <path
                          d="M0,50 C20,30 40,70 60,50 C80,30 100,70 120,50 C140,30 160,50 180,40 C200,30 220,50 240,40"
                          fill="none"
                          stroke="#6366F1"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Integration Partners</h3>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/curly-haired-person.png"
                        alt="Partner"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium">Salesforce Integration</div>
                        <div className="text-xs text-gray-500">CRM Automation</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Image src="/bearded-person.png" alt="Partner" width={50} height={50} className="rounded-full" />
                      <div>
                        <div className="font-medium">Slack Integration</div>
                        <div className="text-xs text-gray-500">Communication Automation</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Recent Workflows</h3>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <Workflow size={18} />
                        </div>
                        <div className="text-sm">Create Workflow</div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-xl p-4">
                      <Image
                        src="/mobile-app-design-concept.png"
                        alt="Data Processing Workflow"
                        width={200}
                        height={100}
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <div className="text-sm">Data Processing Workflow</div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-xl p-4">
                      <Image
                        src="/website-design-concept.png"
                        alt="API Integration Flow"
                        width={200}
                        height={100}
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <div className="text-sm">API Integration Flow</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="bg-white border border-gray-100 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-500">June 2024</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="w-6 h-6 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button className="w-6 h-6 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    <div className="py-2">10</div>
                    <div className="py-2">11</div>
                    <div className="py-2">12</div>
                    <div className="py-2">13</div>
                    <div className="py-2 bg-[#D6FF51] rounded-full">14</div>
                    <div className="py-2">15</div>
                    <div className="py-2">16</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Scheduled Automations</h3>
                    <button>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>

                  <Image
                    src="/task-management-dashboard.png"
                    alt="Automation Dashboard"
                    width={300}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />

                  <div>
                    <div className="font-medium">Data Sync Automation</div>
                    <div className="text-xs text-gray-500">Runs every 30 minutes</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-4">
                  <div className="bg-white rounded-xl p-4 mb-4">
                    <h3 className="font-bold mb-4">Resource Usage</h3>

                    <div className="h-40 flex items-end gap-2 mb-4">
                      <div className="bg-[#D6FF51] h-1/3 w-full rounded-t-lg"></div>
                      <div className="bg-[#00D1C7] h-2/3 w-full rounded-t-lg"></div>
                      <div className="bg-[#D6FF51] h-1/2 w-full rounded-t-lg"></div>
                      <div className="bg-[#6366F1] h-4/5 w-full rounded-t-lg"></div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div>
                        <div className="bg-[#D6FF51] w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-1">
                          <Database size={12} />
                        </div>
                        <div className="text-xs">Storage</div>
                      </div>
                      <div>
                        <div className="bg-[#00D1C7] w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-1">
                          <Cog size={12} />
                        </div>
                        <div className="text-xs">CPU</div>
                      </div>
                      <div>
                        <div className="bg-[#D6FF51] w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-1">
                          <Terminal size={12} />
                        </div>
                        <div className="text-xs">API</div>
                      </div>
                      <div>
                        <div className="bg-[#6366F1] w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-1">
                          <FileCode size={12} />
                        </div>
                        <div className="text-xs">Functions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">AI-Powered Automation</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            AutoFlow uses advanced artificial intelligence to help you automate workflows more efficiently and
            intelligently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D6FF51]/20 rounded-bl-full"></div>
            <div className="bg-[#00D1C7] text-white p-3 rounded-xl inline-block mb-4">
              <BrainCircuit size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Workflow Suggestions</h3>
            <p className="text-gray-700">
              Our AI analyzes your business processes and suggests the most efficient automation workflows to implement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D1C7]/20 rounded-bl-full"></div>
            <div className="bg-[#D6FF51] text-black p-3 rounded-xl inline-block mb-4">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Automated Error Handling</h3>
            <p className="text-gray-700">
              Let our AI automatically detect and resolve errors in your workflows, ensuring smooth operations at all
              times.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6366F1]/20 rounded-bl-full"></div>
            <div className="bg-[#6366F1] text-white p-3 rounded-xl inline-block mb-4">
              <LineChart size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
            <p className="text-gray-700">
              Get detailed insights and recommendations to improve your automation workflows and optimize resource
              usage.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Our Lead Developer</h2>
              <h3 className="text-xl font-bold mb-3">Ganta Venkata Kousik</h3>
              <p className="text-gray-700 mb-4">
                A versatile professional with expertise in full-stack development, UI/UX design, DevOps, and AI-driven
                automation. Ganta leads our development team with a focus on creating intuitive and powerful automation
                solutions.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#00D1C7] p-2 rounded-full text-white mt-1">
                    <Code size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold">Full-Stack Development</h4>
                    <p className="text-gray-600">Expert in modern web technologies and frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#D6FF51] p-2 rounded-full text-black mt-1">
                    <BrainCircuit size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold">AI Integration</h4>
                    <p className="text-gray-600">Specializes in implementing AI-powered automation solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6366F1] p-2 rounded-full text-white mt-1">
                    <Terminal size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold">DevOps & Architecture</h4>
                    <p className="text-gray-600">Designs scalable, reliable systems for enterprise automation</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://linktr.ee/GantaVenkataKousik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00D1C7] hover:bg-[#00bab1] text-white px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Linktree
                </a>
                <a
                  href="#"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="#"
                  className="bg-[#0077B5] hover:bg-[#006699] text-white px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 p-8 rounded-2xl">
              <div className="text-center">
                <Image
                  src="/gvk-developer-photo.jpg"
                  alt="Ganta Venkata Kousik"
                  width={250}
                  height={250}
                  className="rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Ganta Venkata Kousik</h3>
                <p className="text-gray-700 mb-4">Software Developer & Entrepreneur</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://linktr.ee/GantaVenkataKousik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#00D1C7]"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-[#00D1C7]">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-[#00D1C7]">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#00D1C7]/30 via-white to-[#6366F1]/30 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#00D1C7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <BrainCircuit size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Featured Article</h3>
                <p className="text-gray-700">
                  Discover how artificial intelligence is revolutionizing workflow automation
                </p>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#00D1C7]/10 text-[#00D1C7] px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar size={14} className="mr-1" /> May 20, 2024
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4">The Future of Workflow Automation: AI-Driven Processes</h2>
              <p className="text-gray-700 mb-6">
                Discover how artificial intelligence is revolutionizing workflow automation and how businesses can
                leverage these technologies to stay ahead of the competition.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold">SJ</span>
                  </div>
                  <span className="text-gray-700">Sarah Johnson</span>
                </div>
                <Link href="/blog" className="text-[#00D1C7] hover:text-[#00bab1] font-medium flex items-center gap-1">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl my-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/blog"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-[#00D1C7]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00D1C7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Tutorials</h3>
              <p className="text-gray-500 text-sm">24 articles</p>
            </Link>

            <Link
              href="/blog"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-[#D6FF51]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#D6FF51"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Case Studies</h3>
              <p className="text-gray-500 text-sm">18 articles</p>
            </Link>

            <Link
              href="/blog"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-[#6366F1]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6366F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">AI & Automation</h3>
              <p className="text-gray-500 text-sm">32 articles</p>
            </Link>

            <Link
              href="/blog"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#374151"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Integrations</h3>
              <p className="text-gray-500 text-sm">15 articles</p>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Assistant Visualization */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your AI Automation Assistant & Custom Agents</h2>
            <p className="text-lg text-gray-700 mb-6">
              AutoFlow's AI assistant helps you build and optimize automation workflows, while our custom agents can be
              tailored specifically for your unique business needs and automation requirements.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#00D1C7] p-2 rounded-full text-white mt-1">
                  <Lightbulb size={18} />
                </div>
                <div>
                  <h4 className="font-bold">Smart Workflow Creation</h4>
                  <p className="text-gray-600">Get intelligent workflow recommendations based on your business needs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#D6FF51] p-2 rounded-full text-black mt-1">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-bold">Custom AI Agents</h4>
                  <p className="text-gray-600">
                    Deploy specialized agents built for your specific automation tasks and workflows
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#6366F1] p-2 rounded-full text-white mt-1">
                  <Target size={18} />
                </div>
                <div>
                  <h4 className="font-bold">Performance Monitoring</h4>
                  <p className="text-gray-600">
                    Set goals and let AI help you monitor and improve workflow performance
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-[#00D1C7] hover:bg-[#00bab1] text-white px-6 py-3 rounded-full flex items-center gap-2">
              Try AI Assistant <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00D1C7] rounded-full flex items-center justify-center text-white">
                  <BrainCircuit size={20} />
                </div>
                <div>
                  <h4 className="font-bold">AutoFlow AI</h4>
                  <p className="text-xs text-gray-500">Your automation assistant</p>
                </div>
              </div>

              <div className="space-y-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">
                    Good morning, Jacob! I've analyzed your workflows and found 3 opportunities for optimization.
                  </p>
                </div>

                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">
                    Your data processing workflow is running at 85% efficiency. I suggest adding a caching layer to
                    improve performance by approximately 20%.
                  </p>
                </div>

                <div className="bg-[#00D1C7]/10 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                  <p className="text-sm">That sounds great! Can you help me implement that change?</p>
                </div>

                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">
                    Of course! I'll create a draft workflow with the caching layer implemented. Would you like me to
                    schedule a test run to compare performance?
                  </p>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask your AI assistant..."
                  className="w-full p-3 pr-10 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00D1C7]"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00D1C7]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#D6FF51] rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#00D1C7] rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            AutoFlow comes packed with all the tools you need to automate your workflows efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#00D1C7]/10 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="text-[#00D1C7]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Scheduled Automations</h3>
            <p className="text-gray-600">Schedule your workflows with intelligent calendar integration</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#D6FF51]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-[#D6FF51]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Team Collaboration</h3>
            <p className="text-gray-600">Work together with your team on shared automation projects</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#6366F1]/10 rounded-lg flex items-center justify-center mb-4">
              <LineChart className="text-[#6366F1]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">Track your automation performance with detailed analytics and reports</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#00D1C7]/10 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="text-[#00D1C7]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Workflow Comments</h3>
            <p className="text-gray-600">Discuss automation workflows with your team using threaded comments</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose the plan that works best for you and your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p className="text-gray-600 mb-6">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Up to 10 automations</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Basic workflow templates</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Standard integrations</span>
              </li>
            </ul>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-full">
              Get Started
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#00D1C7] relative">
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-[#00D1C7] text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-gray-600 mb-6">For businesses and teams</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Unlimited automations</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>AI workflow suggestions</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Team collaboration (up to 5)</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <button className="w-full bg-[#00D1C7] hover:bg-[#00bab1] text-white py-3 rounded-full">Get Started</button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">For larger organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$199</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Advanced AI features</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="text-[#00D1C7] mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Dedicated support</span>
              </li>
            </ul>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-full">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Find answers to common questions about AutoFlow.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">How does the AI workflow suggestion work?</h3>
            <p className="text-gray-700">
              Our AI analyzes your business processes, integration patterns, and workflow history to suggest the most
              efficient automation workflows. It learns from your implementation patterns over time to provide
              increasingly accurate recommendations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Can I integrate AutoFlow with my existing tools?</h3>
            <p className="text-gray-700">
              Yes, AutoFlow integrates with popular tools like Salesforce, Slack, Google Workspace, Microsoft 365, and
              more. We're constantly adding new integrations to make your automation seamless.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Is my data secure with AutoFlow?</h3>
            <p className="text-gray-700">
              Absolutely. We use industry-standard encryption and security practices to protect your data. Your privacy
              is our top priority, and we never share your information with third parties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Do I need coding knowledge to use AutoFlow?</h3>
            <p className="text-gray-700">
              No, AutoFlow is designed with a no-code/low-code approach. Our visual workflow builder makes it easy to
              create complex automations without programming knowledge, though developers can extend functionality using
              our API.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-[#00D1C7] to-[#6366F1] rounded-3xl mb-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Automate Your Workflows?</h2>
          <p className="text-xl mb-8">
            Join thousands of businesses who use AutoFlow to automate their processes efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#00D1C7] px-8 py-3 rounded-full font-medium hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-[#00D1C7] text-white p-2 rounded-full mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">AutoFlow</h2>
              </div>
              <p className="text-gray-400 mb-4">AI-powered automation platform for modern businesses.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    AI Assistant
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">© 2025 AutoFlow. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
