'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d12]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">The Short Version</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Philosophy */}
            <div className="space-y-6">
              <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">My Approach</h3>
                <p className="text-slate-300 leading-relaxed">
                  80% of enterprise AI projects fail. Not because of the models—because of everything around them.
                  I focus on the boring stuff that makes AI actually work: infrastructure, evaluation, change management.
                </p>
                <p className="text-slate-400 mt-4 text-sm italic">
                  "The difference between a $1M write-off and a system that transforms a business is rarely the AI itself."
                </p>
              </div>

              <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">What I Actually Do</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">1.</span>
                    <span>Map the workflow before touching a model</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">2.</span>
                    <span>Build boring infrastructure first (rate limiting, caching, fallbacks)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">3.</span>
                    <span>Target 85% automation with human review on the rest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">4.</span>
                    <span>Invest in evaluation before optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Track Record */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Track Record</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-slate-300">Documented Savings</span>
                    <span className="text-emerald-400 font-bold">$7.4M+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-slate-300">Avg Efficiency Gain</span>
                    <span className="text-emerald-400 font-bold">80%+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-slate-300">Security Incidents</span>
                    <span className="text-emerald-400 font-bold">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Compliance Audits Passed</span>
                    <span className="text-emerald-400 font-bold">4 (incl. APRA)</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Depth</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Multi-Agent Systems',
                    'RAG at Scale',
                    'Claude & GPT-4',
                    'LLM Security',
                    'Production ML Pipelines',
                    'Python',
                    'TypeScript',
                    'AWS/GCP/Azure',
                    'Kubernetes',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#1a1a24] text-slate-300 text-sm rounded-full border border-[#262636]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Currently</h3>
                <p className="text-slate-300">
                  Founder at <span className="text-blue-400">DataXLR8</span> — helping enterprises deploy AI that actually works.
                </p>
                <p className="text-slate-400 mt-3 text-sm">
                  Also writing about AI without the hype at{' '}
                  <a href="https://bskiller.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    BSKiller
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
