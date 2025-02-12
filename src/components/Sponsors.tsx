"use client"

import { motion } from "framer-motion"
import { pixelFont } from "@/app/fonts"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Sponsor {
  title: string
  name: string
  logo: string
  benefits: string
  website: string
}

const sponsors: Sponsor[] = [
  {
    title: "Title Sponsors",
    name: "Sogolytics",
    logo: "/sponsors/sogolytics.png",
    benefits:
      "SoGoLytics is a powerful survey and analytics platform that helps businesses gather feedback, measure engagement, and gain actionable insights to improve decision-making.",
    website: "https://sogolytics.com/",
  },
  {
    title: "Co-Sponsors",
    name: "Beeceptor",
    logo: "/sponsors/beeceptor.png",
    benefits:
      "Beeceptor is a tool that helps you intercept API requests and create mock servers. It is a handy tool for developers to test their APIs without setting up a server.",
    website: "https://beeceptor.com/",
  },
  {
    title: "Technology Partner",
    name: "CNCM LLC",
    logo: "/sponsors/cncmllc.jpg",
    benefits:
      "CNC Manufacturing LLC provides precision machining services, ensuring high-quality, efficient, and cost-effective production of complex parts for various industries.",
    website: "https://cncmllc.com/",
  },
  {
    title : "Technology Partner",
    name : "Bitkraft Technologies",
    logo : "/sponsors/bitkraft.png",
    benefits : "Bitkraft provides innovative software solutions, helping businesses streamline operations, enhance digital presence, and optimize technology-driven growth.",
    website : "https://bitkraft.co.in/"
  },
  {
    title: "Technology Partner",
    name: "Aiolos",
    logo: "/sponsors/aiolos.png",
    benefits: "Aiolos Cloud offers scalable, high-performance cloud computing solutions optimized for AI workloads, enabling faster model training, deployment, and real-time inference.",
    website: "https://aiolos.cloud/",
  },
  {
    title: "Certificate Partner",
    name: "MetaCraftlab",
    logo: "/sponsors/craftlab.png",
    benefits:
      "MetaCraftLab helps streamline AI-powered content creation, automation, and collaboration, enhancing productivity and efficiency for businesses and creators.",
    website: "https://craftlab.ai/",
  },
  {
    "title": "Certificate Partner",
    "name": "NetCredential",
    "logo": "/sponsors/netcredential.png",
    "benefits": "NetCredential is a platform that helps you manage your digital credentials and certificates securely, ensuring your data is safe and accessible.",
    "website": "https://netcredential.com/"
  },
  {
    title: "Interview Prep Partner",
    name: "InterviewBuddy",
    logo: "/sponsors/interviewBuddy.png",
    benefits:
      "InterviewBuddy is an online platform that helps you prepare for technical interviews by practicing with industry experts.",
    website: "https://interviewbuddy.net/",
  },
  {
    title: "EdTech Partner",
    name: "TechBairn",
    logo: "/sponsors/techbairn.png",
    benefits:
      "TechBairn provides industry-focused training, mentorship, and placement support, helping students and professionals upskill and secure job opportunities in tech.",
    website: "https://www.techbairn.com/",
  },
{
    title: "Tech Gift Voucher Partner",
    name: "RevUp",
    logo: "/sponsors/RevUp.png",
    benefits:
      "RevUp provides personalized health coaching and tracking tools to help you manage your daily health and keep your healthcare team informed between visits.",
    website: "https://getrevup.com/",
  },
  {
    title: "Tech Gift Voucher Partner",
    name: "mentorX",
    logo: "/sponsors/MENTORx.png",
    benefits:
      "TheMentorX provides mentorship, career guidance, and skill development opportunities to help individuals achieve professional growth and success.",
    website: "https://thementorx.com/",
  },
{
    title: "Tech Gift Voucher Partner",
    name: "Hover Roboticx",
    logo: "/sponsors/hoverRobotix.png",
    benefits: "Hover Roboticx is a robotics company that specializes in developing drones and other robotic products.",
    website: "https://hoverrobotix.com",
  },
  {
    title: "Hackathon Partner",
    name: "Devfolio",
    logo: "/sponsors/devfolio.png",
    benefits:
      "Devfolio provides a platform for developers to discover and participate in hackathons, showcase their projects, and connect with a global tech community for career growth and networking.",
    website: "https://devfolio.co/",
  },
  {
    title: "Food & Beverage Partner",
    name: "Mojoco",
    logo: "/sponsors/mojoco.png",
    benefits:
      "MOJOCO Tender Coconut Water provides natural hydration, essential electrolytes, and antioxidants, supporting energy, heart health, and skin wellness.",
    website: "https://www.instagram.com/mojoco.official",
  },
    {
    title: "Entertainment Partner",
    name: "Smaaash",
    logo: "/sponsors/smaaash.png",
    benefits:
      "Smaaash Entertainment offers a unique blend of immersive virtual reality gaming, thrilling sports experiences, and fun-filled activities, making it an ideal destination for entertainment and team bonding.",
    website: "https://smaaash-entertainment.in/",
  },
  {
    title: "Travel & Learning Partner",
    name: "Learn While Travelling",
    logo: "/sponsors/lwt.jpg",
    benefits:
      "Learn While Travelling is a platform that provides you with the best travel experiences and helps you learn while you travel.",
    website: "https://learnwhiletravelling.com/",
  },
  {
    title: "Blockchain Partner",
    name: "Polygon",
    logo: "/sponsors/polygon.png",
    benefits:
      "Polygon is a platform for Ethereum scaling and infrastructure development, enabling faster and cheaper transactions on the Ethereum blockchain.",
    website: "https://polygon.technology/",
  },
  {
    title: "Blockchain Partner",
    name: "APTOS",
    logo: "/sponsors/aptos.png",
    benefits:
      "Aptos Foundation supports the development of the Aptos blockchain, offering benefits like high scalability, security, and a developer-friendly ecosystem for decentralized applications.",
    website: "https://aptosfoundation.org/",
  },
  {
    title: "Blockchain Partner",
    name: "ETHIndia",
    logo: "/sponsors/ethindia.png",
    benefits:
      "ETHIndia 2024 provides a platform for developers to collaborate, innovate, and build cutting-edge blockchain solutions while networking with industry leaders and gaining hands-on experience.",
    website: "https://ethindia.co/",
  },
]

// Group sponsors by title
const groupedSponsors = sponsors.reduce(
  (acc, sponsor) => {
    if (!acc[sponsor.title]) {
      acc[sponsor.title] = []
    }
    acc[sponsor.title].push(sponsor)
    return acc
  },
  {} as Record<string, Sponsor[]>,
)

export default function Sponsors() {
  return (
    <section className="py-8 min-h-screen text-foreground relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-primary mr-4" />
            <h1 className={`text-4xl md:text-6xl font-bold text-primary ${pixelFont.className}`}>Our Sponsors</h1>
            <Star className="w-8 h-8 text-primary ml-4" />
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Meet the innovative partners powering our hackathon and driving technological advancement.
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(groupedSponsors).map(([title, sponsorsList], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
              className="space-y-8"
            >
              <h2
                className={`text-2xl md:text-3xl text-center ${pixelFont.className} text-primary relative flex items-center justify-center`}
              >
                <Award className="w-6 h-6 mr-2" />
                <span className="relative">
                  {title}
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: sectionIndex * 0.2 + 0.5 }}
                  />
                </span>
                <Award className="w-6 h-6 ml-2" />
              </h2>

              <div className="flex flex-wrap justify-center gap-6">
                {sponsorsList.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative w-full max-w-sm"
                  >
                    <div className="bg-card text-card-foreground rounded-xl p-6 h-[225px] overflow-hidden border border-border shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/30 group">
                      {/* Logo (visible by default) */}
                      <div className="absolute inset-0 flex items-center justify-center p-6 transition-all duration-300 group-hover:opacity-0">
                        <div className="relative w-full h-full">
                          <Image
                            src={sponsor.logo || "/placeholder.svg"}
                            alt={sponsor.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Details (visible on hover) */}
                      <div className="absolute inset-0 p-6 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-card/95 flex flex-col">
                        <h3 className={`text-xl font-bold mb-2 text-primary ${pixelFont.className}`}>{sponsor.name}</h3>
                        <p className="text-sm text-muted-foreground flex-grow">{sponsor.benefits}</p>
                        <Button
                          asChild
                          className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                          <Link
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center"
                          >
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

