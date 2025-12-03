import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { User, DollarSign, CheckCircle } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="">
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-green-900 to-green-500 shadow-lg">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-3xl font-bold text-white flex items-center gap-2">
              <span>
                <img 
                  src="/logo-dark-removebg-preview.png" 
                  alt="" 
                  loading="lazy" 
                  className="w-15 h-15 rounded-xl text-white"
                />
              </span>
              <span className='text-xl sm:text-xl md:text-2xl font-medium'>Antugrow</span>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8">
              {['About Us', 'Features', 'Contact',].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-white font-medium hover:text-yellow-300 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-green-600 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {['About Us', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="w-full text-left text-white font-medium hover:text-yellow-300 transition-colors py-2 px-4 hover:bg-green-600 rounded-lg"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
        <section
        id="home"
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-6 py-20 mt-16"
        style={{ backgroundImage: "url('/daniel-kawed-9f_eJeULtSY-unsplash.jpg')" }}
        >
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
            🌾 We give farmers access to loans based on the performance of their farms.
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
            Join farmers using Antugrow to transform their farming practices and increase profitability.
            </p>
            <button
            onClick={() => scrollToSection('contact')}
            className="bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all"
            >
            Get Started Today
            </button>
        </div>
        </section>

        
                {/* What Antugrow Does (Media Showcase) */}
        <section id="about-antugrow" className="py-20 px-6 bg-white">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
            What Antugrow Does
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* GIF or Animation */}
            <div className="flex justify-center flex-col items-center gap-6">
              <img 
                src="/public/gnim-zabdiel-mignake-y8B7E_LlfFg-unsplash.jpg" 
                alt="Farmer using Antugrow app"
                className="rounded-2xl shadow-xl w-full max-w-md"
              />
              <p className='text-xl sm:text-xl md:text-2xl'>Farmer using 
                <span className="text-blue-600 hover:text-blue-700 hover:border-b-2 transition-transform duration-300">
                  <a href="https://antugrow.com/" target="_blank" rel="noopener noreferrer"> Antugrow-Farm Advisor</a>
                  </span>
              </p>
            </div>

            {/* Text description */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Empowering Farmers Through Smart Credit Access
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Antugrow allows farmers to build a verifiable, on-chain credit score 
                based on actual farm performance — no traditional collateral needed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using satellite data, digital harvest recording, and blockchain 
                technology, we help farmers unlock financing that improves productivity 
                and drives sustainable growth.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-green-700 mb-6">
              Watch How It Works
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-2xl shadow-xl"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="How Antugrow Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Screenshot Gallery */}
          <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-green-700 mb-6">
              Platform Preview
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <img src="/Antugrow Dashboard.png" alt="Dashboard" className="rounded-xl shadow-lg" />
              <img src="/screenshot2.png" alt="Farm Records" className="rounded-xl shadow-lg" />
              <img src="/public/Info.antugrow .png" alt="Loan Page" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

              {/* Achievements / Wins Section
      <section className="py-16 bg-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Impact & Achievements
          </h2>

          <p className="text-gray-00 max-w-2xl">
            AntuGrow proudly co-organized the 2024 AgriTech Hackathon — bringing 
            together innovators, developers, and agricultural experts to build 
            solutions that directly empower farmers across Africa.
          </p>

          <div className="mt-10">
            <img
              src="/KEV_5029.jpg"
              alt="AntuGrow co-organizing AgriTech Hackathon"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-200">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Why Choose Antugrow?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '💳', title: 'Easy Credit Access', desc: 'Build your credit score with every harvest. Get loans without traditional collateral requirements.' },
            { icon: '🛡️', title: 'Secure & Transparent', desc: 'Your farming data is stored safely on blockchain technology, giving you full control and ownership.' },
            { icon: '📊', title: 'Smart Analytics', desc: 'Track your farm performance with satellite data and get insights to improve your yields.' },
            { icon: '💰', title: 'Lower Interest Rates', desc: 'Build a strong credit history and unlock better financing terms for your farm expansion.' },
            { icon: '🤝', title: 'Community Support', desc: 'Join thousands of farmers across Africa growing together with shared knowledge and resources.' },
            { icon: '📱', title: 'Mobile Friendly', desc: 'Manage everything from your phone. No complex paperwork or bank visits required.' }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-green-700 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          How It Works
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            { num: '1', title: 'Register Your Farm', desc: 'Sign up and provide basic information about your farm and crops.' },
            { num: '2', title: 'Record Harvests', desc: 'Document your harvest activities using our simple mobile app.' },
            { num: '3', title: 'Build Your Score', desc: 'Each successful harvest improves your on-chain credit score automatically.' },
            { num: '4', title: 'Access Financing', desc: 'Apply for loans with your credit score and get funds directly to your account.' }
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full text-2xl font-bold mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gray-200 text-black text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your <span className='text-green-700'>Farming Journey?</span></h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of farmers building their future with Antugrow
        </p>
    <div className="bg-white m-2 p-8 rounded-3xl shadow-lg flex flex-col items-center gap-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold">Join Our Waitlist</h2>

      <p className="text-gray-600 leading-normal text-center">
        Be among the first to experience the Antugrow Platform.
        Get early access and exclusive updates.
      </p>

      
      <div className="w-full">
        <span className="text-xl font-semibold">I am a:</span>

        <div className="flex gap-4 mt-4">

         
          <button
            onClick={() => setSelected("farmer")}
            className={`w-full flex items-center justify-between px-5 py-3 rounded-xl border transition-all
              ${selected === "farmer" ? "border-green-500 bg-green-50" : "border-gray-300 bg-white"}
              hover:shadow-lg hover:scale-105`}
          >
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-green-700" />
              <span className="font-medium">Farmer</span>
            </div>

            {selected === "farmer" && (
              <CheckCircle className="w-6 h-6 text-green-500" />
            )}
          </button>

          
          <button
            onClick={() => setSelected("lender")}
            className={`w-full flex items-center justify-between px-5 py-3 rounded-xl border transition-all
              ${selected === "lender" ? "border-green-500 bg-green-50" : "border-gray-300 bg-white"}
              hover:shadow-lg hover:scale-105`}
          >
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-700" />
              <span className="font-medium">Lender</span>
            </div>

            {selected === "lender" && (
              <CheckCircle className="w-6 h-6 text-green-500" />
            )}
          </button>

        </div>
      </div>

      
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="email" className="font-semibold">Email Address</label>

        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-green-500"
        />

        <button className="bg-yellow-400 text-green-800 px-10 py-4 rounded-full font-bold text-lg hover:scale-101 hover:shadow-lg transition-all">
          Join Us
        </button>
      </div>
    </div>


      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-6 min-h-[80vh">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-9 mb-8">
                <img src="/logo-dark-removebg-preview.png" alt="Antugrow Logo" className='w-25 h-25' />
          <div>
            <h3 className="text-yellow-300 text-xl font-bold mb-4">About Antugrow</h3>
            <p className="opacity-80">
              We're revolutionizing agricultural financing in Kenya through blockchain technology and smart credit scoring.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-300 text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Features', 'Contact Us'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-300 text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 opacity-80">
              <li>📧<a href="mailto:contact@antugrow.com" className='hover:text-green-300'>contact@antugrow.com</a></li>
              <li>🌍 Nairobi, Kenya</li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-300 text-xl font-bold mb-4">Follow Us</h3>
            <ul className="space-x-3 flex">
            {[
                { icon: <FaXTwitter className='text-2xl hover:scale-105 shadow-lg '/>, url: 'https://x.com/antugrow', name: 'X (Twitter)' },
                { icon: <FaLinkedin className='text-2xl hover:text-blue-400 hover:scale-105 shadow-lg'/>, url: 'https://www.linkedin.com/company/antugrow/', name: 'LinkedIn' },
            ].map((feature, idx,) => (
                <li key={idx} className="flex items-center gap-3">
                <a
                    href={feature.url}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                    target="_blank"
                >
                    {feature.icon}
                </a>
                </li>
            ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center opacity-70 max-w-7xl mx-auto">
          <p>&copy; 2025 Antugrow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}