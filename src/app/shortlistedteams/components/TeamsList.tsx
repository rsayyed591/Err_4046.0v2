"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { pixelFont } from "@/app/fonts"

const teamsPerPage = 5

const teams = [
    {
      team: "404NOTFOUND",
      members: ["R.Karthik Raja", "Kanish Chheda", "Naman Kumar", "Shreyash Pingle"],
    },
    {
      team: ".EXE DEVELOPERS",
      members: ["Varun Soni", "Sharib Khan", "Anaum Sharif", "Pritesh Verma"],
    },
    {
      team: "nopeace.js",
      members: ["Ayan Joshi", "Aarya Paradkar", "Tufayl Dalvi", "Aditi Narkar"],
    },
    {
      team: "NUCLITRON",
      members: ["Taha Alotwala", "Raj Singh", "Mustafa S.", "Kishan Wali", "Aarya Thakur"],
    },
    {
      team: "Send !Nodes",
      members: ["Alina Shaikh", "Ayaan Shaikh", "Aayush Sharma", "Faraaz Shaikh", "Amin Solkar"],
    },
    {
      team: "FlutterFleet",
      members: ["Alfiya Siddique", "Atharva Chavan", "Taiba Shaikh", "Dhruv Jain", "Danish Siddiqui"],
    },
    {
      team: "PENTIUM PREDATORS",
      members: ["Darshan R.A", "Kayal Ennian", "Krishna Raichura", "VishnuRam M"],
    },
    {
      team: "Team 4i",
      members: ["Vinish Rexson", "Harsh Dalvi", "Nishant Maurya", "Yash Punmiya"]
    },
    {
      team: "PacMen",
      members: ["Sumeet Dev", "Tejas Prajapati", "Sanchit Gade", "Ruchik Panwal"]
    },
    {
      team: "DevSquad",
      members: ["Sakshi Bhirud", "Vinay Savla", "Pruthu Raut", "Sanket Ugale"]
    },
    {
      team: "Paypal Mafia",
      members: ["Vishal Singh", "Vikrant Singh", "Alvin D'Souza", "Alston Soares"]
    },
    {
      team: "Git Win It",
      members: ["Manas Jagtap", "Vedant Kale", "Rohit Mangale", "Haresh Kurade"]
    },
    {
      team: "InnovateHERs",
      members: ["Meetali Kapse", "Nidhi Kadam", "Mamta Gupta", "Pooja Gawade", "Ayesha N."]
    },
    {
      team: "NoName.json",
      members: ["Mohd Bilal", "Numair Sayed", "Affaan Arbani", "Vivek Chouhan", "Nishikant Raut"]
    },
    {
      team: "TensionFlow",
      members: ["Harshil Damania", "Rachit Chheda", "Mohit N.", "Harsh Jain", "Meet Patel"]
    },
    {
      team: "Nice Vibes",
      members: ["Soham Parab", "Sharvin Gavad", "Janice Dcruz", "Zane Falcao"]
    },
    {
      team: "DebuggersUnitedR7",
      members: ["Zaman Shaikh", "Ahsaan Idrisi", "Usaid Sayed", "Naved Wadkar", "Hamza Ansari"]
    },
    {
      team: "Code Pirates",
      members: ["Vishav Pathania", "Sudhakar Jha", "Vighnesh Rane", "Rahul Nair"]
    },
    {
      team: "CodeBlaze",
      members: ["Shayan Shaikh", "Niraj Potdar", "Adeeba Shaikh", "Anurag Pandey"]
    },
    {
      team: "TechWizards",
      members: ["MohdAmin Shaikh", "Shaikh Mudassir", "Irfan Ansari", "Ayaaz S.", "Shazmeen Shaikh"]
    },
    {
      team: "Code Monk",
      members: ["Aditya Redekar", "Nishant Rathod", "Rahul Santra", "Vikas Nayak"]
    },
    {
      team: "BitBrigade",
      members: ["Rishabh Jha", "Harshil Tanwar", "Amit Suthar", "Sumit Tiwari"]
    },
    {
      team: "NOps",
      members: ["Atharva Wakhare", "Paritosh Shukla", "Shobit Gupta", "Prathmesh Raut"]
    },
    {
      team: "Killing IT",
      members: ["Harsh Kanani", "Umang Shroff", "Sattva Doshi", "Vansh Mehta"]
    },
    {
      team: "DashCoders",
      members: ["Puja Chaudhari", "Varad Kamthe", "Isha Rathi", "Ishan Undre"]
    },
    {
      team: "Hack Her Way",
      members: ["Ayesha Qazi", "Haniya Sayyed", "Naureen Khan", "Zoha Ansari", "Aafia Shaikh"]
    },
    {
      team: "The gitFather",
      members: ["Ajinkya Chitre", "Soham Aversekar", "Anish Awasthi", "Mayuresh Chavan"]
    },
    {
      team: "1of1",
      members: ["Taher Afsar", "Keval Shah", "Krish Thakkar", "Rajat Masanagi", "Maaz S."]
    },
    {
      team: "Tech Trojans",
      members: ["Mayur Kalwar", "Kush Jain", "Manav Patel", "Harsheel Sharma"]
    },
    {
      team: "Hypertext Assasins",
      members: ["Sushmit Sanyal", "Tanmay Sarode", "Chinmay Tullu", "Fahed Khan"]
    },
    {
      team: "pseudocodes",
      members: ["Mitesh Audichya", "Basavraj D.", "Avadhoot Dhumal", "Yash Dave", "Ankit Dubey"]
    },
    {
      team: "[object Object]",
      members: ["Jay Kerkar", "Aayush Nair", "Sundaram K.", "Yash Kolekar"]
    },
    {
      team: "Axios.tsx",
      members: ["Salman Shaikh", "Sameer Shaikh", "Zufiya Idrisi", "Mohd Sahuf"]
    },
    {
      team: "Cipher Squad",
      members: ["Ajinky Pandit", "Aman Gupta", "Ritesh Mane", "Harshit Nikam"]
    },
    {
      team: "Hackrippers",
      members: ["Akash Kewat", "Ayush Patel", "Chetan Sen", "Navneet V."]
    },
    {
      team: "Team Codiee",
      members: ["Punit Gavali", "Harsh Parmar", "Aditi Gupta", "Joel Pawar"]
    },
    {
      team: "HackHawks",
      members: ["Omkar Laad", "Nikhil Sarak", "Pavan Rasal", "Sridhar Pillai"]
    },
    {
      team: "D.A.R.T.S. Crew",
      members: ["Tushit P.", "Rounak K.", "Dhruv A.", "Ashish Gupta", "Sohail Ali K."]
    },
    {
      team: "BroCode",
      members: ["Saahil F.", "Soham Mane", "Chhand C.", "Slayde S.", "Soham L."]
    },
    {
      team: "BitBenders",
      members: ["AbdulR. Khan", "Namir Kazi", "Uzair Dabir", "Mohd Patanwala"]
    },
    {
      team: "Team Name",
      members: ["Meet Mehta", "Madhav Shah", "Kush Tejani", "Satva Shah"]
    },
    {
      team: "Status Code- 404",
      members: ["Sujal V.", "Bhuvnesh S.", "Dev Joshi", "Harsh L."]
    },
    {
      team: "KnowWiz",
      members: ["Anandi Ket", "Rahul G.", "Aniruddh S.", "Pranav N."]
    },
    {
      team: "Iterative Bytes",
      members: ["Saniya Shetty", "Vipul Mhatre", "Vedant Khade", "Varun Vyas"]
    },
    {
      team: "NgenX",
      members: ["Siddhima De", "Sahil Gurnani", "Sahil Gehani", "Rohan Advani", "Eshaan Vaswani"]
    },
    {
      team: "Coffee Code",
      members: ["Hassaan S.", "Irfan S.", "Rashid G.", "Aqeel Memon", "Kaif Tokare"]
    },
    {
      team: "Kalki Coders",
      members: ["Kashish Bhanushali", "Ramesh Yadav", "Rehman Khan", "Meet Dodiya"]
    },
    {
      team: "Watermelon",
      members: ["Abhineya Beduru", "Prince Yadav", "Prathmesh T.", "Alok Singh"]
    },
    {
      team: "Celestines",
      members: ["Tanveer F. H.", "Tanisha K.", "Iqra Aslam", "Yasmeen Z."]
    },
    {
      team: "Idea Igniters",
      members: ["Fazal Shaikh", "Nouman Sayyed", "Zoya Momin", "Mohd Salique K."]
    },
    {
      team: "Neural Nexus",
      members: ["Sanket Dhonde", "Sri Rumde", "Aditya Sahu", "Yash Salunke"]
    },
    {
      team: "Parallel Transcend",
      members: ["Dipesh Todi", "Mitesh Singh", "Abhijeet Y.", "Vinayak J.", "Yash Tailor"]
    },    
  ]

export default function TeamsList() {
  const [searchTeam, setSearchTeam] = useState("")
  const [searchMember, setSearchMember] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredTeams = teams.filter((team) => {
    return (
      team.team.toLowerCase().includes(searchTeam.toLowerCase()) &&
      team.members.some((member) => member.toLowerCase().includes(searchMember.toLowerCase()))
    )
  })

  const totalPages = Math.ceil(filteredTeams.length / teamsPerPage)
  const paginatedTeams = filteredTeams.slice((currentPage - 1) * teamsPerPage, currentPage * teamsPerPage)

  return (
    <section className="py-16 min-h-screen text-black">
    <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${pixelFont.className}`}>
          Selected Teams Ready for Battle!
          </h1>
          </motion.div>
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <Input
              placeholder="Search team name"
              value={searchTeam}
              onChange={(e) => setSearchTeam(e.target.value)}
              className={`bg-white/90 border-2 border-black pl-10 ${pixelFont.className}`}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <Input
              placeholder="Search team member"
              value={searchMember}
              onChange={(e) => setSearchMember(e.target.value)}
              className={`bg-white/90 border-2 border-black pl-10 ${pixelFont.className}`}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className={`py-4 px-6 text-center font-bold text-xl ${pixelFont.className}`}>Team Name</th>
                  <th className={`py-4 px-6 text-center font-bold text-xl ${pixelFont.className}`}>Team Members</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTeams.map((team, idx) => (
                  <tr key={idx} className="border-b border-gray-300">
                    <td className={`py-4 px-6 text-center font-bold ${pixelFont.className}`}>{team.team}</td>
                    <td className="py-4 px-6 flex justify-center w-full min-w-[300px]">
                      <ul className="list-disc space-y-2 w-full max-w-[500px] px-8">
                        {team.members.map((member, index) => (
                          <li key={index} className={`text-left ${pixelFont.className}`}>
                            {member}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-full ${currentPage === i + 1 ? "bg-black text-white" : "hover:bg-gray-200"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}

