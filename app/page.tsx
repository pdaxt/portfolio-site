import Hero from '@/components/Hero'
import About from '@/components/About'
import CaseStudies from '@/components/CaseStudies'
import Playbook from '@/components/Playbook'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-[#1e1e2e]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-white font-bold text-lg">
            Pranjal Gupta
          </a>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#case-studies" className="text-slate-400 hover:text-white transition-colors text-sm">
              Projects
            </a>
            <a href="#playbook" className="text-slate-400 hover:text-white transition-colors text-sm">
              Playbook
            </a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <CaseStudies />
      <Playbook />
      <Contact />
    </main>
  )
}
