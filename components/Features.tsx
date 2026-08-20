'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
// Removed RotateCcw since Queues are gone
import { ArrowRight, Database, GitBranch, Layers, ArrowUpDown, Binary, Coffee, Heart, TreePine } from 'lucide-react';

export default function Features() {
  const dataStructures = [
    {
      title: "Arrays",
      description: "Visualize array operations and understand indexing, insertion, deletion, and searching.",
      icon: Database,
      href: "/array",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Linked Lists",
      description: "Explore node connections and pointer manipulation in singly linked lists.",
      icon: GitBranch,
      href: "/linked-list",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Stacks",
      description: "Master LIFO operations with push, pop, and peek visualizations.",
      icon: Layers,
      href: "/stack",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const sortingAlgorithms = [
    {
      title: "Bubble Sort",
      description: "Watch adjacent elements bubble to their correct positions.",
      href: "/sorting/bubble-sort",
      complexity: "O(n²)"
    },
    {
      title: "Selection Sort",
      description: "See how the minimum element gets selected in each pass.",
      href: "/sorting/selection-sort",
      complexity: "O(n²)"
    },
    {
      title: "Insertion Sort",
      description: "Observe elements being inserted into their sorted positions.",
      href: "/sorting/insertion-sort",
      complexity: "O(n²)"
    },
  ];

  const treeStructures = [
    {
      title: "Binary Search Tree",
      description: "Interactive tree operations with insert, search, and delete.",
      href: "/binary-tree",
      complexity: "O(log n)"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Data Structures Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Interactive Learning Platform
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore data structures and algorithms through hands-on visualizations with comprehensive code analysis.
          </p>
        </motion.div>

        {/* Data Structures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {dataStructures.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={item.href}
                  className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/50 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors flex-grow">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-end mt-4">
                      <ArrowRight 
                        size={16} 
                        className="text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" 
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Sorting Algorithms Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <ArrowUpDown className="text-sky-400" size={32} />
            <h3 className="text-3xl md:text-4xl font-bold text-slate-100">
              Sorting Algorithms
            </h3>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Watch sorting algorithms in action with step-by-step comparisons and swaps.
          </p>
        </motion.div>

        {/* Sorting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sortingAlgorithms.map((algorithm, index) => (
            <motion.div
              key={algorithm.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
            >
              <Link
                href={algorithm.href}
                className="group block p-6 bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-2xl backdrop-blur-sm hover:from-slate-800/70 hover:to-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                    {algorithm.title}
                  </h4>
                  <span className="text-xs font-mono bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                    {algorithm.complexity}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {algorithm.description}
                </p>
                <div className="flex items-center justify-end mt-4">
                  <ArrowRight 
                    size={14} 
                    className="text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" 
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Tree Structures Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <TreePine className="text-green-400" size={32} />
            <h3 className="text-3xl md:text-4xl font-bold text-slate-100">
              Tree Structures
            </h3>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore hierarchical data structures with our foundational Binary Search Tree.
          </p>
        </motion.div>

        {/* Trees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 justify-center">
          {treeStructures.map((tree, index) => (
            <motion.div
              key={tree.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              className="md:col-start-2"
            >
              <Link
                href={tree.href}
                className="group block p-6 bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-slate-800/70 hover:to-slate-800/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold transition-colors text-slate-100 group-hover:text-green-400">
                    {tree.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                      {tree.complexity}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed transition-colors text-slate-400 group-hover:text-slate-300">
                  {tree.description}
                </p>
                <div className="flex items-center justify-end mt-4">
                  <ArrowRight 
                    size={14} 
                    className="transition-all text-slate-400 group-hover:text-green-400 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trees Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link
            href="/trees"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <TreePine size={18} />
            Explore Tree Details
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-sky-500/10 to-yellow-500/10 border border-sky-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Ready to Understand Data Structures?
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Start with the fundamentals and work your way up to complex algorithms. 
              Each visualization includes detailed explanations and time complexity analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/array"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start with Arrays
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/about"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600 hover:border-slate-500 rounded-xl font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
  
      </div>
    </section>
  );
}