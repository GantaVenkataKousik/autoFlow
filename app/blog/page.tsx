import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Search, Tag, BrainCircuit, Code } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen font-poppins overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Flowtask Blog</h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Insights, tutorials, and news about workflow automation, productivity, and the future of work.
          </p>

          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full p-4 pr-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00D1C7]"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00D1C7]">
              <Search size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-8">
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
                <Link href="#" className="text-[#00D1C7] hover:text-[#00bab1] font-medium flex items-center gap-1">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D6FF51] rounded-full flex items-center justify-center text-black mx-auto">
                    <Code size={20} />
                  </div>
                  <p className="mt-2 text-sm text-gray-700">Tutorial</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#D6FF51]/10 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    Tutorial
                  </span>
                  <span className="text-gray-500 text-xs flex items-center">
                    <Clock size={12} className="mr-1" /> 8 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">Building Your First Automation Workflow with Flowtask</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  A step-by-step guide to creating your first automation workflow using Flowtask's intuitive interface.
                  Learn how to automate repetitive tasks in minutes.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-700 font-bold text-xs">MC</span>
                    </div>
                    <span className="text-gray-700 text-sm">Michael Chen</span>
                  </div>
                  <span className="text-gray-500 text-xs">May 15, 2024</span>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48">
                <Image src="/gvk-p-dp.jpg" alt="Author" width={30} height={30} className="rounded-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#6366F1]/10 text-[#6366F1] px-3 py-1 rounded-full text-xs font-medium">
                    Integration
                  </span>
                  <span className="text-gray-500 text-xs flex items-center">
                    <Clock size={12} className="mr-1" /> 6 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">Connecting Flowtask with Your Favorite Tools</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Learn how to integrate Flowtask with popular tools like Salesforce, Slack, and Google Workspace to
                  create powerful cross-platform automations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/gvk-p-dp.jpg"
                      alt="Author"
                      width={30}
                      height={30}
                      className="rounded-full object-cover"
                    />
                    <span className="text-gray-700 text-sm">Ganta Venkata Kousik</span>
                  </div>
                  <span className="text-gray-500 text-xs">May 10, 2024</span>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative h-48">
                <Image src="/ai-automation.png" alt="Article" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#00D1C7]/10 text-[#00D1C7] px-3 py-1 rounded-full text-xs font-medium">AI</span>
                  <span className="text-gray-500 text-xs flex items-center">
                    <Clock size={12} className="mr-1" /> 10 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">How AI is Transforming Workflow Automation</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Explore how artificial intelligence is making workflow automation smarter, more efficient, and more
                  accessible for businesses of all sizes.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src="/person-dark-hair.png" alt="Author" width={30} height={30} className="rounded-full" />
                    <span className="text-gray-700 text-sm">Sarah Johnson</span>
                  </div>
                  <span className="text-gray-500 text-xs">May 5, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Article 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">Case Study</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    Case Study
                  </span>
                  <span className="text-gray-500 text-xs flex items-center">
                    <Clock size={12} className="mr-1" /> 12 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">How Company X Saved 20 Hours Per Week with Automation</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Learn how a mid-sized marketing agency automated their client onboarding process and saved 20+ hours
                  per week using Flowtask.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src="/bearded-person.png" alt="Author" width={30} height={30} className="rounded-full" />
                    <span className="text-gray-700 text-sm">Michael Chen</span>
                  </div>
                  <span className="text-gray-500 text-xs">April 28, 2024</span>
                </div>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D6FF51] rounded-full flex items-center justify-center text-black mx-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">Best Practices</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#D6FF51]/10 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    Best Practices
                  </span>
                  <span className="text-gray-500 text-xs flex items-center">
                    <Clock size={12} className="mr-1" /> 7 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">5 Ways to Optimize Your Automation Workflows</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Discover five proven strategies to make your automation workflows more efficient, reliable, and
                  scalable as your business grows.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/gvk-p-dp.jpg"
                      alt="Author"
                      width={30}
                      height={30}
                      className="rounded-full object-cover"
                    />
                    <span className="text-gray-700 text-sm">Ganta Venkata Kousik</span>
                  </div>
                  <span className="text-gray-500 text-xs">April 22, 2024</span>
                </div>
              </div>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-[#6366F1]/30 via-white to-gray-50 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#6366F1] rounded-full flex items-center justify-center text-white mx-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">Security</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#6366F1]/10 text-[#6366F1] px-3 py-1 rounded-full text-xs font-medium">
                    Security
                  </span>
                  <span className="text-gray-500 text-xs flex items-center">
                    <Clock size={12} className="mr-1" /> 9 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">Securing Your Automation Workflows</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Learn best practices for securing your automation workflows and protecting sensitive data as it moves
                  between different systems and applications.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image src="/person-dark-hair.png" alt="Author" width={30} height={30} className="rounded-full" />
                    <span className="text-gray-700 text-sm">Sarah Johnson</span>
                  </div>
                  <span className="text-gray-500 text-xs">April 15, 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-full flex items-center gap-2">
              Load More Articles <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl my-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="#"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-[#00D1C7]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Tag className="text-[#00D1C7]" />
              </div>
              <h3 className="font-bold">Tutorials</h3>
              <p className="text-gray-500 text-sm">24 articles</p>
            </Link>

            <Link
              href="#"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-[#D6FF51]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Tag className="text-gray-800" />
              </div>
              <h3 className="font-bold">Case Studies</h3>
              <p className="text-gray-500 text-sm">18 articles</p>
            </Link>

            <Link
              href="#"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-[#6366F1]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Tag className="text-[#6366F1]" />
              </div>
              <h3 className="font-bold">AI & Automation</h3>
              <p className="text-gray-500 text-sm">32 articles</p>
            </Link>

            <Link
              href="#"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Tag className="text-gray-800" />
              </div>
              <h3 className="font-bold">Integrations</h3>
              <p className="text-gray-500 text-sm">15 articles</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <div className="bg-gradient-to-r from-[#00D1C7] to-[#6366F1] rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter to get the latest articles, tutorials, and updates on workflow automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#00D1C7] px-6 py-3 rounded-full font-medium hover:bg-gray-100">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-80">We respect your privacy. Unsubscribe at any time. No spam, ever.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
