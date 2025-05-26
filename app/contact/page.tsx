import { Mail, MapPin, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen font-poppins overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D6FF51]/30 via-white to-[#00D1C7]/30 -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Get in Touch</h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Have questions about Flowtask? Our team is here to help. Reach out to us and we'll get back to you as soon
            as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#00D1C7]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="text-[#00D1C7]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Us</h3>
            <p className="text-gray-700 mb-2">For general inquiries:</p>
            <a href="mailto:venkatakousikcse01@gmail.com" className="text-[#00D1C7] hover:underline">
              venkatakousikcse01@gmail.com
            </a>
            <p className="text-gray-700 mt-2 mb-2">For support:</p>
            <a href="mailto:support@autoflow.com" className="text-[#00D1C7] hover:underline">
              support@autoflow.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#D6FF51]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="text-gray-800" />
            </div>
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="text-gray-700 mb-2">Monday to Friday, 9am - 5pm EST</p>
            <a href="tel:+18001234567" className="text-[#00D1C7] hover:underline">
              +1 (800) 123-4567
            </a>
            <p className="text-gray-700 mt-4 text-sm">For urgent support issues, please use our 24/7 support portal.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-[#6366F1]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-[#6366F1]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Visit Us</h3>
            <p className="text-gray-700 mb-2">Hyderabad</p>
            <p className="text-gray-700 mb-2">Telangana</p>
            <p className="text-gray-700">India</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D1C7]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D1C7]"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D1C7]"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D1C7]"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D1C7]"
                  ></textarea>
                </div>

                <button type="submit" className="bg-[#00D1C7] hover:bg-[#00bab1] text-white px-6 py-3 rounded-full">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-gradient-to-br from-[#00D1C7]/30 via-white to-[#6366F1]/30 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#00D1C7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-gray-700">Our team is here to help with any questions you have about Flowtask.</p>
                <p className="mt-4 text-gray-700">
                  <span className="font-bold">Response Time:</span> Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-3xl my-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">What are your support hours?</h3>
              <p className="text-gray-700">
                Our customer support team is available Monday through Friday from 9am to 5pm EST. For urgent issues, we
                offer 24/7 support through our support portal for customers on the Pro and Enterprise plans.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">How quickly can I expect a response?</h3>
              <p className="text-gray-700">
                For general inquiries, we aim to respond within 24 business hours. For support tickets, our response
                time depends on your plan level: Free (48 hours), Pro (24 hours), Enterprise (4 hours).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Do you offer custom solutions?</h3>
              <p className="text-gray-700">
                Yes, we offer custom automation solutions for enterprise customers with specific needs. Please contact
                our sales team at sales@flowtask.com to discuss your requirements and get a custom quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">How can I request a feature?</h3>
              <p className="text-gray-700">
                We love hearing from our users! You can submit feature requests through our support portal or by
                emailing feedback@flowtask.com. We review all requests and prioritize them based on user demand and
                alignment with our roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Find Us</h2>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#6366F1] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Office</h3>
              <p className="text-gray-700 mb-2">Hyderabad</p>
              <p className="text-gray-700 mb-2">Telangana</p>
              <p className="text-gray-700">India</p>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-[#6366F1] hover:bg-[#5254cc] text-white px-6 py-3 rounded-full"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
