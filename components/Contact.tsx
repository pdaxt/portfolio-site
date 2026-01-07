'use client'

import { motion } from 'framer-motion'

const engagementModels = [
  {
    title: 'Advisory',
    duration: '2-4 weeks',
    description: 'Architecture review, technology selection, and strategic guidance.',
    includes: ['Architecture review', 'Technology selection', 'Team capability assessment', 'Implementation roadmap'],
  },
  {
    title: 'Implementation',
    duration: '3-12 months',
    description: 'End-to-end system design, build, and production deployment.',
    includes: ['System design & build', 'Team augmentation', 'Production deployment', 'Knowledge transfer'],
  },
  {
    title: 'Rescue',
    duration: '1-3 months',
    description: 'Failing AI project assessment, course correction, and recovery.',
    includes: ['Project assessment', 'Root cause analysis', 'Re-architecture', 'Team coaching'],
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Engagement Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engagement Models</h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Flexible engagement options based on your needs and timeline.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{model.title}</h3>
                  <span className="text-xs text-slate-500 bg-[#0a0a0f] px-3 py-1 rounded-full">
                    {model.duration}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.includes.map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something That Ships
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you're starting a new AI initiative or rescuing a struggling project,
            I'd love to hear about what you're building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:pranjal.gupta@dataxlr8.ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              pranjal.gupta@dataxlr8.ai
            </a>

            <a
              href="https://www.linkedin.com/in/pranjalxlr8/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111118] hover:bg-[#1a1a24] text-white font-semibold rounded-lg border border-[#1e1e2e] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm">
              Also writing about AI without the hype at{' '}
              <a href="https://bskiller.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                BSKiller
              </a>
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-500 text-sm">
          <p>© 2026 Pranjal Gupta. Building production AI systems that actually ship.</p>
        </div>
      </div>
    </section>
  )
}
