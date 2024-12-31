'use client'

import { motion } from 'framer-motion'
import { pixelFont } from '@/app/fonts'
import { Phone, Mail, Globe, MapPin, CircleDot } from 'lucide-react'

export default function Contact() {
  return (
    <section id='contact' className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className={`text-2xl md:text-4xl font-bold mb-6 ${pixelFont.className} text-black`}>
            Contact Us
          </h1>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 mb-16 justify-center px-8">
          {/* Queries Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-center text-black mb-8">
              For Technical Queries
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-black flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-600">Rehan Sayyed</p>
                  <a href="tel:+919833165762" className="text-gray-600 hover:text-gray-900">+91 9833165762</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-black flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-600">Rehan Shah</p>
                  <a href="tel:+918104711921" className="text-gray-600 hover:text-gray-900">+91 8104711921</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-black flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-600">Rohit Deshmukh</p>
                  <a href="tel:+919892362829" className="text-gray-600 hover:text-gray-900">+91 9892362829</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-black flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-600">Azlaan Shaikh</p>
                  <a href="tel:+919619677599" className="text-gray-600 hover:text-gray-900">+91 9619677599</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-center text-black mb-8">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-black flex-shrink-0" />
                  <p className="font-semibold text-gray-600">Email</p>
                </div>
                <div className="space-y-2 pl-7">
                  <div className="flex items-center gap-2">
                    <CircleDot className="h-3 w-3 text-black flex-shrink-0" />
                    <a href="mailto:programmersclub@mhssce.ac.in" className="text-gray-600 hover:text-gray-900">
                      programmersclub@mhssce.ac.in
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDot className="h-3 w-3 text-black flex-shrink-0" />
                    <a href="mailto:hackathon_err404@mhssce.ac.in" className="text-gray-600 hover:text-gray-900">
                      hackathon_err404@mhssce.ac.in
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-black flex-shrink-0" />
                  <p className="font-semibold text-gray-600">Websites</p>
                </div>
                <div className="space-y-2 pl-7">
                  <div className="flex items-center gap-2">
                    <CircleDot className="h-3 w-3 text-black flex-shrink-0" />
                    <a 
                      href="https://programmersclub.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Programmers&apos; Club Website
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDot className="h-3 w-3 text-black flex-shrink-0" />
                    <a 
                      href="https://www.mhssce.ac.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      College Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-center text-black mb-8">
              Address
            </h2>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-600 mb-2">M.H. Saboo Siddik College of Engineering</h3>
                <p className="text-gray-600">8, Saboo Siddik Polytechnic Road, New Nagpada, Byculla, Mumbai, Maharashtra 400008, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-4xl mx-auto h-[300px] rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgopPKhSyKKAhIq4hoBkMU0uHQ5UehyMQ&q=M.H.+Saboo+Siddik+College+of+Engineering,+8,+M.h.+Saboo+Siddiq+Polytechnic+Road,+Nagpada,+Mazgaon,+Mumbai,+Maharashtra+400008"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}

