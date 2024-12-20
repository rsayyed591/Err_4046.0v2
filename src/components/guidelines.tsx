'use client'

// import { useState } from 'react'
import { motion } from 'framer-motion'
import { Laptop, AlertCircle, Clock, Download, FileWarning } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { pixelFont } from '@/app/fonts'

const rules = [
  "Teams may consist of four to five members.",
  "All code, design elements, and assets must be developed during the Hackathon.",
  "Pre-event planning, wireframes, and brainstorming are allowed.",
  "Third-party services, APIs, open-source projects, libraries, and frameworks are permitted.",
  "Alcohol and smoking are strictly prohibited.",
  "Maintain professional behavior at all times.",
  "Any form of harassment or discriminatory behavior will result in immediate removal.",
  "This is an inclusive event - please help keep it friendly for everyone."
]

const generalGuidelines = [
  "Please arrive promptly for onsite registration.",
  "Remember to bring your valid college ID cards as admission will not be granted without them.",
  "Participants are expected to comply with the dress code specified in the provided undertaking.",
  "Keep in mind that the schedule is subject to change, so participants should be prepared to follow any revised timings.",
  "For safety reasons, leaving the campus between 9:00 PM and 6:00 AM will not be permitted.",
  "Please note that parking of vehicles within the campus premises is not allowed.",
  "It is essential to obtain a signed copy of the undertaking, which can be found below."
]

const harassmentDetails = [
  "Offensive verbal or written comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, or religion",
  "Deliberate intimidation",
  "Stalking or following",
  "Harassing photography or recording",
  "Sustained disruption of talks or other events",
  "Inappropriate physical contact"
]

export default function Guidelines() {
  return (
    <section id="guidelines" className="py-20 relative overflow-hidden">

      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center ${pixelFont.className} text-primary`}>
            Guidelines
          </h2>
        </motion.div>

        <Tabs defaultValue="general" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="general">General Guidelines</TabsTrigger>
            <TabsTrigger value="rules">Rules & Regulations</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-8">
            <Card className="p-6 bg-background/50 backdrop-blur border-primary/20">
              <div className="max-w-3xl mx-auto">
                <p className="text-muted-foreground mb-8">
                  We anticipate your enthusiasm for ERR_404 6.0 Hackathon. To ensure the smooth and successful execution of this event, we kindly request that you adhere to the following guidelines:
                </p>
                <ul className="space-y-4">
                  {generalGuidelines.map((guideline, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-3 items-start"
                    >
                      <Clock className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{guideline}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-12 space-y-6 text-center">
                  <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                    <p className="text-lg font-semibold text-primary">
                      The problem statements will be unveiled seven days prior to the event.
                    </p>
                  </div>
                  
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Undertaking
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card className="p-6 bg-background/50 backdrop-blur border-primary/20">
                <h3 className={`text-2xl font-bold mb-6 ${pixelFont.className}`}>Rules and Regulations</h3>
                <ul className="space-y-4">
                  {rules.map((rule, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-3 items-start"
                    >
                      <Laptop className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{rule}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>

              <div className="space-y-6">
                <Card className="p-6 bg-background/50 backdrop-blur border-primary/20">
                  <h3 className={`text-2xl font-bold mb-6 ${pixelFont.className}`}>Important Notice</h3>
                  <p className="text-muted-foreground mb-6">
                    Please be aware that at this event, any form of harassment, as well as jokes that are racist, sexist, or exclusionary, is considered unacceptable. Those who do not adhere to these guidelines may be asked to leave.
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full gap-2">
                        <FileWarning className="w-4 h-4" />
                        View Complete Guidelines
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className={`text-xl ${pixelFont.className}`}>
                          Complete Guidelines
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Harassment encompasses various behaviors, including but not limited to:
                        </p>
                        <ul className="space-y-2">
                          {harassmentDetails.map((detail, index) => (
                            <li key={index} className="flex gap-2 text-muted-foreground">
                              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="space-y-4 text-muted-foreground">
                          <p>
                            If your actions are causing someone discomfort or making them feel uneasy, it qualifies as harassment and should be a valid reason to cease those actions.
                          </p>
                          <p>
                            Comments and actions that exclude or discriminate against others can be hurtful to those in your vicinity. If participants are advised to cease any behavior that is causing harm, they should promptly adhere to the request.
                          </p>
                          <p>
                            Sponsors, judges, mentors, volunteers, organizers, and all other individuals present at the event are likewise anticipated to adhere to the same guidelines.
                          </p>
                          <p>
                            In the event of harassment or misconduct, event organizers have the authority to take necessary actions, such as issuing warnings or removing the offender from the event.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </Card>

                <Card className="p-6 bg-background/50 backdrop-blur border-primary/20">
                  <h3 className={`text-2xl font-bold mb-6 ${pixelFont.className}`}>Need Help?</h3>
                  <p className="text-muted-foreground mb-6">
                    If you experience harassment, witness it happening to someone else, or have any other concerns, please promptly report it to event volunteers or staff members.
                  </p>
                  <Button className="w-full">
                    Contact Organizers
                  </Button>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}