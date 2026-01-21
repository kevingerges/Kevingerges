"use client";

import { Navigation } from "@/components/navigation";
import Hero from "@/components/ui/hero";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, MapPin, Calendar, ChevronRight, Check, Moon, Sun } from "lucide-react";

const experienceData = [
  {
    position: "Software Engineer",
    company: "Meta",
    logo: "/img/logos/meta.png",
    dates: "August 2025 - Present",
    location: "Menlo Park, CA",
    points: [
      "Delivered $3B organizational impact by architecting privacy compliance infrastructure to prevent data violations across ads namespace, building automated systems to detect and block unauthorized data access in production pipelines during company-wide privacy escalations.",
      "Engineered Data Governance Platform serving as centralized command center for tracking 10,000+ assets across privacy commitments, protecting revenue streams and enabling cross-team coordination for compliance initiatives.",
      "Optimized pipeline generation by 95% (6 minutes → 15 seconds) through compiler redesign, accelerating data filtering pipeline creation and dramatically improving engineering velocity for privacy-compliant infrastructure.",
      "Built Consent Asset Management dashboard enabling 19+ engineers to make real-time decisions across asset portfolio, reducing project planning cycles and improving resource allocation.",
      "Reduced on-call operational overhead by 98% by developing AI-powered automation agent for incident response, freeing engineering capacity for high-priority development work.",
    ],
    skills: ["Python", "AI/ML", "Data Pipelines", "Privacy", "Infrastructure"],
    color: "#0668E1",
  },
  {
    position: "Software Engineer",
    company: "Mercor",
    logo: "/img/logos/mercor.png",
    dates: "March 2025 - July 2025",
    location: "San Francisco, CA",
    points: [
      "Developed and refined LLM evaluation frameworks to assess model performance across diverse use cases.",
      "Built tooling to improve the accuracy and consistency of AI-generated outputs through systematic evaluation.",
      "Collaborated with research teams to implement evaluation metrics that guided model improvements.",
    ],
    skills: ["Python", "LLM Evaluation", "AI/ML", "NLP"],
    color: "#7c3aed",
  },
  {
    position: "Software Engineer",
    company: "Scale AI",
    logo: "/img/logos/scale.png",
    dates: "November 2024 - February 2025",
    location: "San Francisco, CA",
    points: [
      "Contributed to Scale's GenAI Platform, building infrastructure to support enterprise AI deployments.",
      "Developed tools and pipelines for data labeling and model training workflows at scale.",
      "Worked on improving data quality and annotation processes for machine learning applications.",
    ],
    skills: ["Python", "GenAI", "Data Pipelines", "ML Infrastructure"],
    color: "#ec4899",
  },
  {
    position: "Software Engineer Intern",
    company: "LinkedIn",
    logo: "/img/logos/linkedin.svg",
    dates: "May 2024 - August 2024",
    location: "Mountain View, CA",
    points: [
      "Spearheaded development of the highest-priority revenue-based feature for the Revenue Attribution Report team, resulting in a 10% reduction in CRM connection drop-off rates by implementing an automated email notification system.",
      "Collaborated with nine cross-functional teams across LinkedIn to integrate and deploy notification systems, demonstrating strong leadership and coordination to align technical and business requirements.",
      "Architected and deployed the first notification system for the Ads Attribution team, utilizing Spark, Hadoop, and Scala to build historical and daily ETL data pipelines, improving overall efficiency by 20%.",
      "Designed interdependent, fail-safe data pipelines processing daily inputs from multiple datasets, with automatic backfill during infrastructure failures ensuring accurate and reliable processing.",
      "Led frontend and configuration efforts for email system, coding interface using Glimmer/Ember and GraphQL to retrieve enterprise profile data for personalized communications.",
      "Project contributed to 15% increase in customer satisfaction scores and revenue growth through improved engagement.",
    ],
    skills: ["Spark", "Hadoop", "Scala", "Glimmer/Ember", "GraphQL", "ETL"],
    color: "#0077b5",
  },
  {
    position: "Software Engineering Fellow",
    company: "Bloomberg",
    logo: "/img/logos/bloomberg.jpg",
    dates: "May 2023 - August 2023",
    location: "Princeton, NJ",
    points: [
      "Participated in Bloomberg's engineering fellowship program focused on financial technology solutions.",
      "Developed data analysis tools using Django and shell scripting for financial data processing.",
      "Built data visualization solutions using Seaborn and Anaconda for market analysis.",
    ],
    skills: ["Django", "Shell Scripting", "Seaborn", "Anaconda", "Python"],
    color: "#000000",
  },
  {
    position: "Software Engineer Intern",
    company: "Kaiser Permanente",
    logo: "/img/logos/kaiser.png",
    dates: "May 2023 - August 2023",
    location: "Remote",
    points: [
      "Developed a critical API endpoint for the Smart Triage system, automating the routing of patient pre-appointment questionnaires to doctors via the Epic platform, reducing errors by 20%.",
      "Engineered a solution to ensure seamless data transmission of patient responses, improving information processing accuracy.",
      "Conducted comprehensive testing resulting in faster patient intake and a 30% increase in processing efficiency.",
    ],
    skills: ["API", "Redis", "SpringBoot", "Java", "Testing"],
    color: "#8b5cf6",
  },
  {
    position: "Embedded Software Engineering Intern",
    company: "NASA",
    logo: "/img/logos/nasa.jpg",
    dates: "March 2022 - August 2022",
    location: "Norco, CA",
    points: [
      "Investigated autonomous systems for lunar exploration, integrating multi-sensor data with machine learning to navigate unstructured terrain.",
      "Designed soil classification algorithms using Gradient Boosting Machines (GBM) for accurate identification under fluctuating conditions.",
      "Developed real-time anomaly detection using YOLO, enabling identification of geological features and navigation of hazards.",
    ],
    skills: ["Python", "YOLO", "GBM", "ROS", "SLAM", "OpenCV"],
    color: "#f97316",
  },
];

const photos = [
  "/img/IMG_52191.JPG",
  "/img/IMG_5413.JPG",
  "/img/IMG_3866.jpg",
  "/img/IMG_5562.JPG",
  "/img/IMG_5481.JPG",
  "/img/IMG_5578.JPG",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const hobbiesRef = useRef(null);
  const connectRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const hobbiesInView = useInView(hobbiesRef, { once: true, margin: "-100px" });
  const connectInView = useInView(connectRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Check for saved preference or system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      setDarkMode(saved === 'true');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${darkMode ? 'bg-neutral-950 text-white' : 'bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40 text-neutral-900'}`}>
      {/* Grid Pattern Background */}
      <div
        className={`fixed inset-0 pointer-events-none z-0 ${darkMode ? 'opacity-5' : 'opacity-30'}`}
        style={{
          backgroundImage: `
            linear-gradient(${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(59, 130, 246, 0.08)'} 1px, transparent 1px),
            linear-gradient(90deg, ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(59, 130, 246, 0.08)'} 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Edge Glows */}
      <div className={`fixed left-0 top-0 bottom-0 w-[300px] sm:w-[400px] pointer-events-none z-0 ${darkMode ? 'opacity-30' : 'opacity-80'}`}
        style={{ background: 'radial-gradient(ellipse at left center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' }} />
      <div className={`fixed right-0 top-0 bottom-0 w-[300px] sm:w-[400px] pointer-events-none z-0 ${darkMode ? 'opacity-30' : 'opacity-80'}`}
        style={{ background: 'radial-gradient(ellipse at right center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' }} />

      <Navigation darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Hero Section */}
      <section id="home">
        <Hero
          title="Kevin Gerges"
          description="Software Engineer at Meta, building technology that mirrors how we think and remember. Fascinated by the intersection of human cognition, AI, and computational systems."
          ctaButtons={[
            { text: "View Work", href: "#experience", primary: true },
            { text: "Get in Touch", href: "#connect" }
          ]}
          microDetails={["Human-Centered AI", "Multi-Agent Systems", "NLP Research"]}
          darkMode={darkMode}
        />
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className={`relative py-24 px-6 ${darkMode ? 'bg-neutral-900/50' : 'bg-neutral-50'}`}>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={`text-xs font-semibold tracking-widest uppercase mb-4 block ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>About Me</span>
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              About
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                <Image
                  src="/img/IMG_6867.jpg"
                  alt="Kevin Gerges"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className={`text-xl leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                I'm a Software Engineer at <span className="font-semibold text-blue-500">Meta</span> and a
                Computer Science graduate from <span className="font-semibold text-red-500">USC</span> and I like to build software that understands people.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                I design systems that model human thought—how we remember, search, and construct meaning; how beliefs form, decisions emerge, and context shapes choice. These forces guide how I build.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                I'm deeply interested in human cognition and behavior, and in creating systems that reflect that understanding.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                When I'm not building, I'm reading, playing chess & tennis, or thinking about cars.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {["Human-Centered AI", "Cognitive Systems", "NLP", "Multi-Agent Systems", "Full-Stack", "Robotics"].map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${darkMode
                      ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className={`text-xs font-semibold tracking-widest uppercase mb-4 block ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>Professional Journey</span>
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Experience
            </h2>
            <p className={`text-lg ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Where I've worked and what I've built</p>
          </motion.div>

          <div className="grid lg:grid-cols-[320px_1fr] gap-8">
            {/* Company tabs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={experienceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              {experienceData.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExperience(index)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 border ${selectedExperience === index
                    ? darkMode
                      ? "bg-neutral-800 border-neutral-700"
                      : "bg-white border-neutral-200 shadow-sm"
                    : darkMode
                      ? "bg-transparent border-transparent hover:bg-neutral-800/50"
                      : "bg-transparent border-transparent hover:bg-neutral-50"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={28}
                      height={28}
                      className="rounded-md flex-shrink-0"
                    />
                    <div>
                      <div className={`font-medium ${selectedExperience === index
                        ? darkMode ? "text-white" : "text-neutral-900"
                        : darkMode ? "text-neutral-400" : "text-neutral-600"
                        }`}>
                        {exp.company}
                      </div>
                      <div className={`text-sm ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>{exp.dates}</div>
                    </div>
                    <ChevronRight className={`w-5 h-5 ml-auto ${selectedExperience === index
                      ? darkMode ? "text-white" : "text-neutral-900"
                      : darkMode ? "text-neutral-600" : "text-neutral-300"
                      }`} />
                  </div>
                </button>
              ))}
            </motion.div>

            {/* Experience details */}
            <motion.div
              key={selectedExperience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl p-8 border ${darkMode
                ? 'bg-neutral-900 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-sm'
                }`}
            >
              <div className="mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={experienceData[selectedExperience].logo}
                    alt={experienceData[selectedExperience].company}
                    width={40}
                    height={40}
                    className="rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className={`text-2xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      {experienceData[selectedExperience].position}
                    </h3>
                    <div className={`flex flex-wrap items-center gap-3 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      <span className="font-medium" style={{ color: experienceData[selectedExperience].color }}>
                        @{experienceData[selectedExperience].company}
                      </span>
                      <span className={`w-1 h-1 rounded-full ${darkMode ? 'bg-neutral-600' : 'bg-neutral-300'}`} />
                      <span className="flex items-center gap-1.5 text-sm">
                        <MapPin className="w-4 h-4" />
                        {experienceData[selectedExperience].location}
                      </span>
                      <span className={`w-1 h-1 rounded-full ${darkMode ? 'bg-neutral-600' : 'bg-neutral-300'}`} />
                      <span className="flex items-center gap-1.5 text-sm">
                        <Calendar className="w-4 h-4" />
                        {experienceData[selectedExperience].dates}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {experienceData[selectedExperience].points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex gap-3 leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <div className={`pt-6 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
                <p className={`text-sm font-medium uppercase tracking-wider mb-3 ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {experienceData[selectedExperience].skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${darkMode
                        ? 'bg-neutral-800 text-neutral-300'
                        : 'bg-neutral-100 text-neutral-600'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" ref={hobbiesRef} className={`relative py-24 px-6 ${darkMode ? 'bg-neutral-900/50' : 'bg-neutral-50'}`}>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={hobbiesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className={`text-xs font-semibold tracking-widest uppercase mb-4 block ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>Creative Side</span>
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Photography & Videography
            </h2>
            <p className={`text-lg ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Capturing moments through my lens</p>
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {photos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={hobbiesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${idx === 0 || idx === 3 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={photo}
                  alt={`Photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Video Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {["/img/SD_VLOG.MP4", "/img/Untitled.MOV"].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={hobbiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + idx * 0.2, duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <video
                  controls
                  loop
                  playsInline
                  className="w-full h-auto"
                  src={video}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="connect" ref={connectRef} className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate={connectInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={`text-xs font-semibold tracking-widest uppercase mb-4 block ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>Get In Touch</span>
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Let's Connect
            </h2>
            <p className={`text-lg max-w-xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={connectInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`rounded-2xl p-8 border ${darkMode
                ? 'bg-neutral-900 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-sm'
                }`}
            >
              <h3 className={`text-xl font-semibold mb-6 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                <Mail className="w-5 h-5 text-blue-500" />
                Send a Message
              </h3>
              <form
                action="https://formsubmit.co/kevingerges00@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="organization" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${darkMode
                      ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-blue-500'
                      : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label htmlFor="name" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${darkMode
                      ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-blue-500'
                      : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${darkMode
                      ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-blue-500'
                      : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${darkMode
                      ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-blue-500'
                      : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: darkMode ? '#fff' : '#171717', color: darkMode ? '#171717' : '#fff' }}
                >
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={connectInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className={`rounded-2xl p-8 border ${darkMode
                ? 'bg-neutral-900 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-sm'
                }`}>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Connect with Me</h3>
                <p className={`leading-relaxed mb-6 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Follow me on social media to stay updated with my latest projects and thoughts on technology.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Github, href: "https://github.com/Kevingerges", label: "GitHub", username: "@Kevingerges" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/kevingerges/", label: "LinkedIn", username: "kevingerges" },
                    { icon: Mail, href: "mailto:kevingerges00@gmail.com", label: "Email", username: "kevingerges00@gmail.com" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all group border ${darkMode
                        ? 'bg-neutral-800/50 border-neutral-700 hover:bg-neutral-800'
                        : 'bg-neutral-50 border-neutral-100 hover:bg-neutral-100'
                        }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-neutral-700' : 'bg-white border border-neutral-200'
                        }`}>
                        <social.icon className={`h-5 w-5 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`} />
                      </div>
                      <div className="flex-1">
                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{social.label}</span>
                        <span className={`block text-sm ${darkMode ? 'text-neutral-500' : 'text-neutral-500'}`}>{social.username}</span>
                      </div>
                      <ExternalLink className={`h-4 w-4 transition-colors ${darkMode ? 'text-neutral-600 group-hover:text-neutral-400' : 'text-neutral-400 group-hover:text-neutral-600'}`} />
                    </a>
                  ))}
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className={`font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>Kevin Gerges</span>
            <p className={darkMode ? 'text-neutral-500' : 'text-neutral-400'}>
              © {new Date().getFullYear()} Kevin Gerges.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/Kevingerges" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kevingerges/" },
                { icon: Mail, href: "mailto:kevingerges00@gmail.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${darkMode
                    ? 'bg-neutral-800 hover:bg-neutral-700'
                    : 'bg-neutral-100 hover:bg-neutral-200'
                    }`}
                >
                  <social.icon className={`w-4 h-4 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
