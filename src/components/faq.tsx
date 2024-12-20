'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { pixelFont } from '@/app/fonts'

const faqs = [
  // Column 1
  [
    {
      question: "Who can participate?",
      answer: "Anyone with a knack of programming and solving problems can participate."
    },
    {
      question: "How much does it cost?",
      answer: "Thanks to our college, attendance is completely free. We will also provide you with WiFi, breakfast, lunch, snacks, dinner, and a workspace."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and other gadgets suitable for your project and a will to code. Please bring a valid ID for admission."
    },
    {
      question: "Where is it?",
      answer: "M.H. Saboo Siddik College of Engineering, Byculla is happy to provide space on their campus to organize the Hackathon. You can find the directions in the Venue section."
    },
    {
      question: "Will Jain Food be provided?",
      answer: "Yes, food arrangements will be made for Jain Participants."
    }
  ],
  // Column 2
  [
    {
      question: "Is it compulsory that all members belong to the same college?",
      answer: "No, it is not. You can form a team of students from different colleges. While registering, you can either put the Team Leader's College or mutually decide."
    },
    {
      question: "What is the team size limit?",
      answer: "Teams should consist of 2-4 members. Solo participation is not allowed as we encourage collaborative learning and teamwork."
    },
    {
      question: "Will there be mentors available?",
      answer: "Yes, experienced mentors from various technical domains will be available throughout the hackathon to guide and support teams."
    },
    {
      question: "Is there a code of conduct?",
      answer: "Yes, all participants must follow our code of conduct which promotes a respectful, inclusive, and collaborative environment. Any form of harassment or inappropriate behavior will not be tolerated."
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer: "No, all project work must begin during the hackathon. You can brainstorm ideas beforehand, but no code should be written prior to the start of the event."
    }
  ]
]

export default function FAQ() {
  return (
    <section id='faq' className="py-20 relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center ${pixelFont.className}`}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {faqs.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {column.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${columnIndex}-${index}`}
                    className="border border-border bg-background/50 backdrop-blur-sm rounded-sm px-4 my-3 data-[state=open]:bg-muted/50"
                  >
                    <AccordionTrigger className="text-lg font-medium text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions? {" "}
            <a href="mailto:hackathon_err404@mhssce.ac.in" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}