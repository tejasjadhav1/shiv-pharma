import React from 'react';
import storePhoto from './images/store.jpg';
import { FaClinicMedical, FaPills, FaAmbulance, FaUserMd, FaRegCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

const Home = () => {
  const services = [
    { icon: <FaPills size={40} />, title: "Pharmacy", description: "Full-service pharmacy with prescription and OTC medications" },
    { icon: <FaClinicMedical size={40} />, title: "Clinics", description: "Regular health check-ups and specialist consultations" },
    { icon: <FaAmbulance size={40} />, title: "Emergency", description: "24/7 emergency medical services available" },
    { icon: <FaUserMd size={40} />, title: "Specialists", description: "Experienced doctors across multiple specialties" }
  ];

  const testimonials = [
    { name: "Rahul Sharma", quote: "Excellent service and knowledgeable staff. My prescription was ready in minutes!" },
    { name: "Priya Patel", quote: "The doctors here are very patient and explain everything clearly." },
    { name: "Vikram Singh", quote: "Clean facility with modern equipment. Highly recommended." }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white">
        <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Trusted Healthcare Partner</h1>
            <p className="text-xl mb-8">Comprehensive medical care with compassion and expertise</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white cursor-pointer text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
                Order Before
              </button>
              <button className="border-2 cursor-pointer border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Emergency Contact
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={storePhoto} 
              alt="Medical clinic" 
              className="rounded-xl shadow-2xl w-full max-w-lg mx-auto" 
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-16 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-800">6+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-800">All</div>
            <div className="text-gray-600">Specialist Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-800">10K+</div>
            <div className="text-gray-600">Patients Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-800">24/7</div>
            <div className="text-gray-600">Emergency Service</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 pt-0 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Services</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Comprehensive healthcare solutions tailored to your needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Medical Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of healthcare professionals is ready to help you with all your medical needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 flex items-center justify-center gap-2">
              <FaRegCalendarAlt /> Book Appointment
            </button> */}
            <button className="border-2 cursor-pointer border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 flex items-center justify-center gap-2">
              <FaPhoneAlt /> Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">What Our Patients Say</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from people who have experienced our care
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Have Questions?</h3>
              <p className="text-gray-600">Our team is here to help you with any inquiries.</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;