import { ArrowRight, BrainCircuit, Code, Github, Linkedin, Terminal, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen font-poppins overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">About Flowtask</h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            We're on a mission to simplify workflow automation for businesses of all sizes, helping teams work smarter,
            not harder.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Flowtask was founded in 2020 by a team of engineers who were frustrated with the complexity and
              limitations of existing automation tools. We believed that powerful automation shouldn't require a
              technical background or extensive training.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a simple tool for internal use quickly evolved into a comprehensive platform that
              businesses of all sizes rely on to streamline their operations, reduce manual work, and focus on what
              matters most.
            </p>
            <p className="text-gray-700">
              Today, Flowtask powers thousands of automations for companies around the world, from startups to
              enterprises, helping them save time, reduce errors, and work more efficiently.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 p-8 rounded-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00D1C7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To democratize automation technology, making it accessible and useful for everyone, regardless of
                technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl my-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-8">
            To democratize automation technology, making it accessible and useful for everyone, regardless of technical
            expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#00D1C7]/10 rounded-lg flex items-center justify-center mb-4">
                <BrainCircuit className="text-[#00D1C7]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Simplify Complexity</h3>
              <p className="text-gray-600">Make complex automation workflows simple and accessible to everyone</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#D6FF51]/10 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="text-[#D6FF51]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Empower Teams</h3>
              <p className="text-gray-600">Give teams the tools they need to work more efficiently and effectively</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#6366F1]/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-[#6366F1]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Drive Innovation</h3>
              <p className="text-gray-600">
                Continuously push the boundaries of what's possible with automation technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're a diverse group of engineers, designers, and automation experts passionate about building the future
            of work.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="w-24 h-24 bg-[#00D1C7] rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Code size={36} />
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Ganta Venkata Kousik</h3>
            <p className="text-gray-600 text-center mb-4">Software Developer & Entrepreneur</p>
            <p className="text-gray-700 mb-6 text-center">
              A versatile professional with expertise in full-stack development, UI/UX design, DevOps, and AI-driven
              automation. Ganta leads our development team with a focus on creating intuitive and powerful automation
              solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00D1C7]">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D1C7]">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl my-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-[#00D1C7] text-white p-4 rounded-xl">
                <span className="text-2xl font-bold">01</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">User-Centric Design</h3>
                <p className="text-gray-700">
                  We believe that powerful technology should be intuitive and accessible. Every feature we build starts
                  with the user experience in mind.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-[#D6FF51] text-black p-4 rounded-xl">
                <span className="text-2xl font-bold">02</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                <p className="text-gray-700">
                  We're never satisfied with the status quo. We're constantly exploring new technologies and approaches
                  to make automation more powerful and accessible.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-[#6366F1] text-white p-4 rounded-xl">
                <span className="text-2xl font-bold">03</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparency & Trust</h3>
                <p className="text-gray-700">
                  We believe in being open and honest with our customers. We're transparent about our pricing, our
                  roadmap, and our limitations.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-gray-900 text-white p-4 rounded-xl">
                <span className="text-2xl font-bold">04</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customer Success</h3>
                <p className="text-gray-700">
                  Your success is our success. We're committed to providing the support and resources you need to get
                  the most out of Flowtask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-gray-700 mb-6">
                We're always looking for talented individuals who are passionate about automation and building great
                products. Check out our open positions and join us in our mission.
              </p>
              <button className="bg-[#00D1C7] hover:bg-[#00bab1] text-white px-6 py-3 rounded-full flex items-center gap-2">
                View Open Positions <ArrowRight size={16} />
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#6366F1]/30 via-white to-[#00D1C7]/30 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6366F1] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Growing Team</h3>
                <p className="text-gray-700">
                  Join our diverse team of engineers, designers, and automation experts building the future of work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
