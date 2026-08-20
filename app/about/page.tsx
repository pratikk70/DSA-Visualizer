'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Heart, Users, Target, Zap, GitBranch, Coffee } from 'lucide-react';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si';

export default function AboutPage() {
  const features = [
    {
      icon: Zap,
      title: "Real-time Visualizations",
      description: "Watch algorithms come to life with smooth animations and step-by-step execution that makes complex concepts intuitive."
    },
    {
      icon: Code,
      title: "In-depth Code Analysis",
      description: "Comprehensive code highlighting, complexity analysis, and educational explanations for every algorithm and data structure."
    },
    {
      icon: Users,
      title: "Student-Focused Design",
      description: "Built specifically for learners, from CS beginners to advanced students preparing for technical interviews."
    },
    {
      icon: Target,
      title: "Hands-on Learning",
      description: "Interactive approach to understanding algorithms through direct manipulation and real-time feedback."
    }
  ];

  const stats = [
    { number: "3+", label: "Data Structures" },
    { number: "1", label: "Tree Type" },
    { number: "3+", label: "Sorting Algorithms" },
    { number: "100%", label: "Interactive & Free" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-sky-400 to-yellow-400 bg-clip-text text-transparent">
                DSA Visualizer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Making data structures and algorithms accessible through interactive visualizations. From basic arrays to complex tree structures, learn through hands-on exploration.
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-100 mb-4">What Makes Us Different?</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Combining modern web technology with proven educational principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-sky-500/10 to-yellow-500/10 border border-sky-500/20 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-slate-100 text-center mb-12">Project Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Built with Modern Tech Stack</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leveraging cutting-edge web technologies for smooth, responsive, and accessible learning experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: "Next.js 14", 
                description: "React Framework", 
                logo: <SiNextdotjs className="w-8 h-8 text-white" />
              },
              { 
                name: "TypeScript", 
                description: "Type Safety", 
                logo: <SiTypescript className="w-8 h-8 text-[#3178C6]" />
              },
              { 
                name: "Tailwind CSS", 
                description: "Modern Styling", 
                logo: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />
              },
              { 
                name: "Framer Motion", 
                description: "Smooth Animations", 
                logo: <SiFramer className="w-8 h-8 text-[#BB4B96]" />
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  {tech.logo}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{tech.name}</h3>
                <p className="text-slate-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   

     

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join the growing community of learners mastering data structures and algorithms 
              through interactive, visual experiences.
            </p>
            <Link
              href="/array"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-sky-500/25"
            >
              Start Learning Now
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 