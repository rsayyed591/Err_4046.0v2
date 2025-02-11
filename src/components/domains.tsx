'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { pixelFont } from '@/app/fonts'
import { AnimatedGridBackground } from '@/components/animated-grid'
import { title } from 'process'
import { log } from 'console'

const sponsors = [
  {
    title : "Title Sponsors",
    name : "Sogolytics",
    logo : "/sponsors/sogolytics.png",
    benefits : "SoGoLytics is a powerful survey and analytics platform that helps businesses gather feedback, measure engagement, and gain actionable insights to improve decision-making.",
    website: "https://sogolytics.com/"
  },
  {
    title : "Co-Sponsors",
    name : "Beeceptor",
    logo: "/sponsors/beeceptor.png",
    benefits : "Beeceptor is a tool that helps you intercept API requests and create mock servers. It is a handy tool for developers to test their APIs without setting up a server.",
    website: "https://beeceptor.com/"
  },
  {
    title:"Sponsors",
    name : "CNCM LLC",
    logo : "/sponsors/cncmllc.jpg",
    benefits : "CNC Manufacturing LLC provides precision machining services, ensuring high-quality, efficient, and cost-effective production of complex parts for various industries.",
    website: "https://cncmllc.com/"
  },
  {
    title:"Sponsors",
    name : "Learn While Travelling",
    logo : "/sponsors/lwt.jpg",
    benefits : "Learn While Travelling is a platform that provides you with the best travel experiences and helps you learn while you travel.",
    website: "https://learnwhiletravelling.com/"
  },
  {
    title : "Sponsors",
    name : "Hover Roboticx",
    logo : "/sponsors/hoverRobotix.png",
    benefits : "Hover Roboticx is a robotics company that specializes in developing drones and other robotic products.",
    website: "https://hoverrobotix.com"
  },
  {
    title : "Sponsors",
    name : "MetaCraftlab",
    logo : "/sponsors/craftlab.png",
    benefits : "MetaCraftLab helps streamline AI-powered content creation, automation, and collaboration, enhancing productivity and efficiency for businesses and creators.",
    website: "https://craftlab.ai/"
  },
  {
    title : "Sponsors",
    name : "InterviewBuddy",
    logo : "/sponsors/interviewBuddy.png",
    benefits : "InterviewBuddy is an online platform that helps you prepare for technical interviews by practicing with industry experts.",
    website: "https://interviewbuddy.net/"
  },
  {
    title : "Sponsors",
    name : "TechBairn",
    logo : "/sponsors/techbairn.png",
    benefits : "TechBairn provides industry-focused training, mentorship, and placement support, helping students and professionals upskill and secure job opportunities in tech.",
    website:"https://www.techbairn.com/"
  },
  {
    title : "Sponsors",
    name : "mentorX",
    logo:"/sponsors/MENTORx.png",
    benefits : "TheMentorX provides mentorship, career guidance, and skill development opportunities to help individuals achieve professional growth and success.",
    website: "https://thementorx.com/"
  },
  {
    title : "Sponsors",
    name : "RevUp",
    logo : "/sponsors/RevUp.png",
    benefits : "RevUp provides personalized health coaching and tracking tools to help you manage your daily health and keep your healthcare team informed between visits.",
    website: "https://getrevup.com/"
  },
  {
    title : "Sponsors",
    name : "Mojoco",
    logo : "/sponsors/mojoco.png",
    benefits : "MOJOCO Tender Coconut Water provides natural hydration, essential electrolytes, and antioxidants, supporting energy, heart health, and skin wellness.",
    website : "https://www.instagram.com/mojoco.official"
  },
  {
    title : "Sponsors",
    name:"NetCredential",
    logo : "/sponsors/netcredential.png",
    benefits : "NetCredential is a platform that helps you manage your digital credentials and certificates securely, ensuring your data is safe and accessible.",
    website : "https://netcredential.com/"
  },
  {
    title : "Sponsors",
    name : "Devfolio",
    logo : "/sponsors/devfolio.png",
    benefits : "Devfolio provides a platform for developers to discover and participate in hackathons, showcase their projects, and connect with a global tech community for career growth and networking.",
    website : "https://devfolio.co/"
  },
  {
    title : "Sponsors",
    name : "APTOS",
    logo : "/sponsors/aptos.png",
    benefits : "Aptos Foundation supports the development of the Aptos blockchain, offering benefits like high scalability, security, and a developer-friendly ecosystem for decentralized applications.",
    website : "https://aptosfoundation.org/"
  },
  {
    title : "Sponsors",
    name:"ETHIndia",
    logo : "/sponsors/ethindia.png",
    benefits : "ETHIndia 2024 provides a platform for developers to collaborate, innovate, and build cutting-edge blockchain solutions while networking with industry leaders and gaining hands-on experience.",
    website : "https://ethindia.co/"
  },
  {
    title : "Sponsors",
    name : "Polygon",
    logo : "/sponsors/polygon.png",
    benefits : "Polygon is a platform for Ethereum scaling and infrastructure development, enabling faster and cheaper transactions on the Ethereum blockchain.",
    website : "https://polygon.technology/"
  }
]
const domains = [
  {
    title: "Machine Learning",
    icon: "/icons/machineLearning.png",
  },
  {
    title: "Web Development",
    icon: "/icons/webDev.png",
  },
  {
    title: "Blockchain",
    icon: "/icons/blockchain.png",
  },
  {
    title: "Cyber Security",
    icon: "/icons/cyberSec.png",
  },
  {
    title: "App Development",
    icon: "/icons/appDev.png",
  }
]

const cardVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

export function Domains() {
  return (
    <section id="domains" className="py-20">
      <div className="container px-4 mx-auto">
        <h1 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center ${pixelFont.className} text-primary`}>
          Domains
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <motion.div
              key={domain.title}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="overflow-hidden"
            >
              <Card className="relative overflow-hidden backdrop-blur-sm border-primary/20">
                <div className="absolute inset-0">
                  <AnimatedGridBackground />
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4 h-24 w-24">
                      <Image
                        src={domain.icon}
                        alt={domain.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-center text-primary">{domain.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

