import React, { useState, useEffect } from 'react';
import { FaPills, FaHeartbeat, FaTruck, FaUpload, FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaStar, FaArrowRight, FaMapMarkerAlt, FaClock, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation components
const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const SlideIn = ({ children, direction = "left", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const x = direction === "left" ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { 
      icon: <FaPills className="text-blue-600" size={48} />, 
      title: "Medicines", 
      description: "OTC, prescription support, and genuine generic medicines",
      features: ["Prescription Drugs", "Over-the-Counter", "Generic Medicines"]
    },
    { 
      icon: <FaHeartbeat className="text-green-600" size={48} />, 
      title: "Wellness Products", 
      description: "Personal care, baby products, and health supplements",
      features: ["Personal Care", "Baby Products", "Health Supplements"]
    },
    { 
      icon: <FaTruck className="text-purple-600" size={48} />, 
      title: "Home Delivery", 
      description: "Fast and reliable medicine delivery to your doorstep",
      features: ["Fast Delivery", "Free Shipping*", "Track Orders"]
    },
    { 
      icon: <FaUpload className="text-orange-600" size={48} />, 
      title: "Upload Prescription", 
      description: "Upload your doctor's prescription for quick service",
      features: ["Digital Upload", "Quick Processing", "Expert Verification"]
    }
  ];

  const healthDevices = [
    "BP Monitors",
    "Thermometers",
    "Oximeters",
    "Diabetes Care",
    "First Aid Kits"
  ];

  const testimonials = [
    { 
      name: "Rahul Sharma", 
      quote: "Excellent service! My medicines were delivered within hours. Very reliable pharmacy.",
      rating: 5
    },
    { 
      name: "Priya Patel", 
      quote: "Genuine medicines at affordable prices. The staff is very knowledgeable and helpful.",
      rating: 5
    },
    { 
      name: "Vikram Singh", 
      quote: "Best pharmacy in Jalgaon. Home delivery service is a lifesaver for elderly parents.",
      rating: 5
    }
  ];

  const navItems = ['Home', 'About', 'Products', 'Contact'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <FaPills className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold text-gray-800">Shiv Pharma</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Order Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white border-t border-gray-200 mt-4"
              >
                <div className="py-4 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-700 hover:text-blue-600 font-medium py-2 px-4 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={handleNavClick}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    onClick={handleNavClick}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <FadeIn>
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Your Trusted
                  <span className="block text-cyan-200">Healthcare Partner</span>
                </motion.h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
                  Your one-stop destination for genuine medicines, wellness products, and reliable home delivery service in Jalgaon.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                  >
                    Shop Now <FaArrowRight />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaPhone /> +91 8208070816
                  </motion.button>
                </div>
              </FadeIn>
            </div>
            
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/30 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white rounded-xl p-3 md:p-4 text-center shadow-lg"
                      >
                        <div className="flex justify-center mb-2">
                          <div className="scale-75 md:scale-100">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{service.title}</h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Shiv Pharma</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Committed to delivering affordable and genuine healthcare products to the community of Jalgaon
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <SlideIn direction="left" className="md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white shadow-2xl"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-base md:text-lg mb-6">
                  To make medicines and wellness essentials easily accessible to everyone with trust and care. 
                  With years of dedication, we have become a reliable name for families and patients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold">6+</div>
                    <div className="text-blue-100 text-sm md:text-base">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold">10K+</div>
                    <div className="text-blue-100 text-sm md:text-base">Customers Served</div>
                  </div>
                </div>
              </motion.div>
            </SlideIn>

            <SlideIn direction="right" className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: "💊", title: "Genuine Medicines", desc: "100% authentic products" },
                  { icon: "🏠", title: "Home Delivery", desc: "Free delivery in Jalgaon" },
                  { icon: "⏰", title: "Quick Service", desc: "Fast prescription processing" },
                  { icon: "💰", title: "Best Prices", desc: "Affordable healthcare" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-gray-50 rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="text-2xl md:text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">{item.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="products" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Products & Services</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive healthcare solutions tailored to meet your needs
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="scale-75 md:scale-100">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-center text-sm md:text-base">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs md:text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 md:mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Health Devices */}
          <FadeIn>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Health Monitoring Devices</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                {healthDevices.map((device, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-50 rounded-xl p-3 md:p-4 text-center border border-blue-200"
                  >
                    <div className="text-blue-600 font-semibold text-sm md:text-base">{device}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Prescription Upload CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Upload Your Prescription</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Send us your doctor's prescription and get your medicines delivered to your home
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <FaUpload /> Upload Prescription Now
            </motion.button>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mx-1" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic text-center mb-4 md:mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="text-base md:text-lg font-semibold text-gray-800 text-center">
                - {testimonials[currentTestimonial].name}
              </p>
            </motion.div>
            
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with us for all your healthcare needs
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <SlideIn direction="left">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3 mt-1">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-300">
                      Shop No. 8, Kasturi Park,<br />
                      Kole Hills Road, Jalgaon
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3 mt-1">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-300">+91 8208070816</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3 mt-1">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">info@shiv-pharma.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3 mt-1">
                    <FaClock className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Timings</h3>
                    <p className="text-gray-300">
                      Mon–Sat: 9:00 AM – 10:00 PM<br />
                      Sunday: 9:00 AM – 1:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  {[
                    { icon: <FaFacebook />, color: 'bg-blue-500', href: '#' },
                    { icon: <FaInstagram />, color: 'bg-pink-500', href: '#' },
                    { icon: <FaWhatsapp />, color: 'bg-green-500', href: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`${social.color} text-white p-3 rounded-full hover:shadow-lg transition-all`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Send us a Message</h3>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaPills className="text-white text-sm" />
                </div>
                <span className="text-xl font-bold">Shiv Pharma</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted healthcare partner in Jalgaon, providing genuine medicines and wellness products.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Medicine Delivery</li>
                <li>Prescription Service</li>
                <li>Health Devices</li>
                <li>Wellness Products</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
              <div className="flex items-center space-x-2 mb-2">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-400 text-sm">+91 8208070816</span>
              </div>
              <p className="text-gray-400 text-xs">
                Available during store hours for immediate assistance
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Shiv Pharma. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;