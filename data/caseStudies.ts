export interface CaseStudy {
  id: string
  title: string
  client: string
  sector: 'Government' | 'Healthcare' | 'Banking' | 'SaaS' | 'EdTech' | 'Research'
  duration: string
  teamSize: number
  problem: string
  solution: string
  architecture: string[]
  keyDecisions: { question: string; answer: string }[]
  results: { metric: string; before: string; after: string; improvement: string }[]
  lessons: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'document-intelligence',
    title: 'Multi-Agent Document Intelligence System',
    client: 'Major Australian Government Agency',
    sector: 'Government',
    duration: '8 months',
    teamSize: 12,
    problem: 'The agency processed 50,000+ complex regulatory documents annually. Manual review took 45 minutes per document with 12% error rate. Backlog was growing 15% quarterly.',
    solution: 'Built a multi-agent AI system with specialized agents for document classification, entity extraction, compliance checking, anomaly detection, and human-in-the-loop escalation.',
    architecture: [
      'Orchestration Layer',
      'Classifier Agent → Extractor Agent → Compliance Agent → Anomaly Agent → Escalation Agent',
      'Document Store (RAG)',
      'Audit Trail & Explainability Layer'
    ],
    keyDecisions: [
      { question: 'Why multi-agent over monolithic?', answer: 'Each document type required specialized reasoning. Single large prompt couldn\'t handle the variance.' },
      { question: 'Why RAG over fine-tuning?', answer: 'Regulatory frameworks change quarterly. RAG allowed updates without retraining.' },
      { question: 'Why human-in-the-loop?', answer: '100% automation wasn\'t the goal. 85% automation with human review on edge cases was.' }
    ],
    results: [
      { metric: 'Processing time/doc', before: '45 min', after: '8 min', improvement: '82% reduction' },
      { metric: 'Error rate', before: '12%', after: '2.3%', improvement: '81% reduction' },
      { metric: 'Backlog', before: 'Growing 15%/qtr', after: 'Eliminated', improvement: '100%' },
      { metric: 'Annual savings', before: '-', after: '$3.2M', improvement: '-' }
    ],
    lessons: [
      'Government clients need explainability at every step. Built audit trails from day 1.',
      'Don\'t underestimate change management. Spent 30% of project on training and adoption.',
      'Regulatory compliance isn\'t optional. Every model decision needed to be defensible.'
    ]
  },
  {
    id: 'clinical-triage',
    title: 'Real-Time Clinical Triage System',
    client: 'Healthcare Technology Company',
    sector: 'Healthcare',
    duration: '6 months',
    teamSize: 8,
    problem: 'Emergency departments were overwhelmed with non-urgent cases. Nurses spent 40% of time on initial triage that could be automated. Wait times averaged 4.2 hours.',
    solution: 'Built a 4-layer clinical triage system: symptom classification, clinical rules engine, LLM reasoning, and safety envelope that never downgrades urgency without human review.',
    architecture: [
      'Patient Input → Symptom Extraction',
      'Clinical Rules (200+ evidence-based)',
      'LLM Reasoning (Claude)',
      'Safety Envelope (never downgrades)',
      'Nurse Review (if needed)'
    ],
    keyDecisions: [
      { question: 'Why 4 layers?', answer: 'Healthcare requires defense-in-depth. LLM alone isn\'t safe enough.' },
      { question: 'Why Claude over GPT?', answer: 'Better at following complex instructions. Healthcare prompts are long.' },
      { question: 'Why safety envelope?', answer: 'Regulatory requirement. System can suggest upgrades, never downgrades.' }
    ],
    results: [
      { metric: 'Nurse triage time', before: '12 min/patient', after: '4 min/patient', improvement: '67% reduction' },
      { metric: 'Wait times', before: '4.2 hours', after: '2.8 hours', improvement: '33% reduction' },
      { metric: 'Missed critical cases', before: '3.2%', after: '0.4%', improvement: '87% reduction' },
      { metric: 'Patient satisfaction', before: '62%', after: '84%', improvement: '+22 points' }
    ],
    lessons: [
      'Healthcare AI must fail safe, not fail fast. Different mindset from typical software.',
      'Nurses are your users, not patients. Design for their workflow.',
      'Explainability isn\'t a feature, it\'s a requirement. Every recommendation needs reasoning.'
    ]
  },
  {
    id: 'vendor-discovery',
    title: 'AI-Powered Vendor Discovery Platform',
    client: 'Enterprise SaaS Company',
    sector: 'SaaS',
    duration: '10 months',
    teamSize: 15,
    problem: 'Enterprise procurement teams spent 6-8 weeks researching vendors for any new software purchase. Information was scattered across G2, Gartner, vendor websites, Reddit, and analyst reports.',
    solution: 'Built a 7-agent discovery system: Query Analyzer, Web Scraper, Review Synthesizer, Pricing Analyst, Compliance Checker, Competitor Mapper, and Report Generator.',
    architecture: [
      'Query Analyzer → Web Scraper (50+ sources)',
      'Review Synthesizer → Pricing Analyst',
      'Compliance Checker → Competitor Mapper',
      'Report Generator (executive-ready)'
    ],
    keyDecisions: [
      { question: 'Why 7 agents?', answer: 'Each data source requires different extraction logic. Specialization beats generalization.' },
      { question: 'Why not just RAG?', answer: 'This is active research, not retrieval. Agents need to search, not just retrieve.' },
      { question: 'Why multi-tenant?', answer: 'Each enterprise client has different compliance requirements.' }
    ],
    results: [
      { metric: 'Research time', before: '6-8 weeks', after: '3-5 days', improvement: '90% reduction' },
      { metric: 'Vendors evaluated', before: '5-10', after: '50+', improvement: '5x coverage' },
      { metric: 'Cost per evaluation', before: '$15K', after: '$500', improvement: '97% reduction' },
      { metric: 'Procurement cycle', before: '4 months', after: '6 weeks', improvement: '63% reduction' }
    ],
    lessons: [
      'Data freshness matters more than model sophistication. Stale data = wrong recommendations.',
      'Enterprise clients want control. Built extensive customization for weighting criteria.',
      'Integration is the product. Slack, Jira, Salesforce integrations drove adoption.'
    ]
  },
  {
    id: 'multi-tenant-platform',
    title: 'Secure Multi-Tenant AI Platform',
    client: 'Major Australian Bank',
    sector: 'Banking',
    duration: '12 months',
    teamSize: 25,
    problem: 'The bank wanted to deploy AI across 15 business units but couldn\'t risk data leakage between units. Existing solutions couldn\'t guarantee isolation while sharing infrastructure.',
    solution: 'Built a capability-based security architecture with zero-knowledge design, cryptographic tenant isolation, and immutable audit trails.',
    architecture: [
      'Request with Capability Token',
      'Capability Validator (field-level access)',
      'Tenant Isolation Layer (cryptographic)',
      'Model Serving Layer (shared infra, isolated data)',
      'Audit & Compliance (immutable)'
    ],
    keyDecisions: [
      { question: 'Why capability-based?', answer: 'Role-based access is too coarse for AI. Need field-level control.' },
      { question: 'Why zero-knowledge?', answer: 'Bank\'s risk team wouldn\'t approve unless platform couldn\'t read data.' },
      { question: 'Why immutable audit?', answer: 'Regulatory requirement for financial services (APRA).' }
    ],
    results: [
      { metric: 'Business units onboarded', before: '0', after: '15', improvement: 'Full coverage' },
      { metric: 'Security incidents', before: '-', after: '0', improvement: 'Zero incidents' },
      { metric: 'Compliance audits passed', before: '-', after: '4 (incl. APRA)', improvement: '100%' },
      { metric: 'Cost savings vs separate', before: '-', after: '$4.2M/year', improvement: '-' }
    ],
    lessons: [
      'Security architecture must be designed in, not bolted on. Started with threat model.',
      'Bank security teams are your best friends. Involve them early, often.',
      'Compliance is a feature, not a bug. It\'s what lets you deploy in regulated industries.'
    ]
  },
  {
    id: 'content-factory',
    title: 'Educational Content Generation Factory',
    client: 'EdTech Startup',
    sector: 'EdTech',
    duration: '4 months',
    teamSize: 5,
    problem: 'Creating educational video content cost $5,000-10,000 per video. Startup needed 1,000+ videos across subjects. Traditional production couldn\'t scale.',
    solution: 'Built an automated content factory with proof chains: script generation, fact verification, TTS, visual generation, animation sync, and 7-gate QA pipeline.',
    architecture: [
      'Subject Expert Input → Script Generation',
      'Fact Verification → TTS Generation → Audio QA',
      'Visual Generation → Animation Sync → Video QA',
      'Proof Chain (immutable record)'
    ],
    keyDecisions: [
      { question: 'Why proof chains?', answer: 'Educational content must be defensible. Can\'t have wrong facts teaching students.' },
      { question: 'Why 7-gate QA?', answer: 'Each gate catches different error types. Early gates catch more, save compute.' },
      { question: 'Why human-in-the-loop?', answer: '100% automation produces 95% quality. That 5% matters in education.' }
    ],
    results: [
      { metric: 'Cost per video', before: '$5,000-10,000', after: '$200-500', improvement: '95% reduction' },
      { metric: 'Production time', before: '2-4 weeks', after: '2-3 days', improvement: '90% reduction' },
      { metric: 'Factual accuracy', before: '97%', after: '99.7%', improvement: '+2.7 points' },
      { metric: 'Content volume', before: '50/year', after: '1,000+/year', improvement: '20x increase' }
    ],
    lessons: [
      'Quality gates are investments, not costs. They save rework downstream.',
      'Subject matter experts can\'t be replaced. AI assists, humans verify.',
      'Audit trails enable iteration. Can\'t improve what you can\'t measure.'
    ]
  },
  {
    id: 'math-reasoning',
    title: 'Mathematical Reasoning System',
    client: 'Research Project (Competition Entry)',
    sector: 'Research',
    duration: 'Ongoing',
    teamSize: 3,
    problem: 'Advanced mathematical problem-solving requires multi-step reasoning that single LLM calls can\'t reliably perform. Competition-level math problems have <5% solve rates with standard approaches.',
    solution: 'Built a multi-agent reasoning system: Problem Analyzer, Solution Strategist, Calculator Agent with verification, Proof Verifier, and Synthesis Agent.',
    architecture: [
      'Problem Analyzer → Solution Strategist',
      'Calculator Agent (SymPy verification)',
      'Proof Verifier (logical consistency)',
      'Synthesis Agent (final answer)',
      'MCTS for solution exploration'
    ],
    keyDecisions: [
      { question: 'Why multi-agent?', answer: 'Different reasoning modes need different specializations.' },
      { question: 'Why MCTS?', answer: 'Hard problems require search, not just inference.' },
      { question: 'Why symbolic integration?', answer: 'Neural and symbolic approaches are complementary. Verification is cheaper than generation.' }
    ],
    results: [
      { metric: 'MATH dataset', before: '34%', after: '67%', improvement: '+33 points' },
      { metric: 'AMC problems', before: '45%', after: '78%', improvement: '+33 points' },
      { metric: 'Olympiad-level', before: '12%', after: '38%', improvement: '+26 points' },
      { metric: 'Competition prize', before: '-', after: 'In progress', improvement: '$2.2M target' }
    ],
    lessons: [
      'Verification is cheaper than generation. Check more, generate less.',
      'Symbolic and neural approaches are complementary. Use both.',
      'Hard problems require search, not just inference. MCTS matters.'
    ]
  }
]

export const sectorColors: Record<string, string> = {
  Government: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Healthcare: 'bg-red-500/20 text-red-400 border-red-500/30',
  Banking: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  SaaS: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  EdTech: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Research: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
}
