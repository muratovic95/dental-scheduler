import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              AI-Powered Scheduling for Modern Dental Practices
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Book appointments effortlessly across all channels: website, messenger, email, SMS, and phone calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/booking" 
                className="btn bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-center shadow-lg transition-all hover:shadow-xl"
              >
                Book Appointment
              </Link>
              <Link 
                href="/demo" 
                className="btn bg-transparent text-white border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg text-center transition-all"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-96">
              <Image 
                src="/dental-dashboard.jpg" 
                alt="Dental Scheduling Dashboard" 
                fill
                style={{objectFit: 'cover'}}
                className="rounded-xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-blue-700 font-semibold">24 New Bookings Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="relative h-16 md:h-24">
          <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Multi-Channel Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Book Appointments Anywhere</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Give your patients the flexibility to book appointments through their preferred communication channel
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: 'Website', icon: '🌐', color: 'bg-blue-100 text-blue-600' },
              { name: 'Messenger', icon: '💬', color: 'bg-indigo-100 text-indigo-600' },
              { name: 'Email', icon: '✉️', color: 'bg-purple-100 text-purple-600' },
              { name: 'SMS', icon: '📱', color: 'bg-pink-100 text-pink-600' },
              { name: 'Phone', icon: '📞', color: 'bg-green-100 text-green-600' },
            ].map((channel, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className={`${channel.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl`}>
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{channel.name}</h3>
                <p className="text-gray-600 text-center">Seamless booking experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Dental Practices Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered scheduling system transforms how you manage appointments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600 mb-4">70%</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Reduction in No-Shows</h3>
              <p className="text-gray-600">
                Smart reminders and AI-driven follow-ups ensure patients remember their appointments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-indigo-500">
              <div className="text-4xl font-bold text-indigo-600 mb-4">35%</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Increase in Bookings</h3>
              <p className="text-gray-600">
                Multi-channel availability makes it easier for patients to schedule appointments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-purple-500">
              <div className="text-4xl font-bold text-purple-600 mb-4">25hr</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Staff Time Saved Weekly</h3>
              <p className="text-gray-600">
                Automated scheduling and management frees your staff to focus on patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Icons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your dental practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Scheduling",
                description: "Intelligent algorithms optimize your calendar and maximize appointment availability.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Smart Reminders",
                description: "Automated SMS, email, and messenger reminders reduce no-shows by up to 70%.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                )
              },
              {
                title: "Patient Portal",
                description: "Self-service portal for patients to manage appointments and medical history.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: "Analytics Dashboard",
                description: "Comprehensive insights into appointment trends, patient demographics, and revenue.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: "Integration Ecosystem",
                description: "Seamlessly connects with your existing practice management software.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )
              },
              {
                title: "Secure & Compliant",
                description: "HIPAA-compliant platform with end-to-end encryption for patient data.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl hover:bg-blue-50 transition-all">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Trusted by Dental Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers have to say
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We've reduced no-shows by 65% and saved countless hours on phone calls. Our patients love the convenience of booking online.",
                author: "Dr. Sarah Johnson",
                role: "Brightsmile Dental Clinic"
              },
              {
                quote: "The multi-channel booking system has transformed our practice. Our appointment calendar is consistently full, and staff can focus on patient care.",
                author: "Dr. Michael Chen",
                role: "Advanced Dental Associates"
              },
              {
                quote: "Implementation was seamless, and the ROI was immediate. Our practice has grown 30% since adopting this platform last year.",
                author: "Dr. Emily Rodriguez",
                role: "Family Dental Care"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Dental Practice?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join hundreds of dental practices already using our platform to streamline scheduling and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking" 
              className="btn bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-center shadow-lg transition-all hover:shadow-xl"
            >
              Book Appointment
            </Link>
            <Link 
              href="/demo" 
              className="btn bg-blue-700 text-white hover:bg-blue-800 font-semibold py-3 px-8 rounded-lg text-center shadow-lg transition-all hover:shadow-xl"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dental Scheduler</h3>
              <p className="text-gray-400">
                AI-powered appointment scheduling for modern dental practices.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link href="/integrations" className="text-gray-400 hover:text-white">Integrations</Link></li>
                <li><Link href="/security" className="text-gray-400 hover:text-white">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="/webinars" className="text-gray-400 hover:text-white">Webinars</Link></li>
                <li><Link href="/api" className="text-gray-400 hover:text-white">API Docs</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Email: contact@dentalscheduler.com<br />
                Phone: (555) 123-4567
              </p>
              <div className="flex space-x-4 mt-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a key={social} href={`#${social}`} className="text-gray-400 hover:text-white">
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dental Scheduler. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
