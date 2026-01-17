import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, 
  Code2, Database, Cloud, Layout, Terminal, Award, 
  Download, ShieldCheck, Zap, Layers, Users, MessageCircle,
  Briefcase, Clock, CheckCircle2
} from 'lucide-react';
import profile from './assets/profile3.jpg'
import Technology from './component/Technology.jsx';
import cv from './assets/muhammed_irfan_full_stack_developer.pdf';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] text-gray-200 min-h-screen font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent uppercase">Irfan.Dev</span>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-bold">
            <a href="#expertise" className="hover:text-blue-400 transition">Expertise</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#services" className="hover:text-blue-500 transition">Services</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
{/* Hero Section */}
     {/* Hero Section */}
      <section className="relative pt-40 pb-8 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[150px] animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Floating Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] -z-10"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Based in Dubai, UAE | Available Immediately
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
              MUHAMMED <br/>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 animate-gradient">
                  IRFAN
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 to-cyan-600/50 blur-xl -z-10 animate-pulse"></span>
              </span>
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Full-Stack Developer & <span className="text-white font-bold border-b-2 border-blue-600">Front-End Team Lead</span>
              </p>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-xl text-lg">
              Architecting enterprise-grade ERP, E-commerce, and Fintech solutions. Specializing in Python (Django), React.js, and Angular for high-traffic platforms.
            </p>
            
            {/* Stats Bar - UAE Professional Standard */}
            <div className="flex gap-8 py-6 border-y border-gray-800">
              <div>
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years Exp</div>
              </div>
             
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:irfan188iqbal@gmail.com" className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold transition overflow-hidden">
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href={cv} download className="border-2 border-gray-700 hover:border-blue-500 px-10 py-4 rounded-full font-bold transition flex items-center gap-2 hover:bg-blue-500/10">
                Download CV <Download size={18} />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image with Holographic Effect */}
          <div className="relative group hidden md:flex justify-center items-center">
            <div className="relative w-80 lg:w-96">
              {/* Holographic Border Animation */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-all duration-700 animate-spin-slow"></div>
              
              {/* Corner Accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-cyan-500 rounded-br-3xl"></div>
              
              {/* Scan Line Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-32 animate-scan"></div>
              </div>
              
              {/* Main Image */}
              <div className="relative rounded-[2rem] border-2 border-gray-800 overflow-hidden aspect-square bg-gradient-to-br from-gray-900 to-black">
                <img src={profile} alt="Irfan" className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-110" />
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -right-6 top-16 bg-black/80 backdrop-blur-md border border-blue-500/30 rounded-2xl px-3 py-1.5 animate-float">
                <div className="text-xs text-blue-400 font-bold">React Expert</div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
      

      {/* Deep Expertise Section */}
      <section id="expertise" className="py-14 px-6 border-y border-gray-900 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 group p-6 rounded-2xl hover:bg-white/5 transition">
              <Layers className="text-blue-500" size={40} />
              <h3 className="text-xl font-bold text-white">System Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Designing scalable ERP modules (HRM, Accounts, Inventory) with robust RBAC and data integrity protocols.</p>
            </div>
            <div className="space-y-4 group p-6 rounded-2xl hover:bg-white/5 transition">
              <Zap className="text-blue-500" size={40} />
              <h3 className="text-xl font-bold text-white">Performance Engineering</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Optimizing real-time streaming for 500+ users with &lt;400ms latency and 35% faster page loads.</p>
            </div>
            <div className="space-y-4 group p-6 rounded-2xl hover:bg-white/5 transition">
              <ShieldCheck className="text-blue-500" size={40} />
              <h3 className="text-xl font-bold text-white">Fintech & Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Implementing automated billing, webhook listeners, and multi-factor authentication for secure payments.</p>
            </div>
          </div>
        </div>
      <Technology/>
      </section>
      

      {/* Technical Expertise (Badge System) */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block mb-4">
              Technical Expertise
            </h2>
            <p className="text-gray-400">Production-tested skills from 2+ years building scalable systems.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend Development */}
            <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 border-t-purple-500/50">
              <div className="flex items-center gap-4 mb-8">
                <Database className="text-purple-400" />
                <h4 className="text-xl font-bold text-white uppercase tracking-widest">Backend</h4>
              </div>
              <div className="space-y-6">
                {[
                  { name: "Python", level: "Expert" },
                  { name: "Django & DRF", level: "Expert" },
                  { name: "Node.js", level: "Expert" },
                  { name: "REST / GraphQL", level: "Advanced" },
                  { name: "PostgreSQL", level: "Advanced" }
                ].map((skill, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${
                      skill.level === 'Expert' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Development */}
            <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 border-t-blue-500/50">
              <div className="flex items-center gap-4 mb-8">
                <Layout className="text-blue-400" />
                <h4 className="text-xl font-bold text-white uppercase tracking-widest">Frontend</h4>
              </div>
              <div className="space-y-6">
                {[
                  { name: "React", level: "Expert" },
                  { name: "JavaScript", level: "Advanced" },
                  { name: "Tailwind CSS", level: "Advanced" },
                  { name: "Redux", level: "Intermediate" },
                  { name: "Responsive Design", level: "Advanced" }
                ].map((skill, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-[10px] font-bold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full uppercase tracking-tighter">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 border-t-cyan-500/50">
              <div className="flex items-center gap-4 mb-8">
                <Cloud className="text-cyan-400" />
                <h4 className="text-xl font-bold text-white uppercase tracking-widest">Cloud</h4>
              </div>
              <div className="space-y-6">
                {[
                  { name: "AWS (EC2, S3)", level: "Intermediate" },
                  { name: "Docker", level: "Intermediate" },
                  { name: "Nginx", level: "Intermediate" },
                  { name: "Vercel / Firebase", level: "Intermediate" },
                  { name: "GitHub Actions", level: "Intermediate" }
                ].map((skill, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-[10px] font-bold bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full uppercase tracking-tighter">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models (Project-Based Cards) */}
      <section id="services" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Full-Stack Development Card */}
          <div className="bg-[#111] border border-gray-800 rounded-[2.5rem] p-10 hover:border-blue-500/30 transition-all group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition">
              <Briefcase className="text-blue-500" size={36} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Full-Stack Development</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              End-to-end development for web applications, from database design to frontend implementation. 
              Backend-focused, but capable across the entire stack.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "React/Angular frontend development",
                "Database design and optimization",
                "User authentication and authorization",
                "Deployment and DevOps (AWS, Docker)",
                "Responsive, modern UI implementation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="text-green-500 shrink-0" size={18} /> {item}
                </li>
              ))}
            </ul>
            
          </div>

          {/* Freelance & Contract Card */}
          <div className="bg-[#111] border border-gray-800 rounded-[2.5rem] p-10 hover:border-purple-500/30 transition-all group">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition">
              <Clock className="text-purple-500" size={36} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Freelance & Contract</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Available for project-based work, long-term contracts, or part-time engagements. 
              Flexible with time zones and remote collaboration.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Fixed-price projects or hourly rates",
                "Long-term contract engagements",
                "Part-time availability for ongoing work",
                "Remote-first, async-friendly communication",
                "Flexible with time zones (India, UAE)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="text-green-500 shrink-0" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <Award className="text-blue-500" /> Career Milestones
          </h2>
          <div className="space-y-16">
            <div className="relative pl-12 border-l-2 border-gray-800 group">
              <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] top-0 group-hover:scale-125 transition shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Front-End Team Lead</h3>
                  <p className="text-blue-400 font-bold">ibadvisory (Remote,India)</p>
                </div>
                <span className="text-xs font-mono bg-white/5 px-3 py-1 rounded text-gray-500">Nov 2025 - Present</span>
              </div>
              <ul className="grid gap-3 text-gray-400">
                <li>• Architected Virtual Yoga Studio for 500+ users using Agora SDK.</li>
                <li>• Automated billing via Razorpay Subscription API and webhooks.</li>
                <li>• Deployed Msg91 MFA achieving 99% delivery success rate.</li>
              </ul>
            </div>

            <div className="relative pl-12 border-l-2 border-gray-800 group">
              <div className="absolute w-5 h-5 bg-gray-800 rounded-full -left-[11px] top-0 group-hover:bg-blue-600 transition"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                  <p className="text-blue-400 font-bold">Finisso Technologies (India)</p>
                </div>
                <span className="text-xs font-mono bg-white/5 px-3 py-1 rounded text-gray-500">2024 - 2025</span>
              </div>
              <ul className="grid gap-3 text-gray-400">
                <li>• Engineered ERP modules (HRM, Accounts, Inventory) using PostgreSQL.</li>
                <li>• Improved financial reporting speed by 30% via dashboards.</li>
                <li>• Collaborated with clients in UAE, Oman, and Bahrain on system design.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
<section id="projects" className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-lg">
          A selection of enterprise systems and freelance solutions I've architected for international clients.
        </p>
      </div>
      <div className="flex gap-2 text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
        <Zap size={14} /> Performance Focused
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Cafe Oregano - Freelance Highlight */}
      <div className="group relative bg-[#111] border border-gray-800 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-all">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
              <Layout size={24} />
            </div>
            <span className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-gray-500 uppercase tracking-tighter">
              Freelance Project
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Cafe Oregano</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Designed an interactive digital menu system that improved order efficiency by 40%. Optimized state management to achieve a 35% reduction in load times.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded">React</span>
            <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded">Context API</span>
            <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded">Responsive</span>
          </div>
          <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
            <div className="text-center">
              <div className="text-xl font-bold text-white">40%</div>
              <div className="text-[8px] text-gray-500 uppercase tracking-widest">Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">35%</div>
              <div className="text-[8px] text-gray-500 uppercase tracking-widest">Load Speed</div>
            </div>
          </div>
        </div>
      </div>

      {/* SevenSky Real Estate */}
      <div className="group relative bg-[#111] border border-gray-800 rounded-[2rem] overflow-hidden hover:border-purple-500/50 transition-all">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
              <MapPin size={24} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">SevenSky</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            MERN-stack marketplace supporting 1,000+ concurrent sessions with Google Maps API and real-time messaging.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 px-2 py-1 rounded">MERN Stack</span>
            <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 px-2 py-1 rounded">Socket.io</span>
          </div>
          <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
            <div className="text-center">
              <div className="text-xl font-bold text-white">1k+</div>
              <div className="text-[8px] text-gray-500 uppercase tracking-widest">Sessions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Zuus E-Commerce */}
      <div className="group relative bg-[#111] border border-gray-800 rounded-[2rem] overflow-hidden hover:border-cyan-500/50 transition-all">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
              <Briefcase size={24} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Zuus Platform</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Custom administrative dashboard for inventory and coupon management with secure JWT-based workflows.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">Node.js</span>
            <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">AWS</span>
            <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">JWT</span>
          </div>
          <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
            <div className="text-center">
              <div className="text-xl font-bold text-white">Secure</div>
              <div className="text-[8px] text-gray-500 uppercase tracking-widest">Workflows</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#0c0c0c]">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#111] to-black border border-gray-800 rounded-[3rem] p-12 md:p-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-12 max-w-md mx-auto">Available for enterprise roles in the UAE or high-end freelance consulting worldwide.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="https://wa.me/971551345244" target="_blank" rel="noreferrer" className="flex items-center gap-6 text-left p-6 bg-white/5 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all group">
              <MessageCircle className="text-green-500 group-hover:scale-110 transition" size={32} />
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">WhatsApp</p>
                <p className="text-white font-medium">+971 551345244</p>
                <span className="text-[10px] text-green-400 font-bold">CHAT NOW</span>
              </div>
            </a>
            <a href="mailto:irfan188iqbal@gmail.com" className="flex items-center gap-6 text-left p-6 bg-white/5 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group">
              <Mail className="text-blue-500 group-hover:scale-110 transition" size={32} />
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                <p className="text-white font-medium text-sm">irfan188iqbal@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-900">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={18} className="text-blue-500" />
              Dubai, UAE (Available to join immediately)
            </div>
            <div className="flex gap-8">
              <a href="https://github.com/irfan0374" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition transform hover:scale-110"><Github size={28} /></a>
              <a href="https://www.linkedin.com/in/muhammedirfaniqbal/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition transform hover:scale-110"><Linkedin size={28} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-600 text-xs tracking-widest uppercase">
        © 2026 MUHAMMED IRFAN — Full-Stack Specialist
      </footer>
    </div>
  );
};

export default Portfolio;