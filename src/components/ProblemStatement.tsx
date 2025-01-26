'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { pixelFont } from '@/app/fonts'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Problem Statement JSON (commented out for now)
/*
const problemStatements = [
  {
    domain: "Machine Learning",
    problems: [
      {
        id: "ML01",
        title: "Predictive Maintenance System",
        description: "Develop a machine learning model to predict equipment failures in industrial settings, reducing downtime and maintenance costs.",
        requirements: [
          "Data preprocessing and feature engineering",
          "Time series analysis",
          "Anomaly detection",
          "Model interpretability",
          "Integration with IoT sensors"
        ]
      },
      {
        id: "ML02",
        title: "Natural Language Processing for Customer Support",
        description: "Create an NLP system to automatically categorize and prioritize customer support tickets, improving response times and customer satisfaction.",
        requirements: [
          "Text classification",
          "Sentiment analysis",
          "Entity recognition",
          "Multi-language support",
          "Integration with existing ticketing systems"
        ]
      }
    ]
  },
  {
    domain: "Web Development",
    problems: [
      {
        id: "WD01",
        title: "Decentralized Social Media Platform",
        description: "Build a web-based social media platform that prioritizes user privacy and data ownership using decentralized technologies.",
        requirements: [
          "Decentralized user authentication",
          "End-to-end encryption for messages",
          "Distributed content storage",
          "Progressive Web App (PWA) functionality",
          "Cross-platform compatibility"
        ]
      },
      {
        id: "WD02",
        title: "Collaborative Code Editor",
        description: "Develop a real-time collaborative code editor with features like syntax highlighting, version control, and video conferencing.",
        requirements: [
          "Real-time collaboration",
          "Multiple programming language support",
          "Version control integration",
          "Video and audio communication",
          "Code execution and testing environment"
        ]
      }
    ]
  },
  {
    domain: "Blockchain",
    problems: [
      {
        id: "BC01",
        title: "Decentralized Identity Management",
        description: "Develop a blockchain-based system for self-sovereign identity management, allowing users to control and share their personal information securely.",
        requirements: [
          "Decentralized identifiers (DIDs)",
          "Verifiable credentials",
          "Privacy-preserving data sharing",
          "Integration with existing identity systems",
          "User-friendly interface for managing identities"
        ]
      },
      {
        id: "BC02",
        title: "Supply Chain Traceability Platform",
        description: "Create a blockchain solution for end-to-end supply chain traceability, ensuring transparency and authenticity of products.",
        requirements: [
          "Smart contract implementation",
          "IoT device integration",
          "QR code or RFID tracking",
          "Real-time monitoring dashboard",
          "Consortium blockchain network"
        ]
      }
    ]
  },
  {
    domain: "Cyber Security",
    problems: [
      {
        id: "CS01",
        title: "AI-Powered Threat Detection System",
        description: "Design an artificial intelligence-based system to detect and respond to cyber threats in real-time across various network environments.",
        requirements: [
          "Machine learning for anomaly detection",
          "Behavioral analysis",
          "Automated incident response",
          "Threat intelligence integration",
          "Scalable log analysis"
        ]
      },
      {
        id: "CS02",
        title: "Secure Multi-Party Computation Platform",
        description: "Develop a platform that enables multiple parties to jointly compute on sensitive data without revealing their individual inputs.",
        requirements: [
          "Homomorphic encryption",
          "Secure multi-party computation protocols",
          "Privacy-preserving data analysis",
          "Distributed key management",
          "Auditability and compliance features"
        ]
      }
    ]
  },
  {
    domain: "App Development",
    problems: [
      {
        id: "AD01",
        title: "Cross-Platform Mental Health Companion",
        description: "Create a mobile application that provides personalized mental health support, including mood tracking, guided meditation, and professional resources.",
        requirements: [
          "Cross-platform development (iOS and Android)",
          "AI-powered chatbot for initial assessment",
          "Integration with wearable devices for biometric data",
          "Secure storage of sensitive health information",
          "Gamification elements for engagement"
        ]
      },
      {
        id: "AD02",
        title: "Augmented Reality Education Platform",
        description: "Develop an AR-based mobile app that enhances learning experiences across various subjects through interactive 3D visualizations.",
        requirements: [
          "AR framework integration (ARKit/ARCore)",
          "3D model rendering and manipulation",
          "Content management system for educators",
          "Offline mode functionality",
          "Social features for collaborative learning"
        ]
      }
    ]
  }
]
*/

const domains = [
  "Machine Learning",
  "Web Development",
  "Blockchain",
  "Cyber Security",
  "App Development"
]

export default function ProblemStatements() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  return (
    <section className="py-16 min-h-screen text-black">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white/80 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className={`text-2xl ${pixelFont.className} text-primary`}>Important Announcement</DialogTitle>
            <DialogDescription className="text-lg">
              The Problem Statements will be revealed on February 12th, 2025, along with the list of selected teams.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${pixelFont.className}`}>
            Problem Statements
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-800 text-lg md:text-xl">
              Exciting challenges await! Our problem statements will be revealed on the 12th of February.
              Stay tuned for innovative opportunities across multiple domains.
            </p>
            <p className={`text-xl md:text-2xl font-semibold mt-4 ${pixelFont.className} text-primary`}>
              Mark your calendars: February 12, 2025!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-2xl p-8 m-8 rounded-lg border border-gray-300 bg-gray-100">
            <div className="text-center">
              <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${pixelFont.className}`}>
                Coming Soon
              </h2>
              <p className="text-gray-800 mb-8">
                Our team is carefully crafting challenging problem statements that will push your
                innovation boundaries. The problems will span across various domains including:
              </p>
              <ul className="text-left text-gray-900 space-y-4 max-w-md mx-auto">
                {domains.map((domain) => (
                  <motion.li
                    key={domain}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3" />
                    {domain}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Commented out section for mapping problem statements when we have to release i.e. 13 jan*/}
        {/*
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemStatements.map((domainProblems) => (
            <div key={domainProblems.domain} className="bg-gray-100 p-6 rounded-lg">
              <h2 className={`text-2xl font-bold mb-4 ${pixelFont.className}`}>{domainProblems.domain}</h2>
              {domainProblems.problems.map((problem) => (
                <div key={problem.id} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-gray-700 mb-3">{problem.description}</p>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5">
                    {problem.requirements.map((req, index) => (
                      <li key={index} className="text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  )
}

