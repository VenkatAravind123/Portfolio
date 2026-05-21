import React from 'react';
import profile from './assets/aravindprofile.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import python1 from './assets/python1.jpg'
import bank1 from './assets/bank1.png'
import jana1 from './assets/jana1.png'
import rpa from './assets/rpa.jpg'
// --- Shared Components ---

const TopNavBar = () => {
  const navLinks = ["Home", "About", "Portfolio", "Projects", "Resume"];
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-indigo-600">Venkat Aravind</div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={link === "Resume" ? "https://www.overleaf.com/read/ktknzypdhgdh#0dceda" : `#${link.toLowerCase()}`}
              target={link === "Resume" ? "_blank" : "_self"}
              rel={link === "Resume" ? "noopener noreferrer" : ""}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-indigo-600 font-medium hidden lg:block">View Work</button>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-all active:scale-95">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Hello, I'm</span>
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            Venkat Aravind
          </h1>
          <p className="text-xl text-slate-600">
            I am Passionate <span className="text-indigo-600 italic font-semibold">Developer</span> from India
          </p>
          <div className="flex space-x-4 pt-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Hire Me
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all">
              View Work
            </button>
          </div>
          <div className="flex space-x-4 pt-6">
  <a href="https://github.com/VenkatAravind123" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-110">
    <FaGithub size={20} />
  </a>
  <a href="https://www.linkedin.com/in/sri-venkat-aravind-kodamanchili-365b0b26a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-110">
    <FaLinkedin size={20} />
  </a>
  <a href="https://x.com/VenkatA1267954" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-110">
    <FaTwitter size={20} />
  </a>
</div>
        </div>
        <div className="flex-1 relative">
          <div className="w-80 h-96 md:w-[450px] md:h-[550px] mx-auto overflow-hidden rounded-[2rem] rotate-3 bg-indigo-100">
             <img 
               src={profile} 
               alt="Venkat Aravind" 
               className="w-full h-full object-cover -rotate-3 scale-110"
             />
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, isActive }) => (
  <div className={`p-8 rounded-2xl border transition-all duration-300 ${isActive ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-200' : 'bg-white border-gray-100 hover:border-indigo-200 hover:shadow-lg'}`}>
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${isActive ? 'bg-white/20' : 'bg-indigo-50 text-indigo-600'}`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className={isActive ? 'text-indigo-100' : 'text-slate-500'}>{description}</p>
  </div>
);

const SkillBadge = ({ name }) => (
  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-all">
    {name}
  </span>
);

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - About & Education */}
        <div className="space-y-12">
          {/* About Me */}
          <div>
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">ABOUT ME</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Professional Journey
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              I'm a passionate developer based in India, dedicated to building high-quality web applications. With a focus on modern technologies and user-centric design, I strive to create digital experiences that are both functional and beautiful.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Education</h3>
            <div className="space-y-4 border-l-4 border-indigo-600 pl-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Computer Science and Engineering</h4>
                <p className="text-slate-600 font-medium">KL University, India</p>
                <p className="text-indigo-600 font-semibold">2022 - 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">My Skills</h3>
          
          {/* Frontend Skills */}
          <div className="mb-10">
            <h4 className="text-indigo-600 font-bold uppercase text-sm tracking-wider mb-4">Frontend</h4>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="React" />
              <SkillBadge name="JavaScript" />
              <SkillBadge name="HTML" />
              <SkillBadge name="CSS" />
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-10">
            <h4 className="text-indigo-600 font-bold uppercase text-sm tracking-wider mb-4">Backend</h4>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Java" />
              <SkillBadge name="APIs" />
              <SkillBadge name="Python" />
              <SkillBadge name="Express" />
              <SkillBadge name="SpringBoot" />
            </div>
          </div>

          {/* Tools Skills */}
          <div>
            <h4 className="text-indigo-600 font-bold uppercase text-sm tracking-wider mb-4">Tools</h4>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Git" />
              <SkillBadge name="VS Code" />
              <SkillBadge name="Figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, tags, status, image }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
    {/* Project Image */}
    <div className="aspect-video bg-gray-100 relative overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    {/* Project Content */}
    <div className="p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      {/* Status */}
      <div className="flex items-center gap-2">
        <span className="text-slate-500 font-semibold text-sm">Status:</span>
        <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
          {status}
        </span>
      </div>
    </div>
  </div>
);

const CTA = () => (
  <section id="resume" className="py-20 px-6">
    <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div className="relative z-10 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
          Ready to bring your digital vision to life?
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          I am currently available for freelance projects and full-time opportunities. Let's create something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all">
            Start a Conversation
          </button>
          <button className="border-2 border-slate-700 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
            Download CV
          </button>
        </div>
      </div>
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-gray-100 mt-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="space-y-4 text-center md:text-left max-w-xs">
        <div className="text-xl font-bold text-indigo-600">Venkat Aravind</div>
        <p className="text-slate-500 text-sm">Crafting premium digital experiences through elegant code and thoughtful design.</p>
      </div>
      <div className="flex space-x-8 text-sm font-semibold text-slate-600">
        <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
        <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
        <a href="#" className="hover:text-indigo-600 transition-colors">YouTube</a>
      </div>
      <div className="text-slate-400 text-sm">
        © 2024 Venkat Aravind. Built with Precision.
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
      <TopNavBar />
      
      <main>
        <Hero />
        
        <AboutMe />
        
        {/* About/Portfolio Section */}
        <section id="portfolio" className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Modern Stack" 
              description="Specializing in React, Tailwind CSS, and cutting-edge frontend architectures."
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>}
            />
            <FeatureCard 
              title="Fast Performance" 
              description="Building applications that load instantly and provide a buttery-smooth user experience."
              isActive={true}
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
            />
            <FeatureCard 
              title="Global Vision" 
              description="Delivering high-quality digital solutions for clients worldwide from India."
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18"></path></svg>}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="mb-12">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-indigo-600 rounded-full"></div>
      </div>
      <p className="text-slate-600 text-lg max-w-2xl">
        Here are some of the projects I've worked on that showcase my skills and experience.
      </p>
    </div>
    
    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
      <ProjectCard 
        title="ONLINE ART GALLERY"
        description="Web Application that can be accessed by Customers and Artists, where artists can publish their artwork and customers can view and buy their interested artwork."
        tags={["Python", "Django", "PostgreSQL"]}
        status="Completed"
        image={python1}
      />
      
      <ProjectCard 
        title="BANKING AND FINANCE MANAGEMENT SYSTEM"
        description="Project is currently under process which can be accessed by Admin and Customers, where the customer can login and transfer money to others."
        tags={["React", "Node.js", "MongoDB", "Express"]}
        status="Completed"
        image={bank1}
      />
      
      <ProjectCard 
        title="JANASEVAAP"
        description="Developed a web platform for citizen engagement and governance transparency. Enabled citizens to raise issues, track progress, and communicate with politicians. Facilitated real-time updates and seamless interaction, promoting accountability and efficient governance."
        tags={["React", "SpringBoot", "MySQL"]}
        status="Completed"
        image={jana1}
      />
      
      <ProjectCard 
        title="RPA Club Website"
        description="Developed a web platform for citizen engagement and governance transparency. Enabled citizens to raise issues, track progress, and communicate with politicians. Facilitated real-time updates and seamless interaction, promoting accountability and efficient governance."
        tags={["React", "Node.js", "MongoDB", "Express"]}
        status="Completed"
        image={rpa}
      />
    </div>
    
    {/* GitHub Link */}
    <div className="flex justify-center">
      <a 
        href="https://github.com/VenkatAravind123" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View More on GitHub
      </a>
    </div>
  </div>
</section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}