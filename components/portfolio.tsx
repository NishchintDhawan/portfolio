"use client";
/* eslint react/no-unescaped-entities: 0 */  // --> OFF

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Briefcase,
  MapPin,
  Folder,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Inter } from "next/font/google";
import {
  FaReact,
  FaServer,
  FaCloud,
  FaCode,
  FaPaintBrush,
  FaVrCardboard,
} from "react-icons/fa";
import {
  FaReact as FaReact2,
  FaPython,
  FaJs,
  FaJava,
  FaPhp,
  FaDatabase,
  FaFireAlt,
} from "react-icons/fa";
import { AnimatedText } from "@/components/ui/animated-text";

const inter = Inter({ subsets: ["latin"] });

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "skills",
        "whatido",
        "education",
        "experience",
        "projects",
      ];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { name: "React", level: 90, icon: <FaReact2 className="text-blue-400" /> },
    {
      name: "Python",
      level: 60,
      icon: <FaPython className="text-green-400" />,
    },
    {
      name: "JavaScript/TypeScript",
      level: 80,
      icon: <FaJs className="text-yellow-400" />,
    },
    { name: "C", level: 70, icon: <FaCode className="text-blue-300" /> },
    { name: "Java", level: 90, icon: <FaJava className="text-red-400" /> },
    { name: "PHP", level: 60, icon: <FaPhp className="text-purple-400" /> },
    {
      name: "SQL/PostgreSQL",
      level: 80,
      icon: <FaDatabase className="text-blue-500" />,
    },
    {
      name: "Firebase",
      level: 95,
      icon: <FaFireAlt className="text-orange-400" />,
    },
  ];

  const whatIDo = [
    {
      icon: <FaReact className="w-12 h-12 text-blue-400" />,
      title: "Front-end",
      description:
        "I have experience building dynamic web and mobile apps using React, React Native, and TypeScript. My projects, like a ride-sharing app, focus on responsive UIs, state management (Redux, Context API), and performance optimization with Next.js for seamless experiences.",
    },
    {
      icon: <FaServer className="w-12 h-12 text-blue-400" />,
      title: "Backend & API",
      description:
        "Specialized in building robust backend systems with Node.js, Django, and Express.js. Designed RESTful and GraphQL APIs for projects like a cryptocurrency platform, optimized data storage with PostgreSQL and MongoDB, and leveraged Docker for containerization, ensuring scalability and security.",
    },
    {
      icon: <FaCloud className="w-12 h-12 text-blue-400" />,
      title: "Cloud & DevOps",
      description:
        "Deployed and maintained applications on AWS and Azure, utilizing RDS, S3, and Lambda for serverless architectures. Set up CI/CD pipelines with GitHub Actions and Jenkins in projects like the Ryden app, and utilized Docker, Kubernetes, and Terraform to streamline cloud provisioning and scalability.",
    },
    {
      icon: <FaCode className="w-12 h-12 text-blue-400" />,
      title: "System Design & Testing",
      description:
        "Designed scalable, modular systems with a focus on microservices architecture. Implemented rigorous testing using Jest, Mocha, and Selenium, and automated testing processes with CI/CD pipelines. Improved code quality in projects like a ride-sharing app through unit, integration, and end-to-end testing.",
    },
    {
      icon: <FaPaintBrush className="w-12 h-12 text-blue-400" />,
      title: "UI/UX",
      description:
        "Delivered user-centered UI/UX designs using Figma, and implemented them with Material UI and Tailwind CSS. Created responsive, accessible interfaces for projects like Progressive Web Apps, ensuring smooth, consistent user experiences across devices and browsers.",
    },
    {
      icon: <FaVrCardboard className="w-12 h-12 text-blue-400" />,
      title: "Virtual Reality",
      description:
        "Gained experience developing VR applications, optimizing performance with Unity3D and C#. Developed a Virtual Visitor Centre VR app at the National Research Council of Canada, improving frame rates from 20 to 60 FPS. Implemented automated tests using JUnit and Selenium for enhanced stability.",
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Tradable Bits",
      location: "Vancouver, BC",
      date: "Sept 2023 - Apr 2024 | Jan 2023 - Apr 2023",
      achievements: [
        "Created an access control tool for MLSE, managing 2,500 passes per event for 300K+ fans during Toronto Maple Leafs playoff games.",
        "Developed a PostgreSQL data model tool to manage patches and conflicts, reducing merge times for the development team by 50%.",
        "Optimized and synchronized storage for 1M+ images using AWS S3, cutting costs and enhancing data security.",
        "Boosted email management tool performance by 70% through lazy loading and SQL optimizations, enhancing user experience and productivity.",
      ],
      skills: [
        "Python",
        "Flask",
        "JavaScript",
        "PostgreSQL",
        "REST APIs",
        "Docker",
        "AWS S3",
        "Redis",
        "Memcache",
        "pytest",
      ],
    },
    {
      title: "Software Developer",
      company: "ACD Systems International Inc.",
      location: "Victoria, BC",
      date: "Jan 2022 – Dec 2022",
      achievements: [
        "Integrated Azure AD into the company's web app for secure social login, increasing daily active users by 15%.",
        "Resolved bugs in the email sending system using the LAMP stack, facilitating the marketing team in sending 1M+ emails bi-weekly.",
        "Developed a crypto trading web app for managing wallets and viewing transactions across various exchanges.",
        "Enhanced security of product download links by migrating to a private AWS S3 bucket and utilizing pre-signed URLs.",
      ],
      skills: [
        "ReactJS",
        "MySQL",
        "PHP",
        "jQuery",
        "AWS S3",
        "AWS RDS",
        "Azure AD",
        "Symfony",
      ],
    },
    {
      title: "Software Developer",
      company: "National Research Council of Canada",
      location: "Victoria, BC",
      date: "Jan 2019 – Aug 2019",
      achievements: [
        "Optimized performance of a Virtual Visitor Center VR app, increasing frame rates from 20 to 60 FPS.",
        "Implemented GDPR compliance features for the Canadian Astronomy Data Centre, serving 10,000+ astronomers.",
        "Developed automated browser and unit tests to enhance system quality.",
      ],
      skills: ["Java", "C#", "JavaScript", "Unity3D", "EasyMock", "Selenium"],
    },
  ];
  const projects = [
    {
      name: "MetaChefs",
      date: "Sept 2021",
      description:
        "Collaborated on a mobile app startup with a team of 3, securing first place in the UVic PitchIt competition. Designed and implemented core app features, including a meal review system, messaging functionality between chefs and customers, and Google authentication.",
      skills: ["React Native", "JavaScript", "Firebase Realtime Database"],
    },
    {
      name: "Ryden",
      date: "Sept 2022 – June 2024",
      description:
        "Designed and developed a ride-sharing mobile app enabling users to book, review, and create rides. Integrated a CI/CD pipeline using GitHub Actions, automating deployments for a faster testing process; implemented payments module using Stripe API.",
      skills: [
        "React Native",
        "JavaScript",
        "Stripe API",
        "Nest.js",
        "PostgreSQL",
      ],
    },
    {
      name: "Froogle",
      date: "Jan 2020",
      description:
        "Developed an SMS-based mobile search engine as part of a team of 4 for nwHacks 2020, achieving 16th place out of 145 and winning the Wolfram Award.",
      skills: ["Node.js", "SMS API"],
      link: "https://devpost.com/software/froogle",
    },
  ];
  const animatedTexts = [
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  return (
    <div
      className={`min-h-screen bg-gray-900 text-gray-100 ${inter.className}`}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Nishchint Dhawan</h1>
          <div className="flex space-x-4">
            {[
              "about",
              "skills",
              "whatido",
              "education",
              "experience",
              "projects",
              "contact",
            ].map((section) => (
              <button
                key={section}
                className={`capitalize ${
                  activeSection === section ? "text-blue-400" : "text-gray-400"
                } hover:text-blue-300 transition-colors`}
                onClick={() => scrollToSection(section)}
              >
                {section === "whatido" ? "What I Do" : section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24">
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center text-center space-y-8"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 ring-4 ring-blue-500 ring-opacity-50">
            <Image
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20Medium-vB255DdHWQof0oCG9Y82IiTmvSvZ8q.png`}
              alt="Nishchint Dhawan"
              layout="fill"
              objectFit="cover"
              objectPosition="center 30%"
            />
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Hello, I'm Nishchint Dhawan
          </h2>
          <p className="text-2xl text-gray-300 max-w-2xl">
            <AnimatedText texts={animatedTexts} className="text-blue-400" />
          </p>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-700 hover:bg-blue-500 text-white hover:text-white transition-colors"
            >
              <a
                href="https://github.com/NishchintDhawan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-700 hover:bg-blue-500 text-white hover:text-white transition-colors"
            >
              <a
                href="https://www.linkedin.com/in/nishchint-dhawan-a5b07a159/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("skills")}
            className="animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </Button>
        </section>

        <section id="education" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-12 h-1 bg-blue-500 mr-4"></span>
            <GraduationCap className="mr-2" />
            Education
          </h2>
          <Card className="max-w-2xl mx-auto bg-gray-800 text-gray-100 shadow-lg backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-blue-400">
                University of Victoria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Bachelor of Software Engineering</p>
              <p className="text-gray-300">GPA: 7.09/9.00</p>
              <p className="text-sm text-gray-400 flex items-center mt-2">
                <MapPin className="mr-1" size={16} />
                Victoria, BC | Sept 2017 – Apr 2024
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="w-12 h-1 bg-blue-500 mr-4"></span>
            <Code className="mr-2" />
            Skills
          </h2>
          <div className="grid gap-8 max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-48 text-right mr-4 flex items-center justify-end">
                  {skill.icon}
                  <span className="text-gray-300 font-medium break-words ml-2">
                    {skill.name}
                  </span>
                </div>
                <div className="flex-grow">
                  <Progress value={skill.level} className="h-3 bg-gray-700" />
                </div>
                <span className="ml-4 w-12 text-left text-gray-300 font-medium">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="whatido" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
              <span className="w-12 h-1 bg-blue-500 mr-4"></span>
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatIDo.map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-400">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-12 h-1 bg-blue-500 mr-4"></span>
            <Briefcase className="mr-2" />
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((job, index) => (
              <Card
                key={index}
                className="bg-gray-800 text-gray-100 shadow-lg backdrop-blur-sm border-0"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-blue-400">
                        {job.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{job.company}</p>
                    </div>
                    <span className="text-sm text-gray-400">{job.date}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-gray-300 mb-3 flex items-center">
                    <MapPin className="mr-1" size={16} />
                    {job.location}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-gray-700 text-gray-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-12 h-1 bg-blue-500 mr-4"></span>
            <Folder className="mr-2" />
            Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 text-gray-100 shadow-lg backdrop-blur-sm border-0 transition-all duration-300 hover:bg-gray-700 hover:scale-105"
              >
                <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div className="flex items-center">
                    <h4 className="text-xl font-semibold text-blue-400">{project.name}</h4>
                      {project.link && project.name == "Froogle" && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="ml-2 text-gray-400 hover:text-blue-400 transition-colors"
                          aria-label={`Visit ${project.name} project`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <span className="text-sm text-gray-400">{project.date}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4 text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-gray-700 text-gray-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-900 text-white">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-12 h-1 bg-blue-500 mr-4"></span>
            Contact
          </h2>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6">
                  Interested in working together? Let's chat 
                </h2>
                <p className="mb-8 text-gray-300">
                  Actively looking for full-time positions. Also available for
                  freelance projects.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-blue-400" />
                    <span>Victoria, BC</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-blue-400" />
                    <a
                      href="mailto:nishchint34@gmail.com"
                      className="hover:underline"
                    >
                      nishchint34@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>&copy; 2023 Nishchint Dhawan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
