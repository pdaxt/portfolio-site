'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { whatWorks, whatFails, implementationPhases } from '@/data/playbook'

type Tab = 'works' | 'fails' | 'phases'

function PatternCard({ pattern, index }: { pattern: typeof whatWorks[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-[#1a1a24] transition-colors"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-lg ${pattern.type === 'works' ? 'text-emerald-400' : 'text-red-400'}`}>
              {pattern.type === 'works' ? '✓' : '✗'}
            </span>
            <h3 className="text-lg font-semibold text-white">{pattern.title}</h3>
          </div>
          <p className="text-slate-400 text-sm">{pattern.summary}</p>
        </div>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-[#1e1e2e]">
              <ul className="mt-4 space-y-2">
                {pattern.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <span className="text-slate-300 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
              {pattern.example && (
                <div className="mt-4 p-4 bg-[#0a0a0f] rounded-lg">
                  <p className="text-sm text-slate-400">
                    <span className="text-blue-400">Example: </span>
                    {pattern.example}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function PhaseTimeline() {
  return (
    <div className="space-y-6">
      {implementationPhases.map((phase, index) => (
        <motion.div
          key={phase.phase}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex gap-6"
        >
          {/* Phase number */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
              {phase.phase}
            </div>
            {index < implementationPhases.length - 1 && (
              <div className="w-px h-full bg-blue-500/20 ml-6 mt-2" />
            )}
          </div>

          {/* Phase content */}
          <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 flex-1">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">{phase.name}</h3>
              <span className="text-sm text-slate-500 bg-[#0a0a0f] px-3 py-1 rounded-full">
                {phase.duration}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-2">Goals</h4>
                <ul className="space-y-1">
                  {phase.goals.map((goal, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="text-emerald-400">●</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-2">Activities</h4>
                <ul className="space-y-1">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Playbook() {
  const [activeTab, setActiveTab] = useState<Tab>('works')

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: 'works', label: 'What Works', count: whatWorks.length },
    { id: 'fails', label: 'What Fails', count: whatFails.length },
    { id: 'phases', label: 'Implementation', count: implementationPhases.length },
  ]

  return (
    <section id="playbook" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise AI Playbook</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            Patterns from 12+ production deployments. What actually works, what consistently fails,
            and how to implement enterprise AI successfully.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-[#111118] text-slate-400 hover:text-white hover:bg-[#1a1a24]'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-xs opacity-60">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'works' && (
            <motion.div
              key="works"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {whatWorks.map((pattern, index) => (
                <PatternCard key={pattern.id} pattern={pattern} index={index} />
              ))}
            </motion.div>
          )}

          {activeTab === 'fails' && (
            <motion.div
              key="fails"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {whatFails.map((pattern, index) => (
                <PatternCard key={pattern.id} pattern={pattern} index={index} />
              ))}
            </motion.div>
          )}

          {activeTab === 'phases' && (
            <motion.div
              key="phases"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <PhaseTimeline />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
