import {
  ArrowRight,
  BrainCircuit,
  Clock4,
  DollarSign,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Target,
  CheckCircle,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BenefitsPage() {
  return (
    <div className="min-h-screen font-poppins overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Benefits of AutoFlow</h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Discover how AutoFlow transforms your business operations with powerful automation that delivers measurable
            results and competitive advantages.
          </p>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D6FF51]/20 rounded-bl-full"></div>
            <div className="bg-[#00D1C7] text-white p-3 rounded-xl inline-block mb-4">
              <Clock4 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Save Time</h3>
            <p className="text-gray-700 mb-4">
              Reduce manual work by up to 80% by automating repetitive tasks and workflows across your organization.
            </p>
            <div className="text-2xl font-bold text-[#00D1C7]">80%</div>
            <div className="text-sm text-gray-500">Time Saved</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D1C7]/20 rounded-bl-full"></div>
            <div className="bg-[#D6FF51] text-black p-3 rounded-xl inline-block mb-4">
              <DollarSign size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Reduce Costs</h3>
            <p className="text-gray-700 mb-4">
              Cut operational costs by 30-40% by eliminating manual processes and optimizing resource allocation.
            </p>
            <div className="text-2xl font-bold text-[#D6FF51]">40%</div>
            <div className="text-sm text-gray-500">Cost Reduction</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6366F1]/20 rounded-bl-full"></div>
            <div className="bg-[#6366F1] text-white p-3 rounded-xl inline-block mb-4">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Boost Productivity</h3>
            <p className="text-gray-700 mb-4">
              Increase team productivity by 50% by freeing employees from repetitive tasks to focus on strategic work.
            </p>
            <div className="text-2xl font-bold text-[#6366F1]">50%</div>
            <div className="text-sm text-gray-500">Productivity Increase</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200/50 rounded-bl-full"></div>
            <div className="bg-gray-800 text-white p-3 rounded-xl inline-block mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Minimize Errors</h3>
            <p className="text-gray-700 mb-4">
              Reduce human error by 90% with consistent, automated processes that follow predefined rules every time.
            </p>
            <div className="text-2xl font-bold text-gray-800">90%</div>
            <div className="text-sm text-gray-500">Error Reduction</div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl my-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Comprehensive Business Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Operational Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00D1C7] mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Streamlined Workflows</h4>
                    <p className="text-gray-600">
                      Eliminate bottlenecks and create smooth, efficient processes that scale with your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00D1C7] mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">24/7 Operations</h4>
                    <p className="text-gray-600">
                      Keep your business running around the clock with automated processes that never sleep.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00D1C7] mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Consistent Quality</h4>
                    <p className="text-gray-600">
                      Ensure consistent output quality with standardized automated processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Strategic Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#D6FF51] mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Competitive Edge</h4>
                    <p className="text-gray-600">
                      Stay ahead of competitors with faster response times and more efficient operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#D6FF51] mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Scalable Growth</h4>
                    <p className="text-gray-600">
                      Scale your operations without proportionally increasing your workforce or costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#D6FF51] mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Data-Driven Insights</h4>
                    <p className="text-gray-600">Make better decisions with automated data collection and analysis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Calculate Your ROI</h2>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-[#00D1C7]/10 p-6 rounded-xl mb-4">
                  <Clock4 className="text-[#00D1C7] mx-auto mb-2" size={32} />
                  <h3 className="font-bold">Hours Saved</h3>
                  <div className="text-3xl font-bold text-[#00D1C7] mt-2">20+</div>
                  <p className="text-gray-600">per week per employee</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-[#D6FF51]/10 p-6 rounded-xl mb-4">
                  <DollarSign className="text-gray-800 mx-auto mb-2" size={32} />
                  <h3 className="font-bold">Cost Savings</h3>
                  <div className="text-3xl font-bold text-gray-800 mt-2">$50K+</div>
                  <p className="text-gray-600">annually for mid-size teams</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-[#6366F1]/10 p-6 rounded-xl mb-4">
                  <TrendingUp className="text-[#6366F1] mx-auto mb-2" size={32} />
                  <h3 className="font-bold">ROI</h3>
                  <div className="text-3xl font-bold text-[#6366F1] mt-2">300%+</div>
                  <p className="text-gray-600">within first year</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-6">
                Based on average customer data across various industries and company sizes.
              </p>
              <button className="bg-[#00D1C7] hover:bg-[#00bab1] text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto">
                Calculate Your Savings <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl my-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Benefits Across Industries</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#00D1C7]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-[#00D1C7]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Healthcare</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Patient data management</li>
                <li>• Appointment scheduling</li>
                <li>• Insurance processing</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#D6FF51]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Finance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Transaction processing</li>
                <li>• Risk assessment</li>
                <li>• Regulatory compliance</li>
                <li>• Customer onboarding</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#6366F1]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-[#6366F1]" />
              </div>
              <h3 className="text-xl font-bold mb-3">E-commerce</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Order processing</li>
                <li>• Inventory management</li>
                <li>• Customer support</li>
                <li>• Marketing campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Benefits for Your Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Happier, More Productive Employees</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#00D1C7] p-2 rounded-full text-white">
                    <BrainCircuit size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Focus on Creative Work</h4>
                    <p className="text-gray-700">
                      Free your team from mundane tasks so they can focus on innovation and strategic thinking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#D6FF51] p-2 rounded-full text-black">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Reduced Stress</h4>
                    <p className="text-gray-700">
                      Eliminate the pressure of repetitive deadlines and reduce workplace stress.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#6366F1] p-2 rounded-full text-white">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Career Growth</h4>
                    <p className="text-gray-700">
                      Enable employees to develop higher-value skills and advance their careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00D1C7]/30 via-white to-[#6366F1]/30 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#00D1C7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Employee Satisfaction</h3>
                <div className="text-4xl font-bold text-[#00D1C7] mb-2">85%</div>
                <p className="text-gray-700">
                  of employees report higher job satisfaction after automation implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <div className="bg-gradient-to-r from-[#00D1C7] to-[#6366F1] rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience These Benefits?</h2>
            <p className="text-xl mb-8">
              Join thousands of businesses already enjoying the advantages of automated workflows with AutoFlow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00D1C7] px-8 py-3 rounded-full font-medium hover:bg-gray-100">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
