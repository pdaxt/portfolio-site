'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { caseStudies, sectorColors, type CaseStudy } from '@/data/caseStudies'

function CaseStudyModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#111118] border border-[#1e1e2e] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${sectorColors[study.sector]}`}>
                {study.sector}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">{study.title}</h2>
              <p className="text-slate-400 mt-2">{study.client}</p>
              <div className="flex gap-4 mt-3 text-sm text-slate-500">
                <span>{study.duration}</span>
                <span>|</span>
                <span>{study.teamSize} engineers</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Problem */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-red-400">●</span> The Problem
            </h3>
            <p className="text-slate-300 leading-relaxed">{study.problem}</p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-green-400">●</span> The Solution
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">{study.solution}</p>

            {/* Architecture */}
            <div className="bg-[#0a0a0f] rounded-lg p-4 font-mono text-sm">
              {study.architecture.map((line, i) => (
                <div key={i} className="text-slate-400 py-1">
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Key Decisions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">●</span> Key Technical Decisions
            </h3>
            <div className="space-y-4">
              {study.keyDecisions.map((decision, i) => (
                <div key={i} className="bg-[#0a0a0f] rounded-lg p-4">
                  <p className="text-blue-400 font-medium mb-2">{decision.question}</p>
                  <p className="text-slate-300">{decision.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-emerald-400">●</span> Results
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1e1e2e]">
                    <th className="text-left py-3 text-slate-400 font-medium">Metric</th>
                    <th className="text-left py-3 text-slate-400 font-medium">Before</th>
                    <th className="text-left py-3 text-slate-400 font-medium">After</th>
                    <th className="text-left py-3 text-slate-400 font-medium">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {study.results.map((result, i) => (
                    <tr key={i} className="border-b border-[#1e1e2e]/50">
                      <td className="py-3 text-slate-300">{result.metric}</td>
                      <td className="py-3 text-slate-500">{result.before}</td>
                      <td className="py-3 text-emerald-400 font-medium">{result.after}</td>
                      <td className="py-3 text-emerald-400">{result.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Lessons */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-amber-400">●</span> Lessons Learned
            </h3>
            <ul className="space-y-2">
              {study.lessons.map((lesson, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">→</span>
                  <span className="text-slate-300">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CaseStudyCard({ study, onClick }: { study: CaseStudy; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 cursor-pointer hover:border-blue-500/50 transition-all"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${sectorColors[study.sector]}`}>
          {study.sector}
        </span>
        <div className="text-right text-sm text-slate-500">
          <div>{study.duration}</div>
          <div>{study.teamSize} engineers</div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{study.problem}</p>

      {/* Top 3 results */}
      <div className="space-y-2 mb-4">
        {study.results.slice(0, 3).map((result, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-slate-500">{result.metric}</span>
            <span className="text-emerald-400 font-medium">{result.improvement}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center text-blue-400 text-sm font-medium">
        View Details
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)

  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Projects</h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Real production systems with measurable outcomes. Click any card for the full story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CaseStudyCard study={study} onClick={() => setSelectedStudy(study)} />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedStudy && (
        <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
      )}
    </section>
  )
}
