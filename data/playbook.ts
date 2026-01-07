export interface PlaybookPattern {
  id: string
  title: string
  type: 'works' | 'fails'
  summary: string
  details: string[]
  example?: string
}

export const whatWorks: PlaybookPattern[] = [
  {
    id: 'workflow-first',
    title: 'Start with Workflow, Not Model',
    type: 'works',
    summary: 'Successful projects start by mapping the existing workflow before selecting any AI technology.',
    details: [
      'Map the current process end-to-end before touching AI',
      'Identify bottlenecks that are actually worth automating',
      'The best AI implementation is often the smallest intervention',
      'Bad process + AI = faster bad process'
    ],
    example: 'Banking document review: Started by shadowing analysts for 2 weeks before writing a single line of code.'
  },
  {
    id: 'build-85',
    title: 'Build for 85%, Not 100%',
    type: 'works',
    summary: 'The last 15% of automation costs more than the first 85%. Design for human escalation from day one.',
    details: [
      '85% automation with human review beats 95% automation with failures',
      'Design escalation paths before edge cases appear',
      'The goal is augmentation, not replacement',
      'Users trust systems that know their limits'
    ]
  },
  {
    id: 'prompts-as-code',
    title: 'Treat Prompts as Production Code',
    type: 'works',
    summary: 'Version control, testing, and rollback capabilities for prompts. They are the new source code.',
    details: [
      'Store prompts in version control with meaningful commit messages',
      'Write tests for prompt outputs, not just code',
      'Build rollback capability for prompt changes',
      'Track prompt performance metrics over time'
    ]
  },
  {
    id: 'boring-infrastructure',
    title: 'Build Boring Infrastructure First',
    type: 'works',
    summary: 'Rate limiting, caching, error handling, and fallbacks before any fancy AI features.',
    details: [
      'Rate limiting saves money and prevents outages',
      'Caching identical requests reduces costs by 40-60%',
      'Fallback to simpler models when main model fails',
      'Error handling that gracefully degrades'
    ]
  },
  {
    id: 'model-abstraction',
    title: 'Design for Model Changes',
    type: 'works',
    summary: 'The model you deploy today won\'t be the model you run in 6 months. Abstract the model layer.',
    details: [
      'Config-based model selection, not hardcoded',
      'Abstract prompt templates from model-specific syntax',
      'Build evaluation suite that works across models',
      'Plan for 2-3 model migrations per year'
    ]
  },
  {
    id: 'evaluation-infrastructure',
    title: 'Invest in Evaluation Infrastructure',
    type: 'works',
    summary: 'You can\'t improve what you can\'t measure. Build evaluation before optimization.',
    details: [
      'Golden dataset: 100+ examples with known correct answers',
      'Automated metrics: latency, cost, quality scores',
      'Human evaluation: regular review of edge cases',
      'Production monitoring: catch degradation early'
    ]
  }
]

export const whatFails: PlaybookPattern[] = [
  {
    id: 'just-add-ai',
    title: 'The "Just Add AI" Approach',
    type: 'fails',
    summary: 'Dropping AI into existing processes without redesign leads to 80% of project failures.',
    details: [
      'AI isn\'t a feature you bolt on—it changes workflows',
      'Existing processes often have implicit human judgment that\'s hard to replicate',
      'Users reject AI that makes their jobs harder',
      'Technical success ≠ business success'
    ],
    example: 'Customer support chatbot that increased ticket volume because it couldn\'t actually resolve issues.'
  },
  {
    id: 'fine-tuning-first',
    title: 'Fine-Tuning as First Resort',
    type: 'fails',
    summary: 'Fine-tuning is expensive, slow, and often unnecessary. Try everything else first.',
    details: [
      'Better prompts solve 80% of quality issues',
      'RAG with good retrieval beats fine-tuning for most tasks',
      'Fine-tuning locks you to a specific model version',
      'Data quality issues persist through fine-tuning'
    ]
  },
  {
    id: 'data-problem',
    title: 'Ignoring the Data Problem',
    type: 'fails',
    summary: 'Most AI projects fail because of data, not models. Budget 30-50% for data work.',
    details: [
      'Inconsistent formatting breaks extraction pipelines',
      'Missing fields cascade into wrong conclusions',
      'Duplicate records inflate metrics and confuse models',
      'Stale data leads to outdated recommendations'
    ]
  },
  {
    id: 'change-management',
    title: 'Underestimating Change Management',
    type: 'fails',
    summary: 'The technology works but nobody uses it. Budget 30% for adoption.',
    details: [
      'Users fear replacement, not augmentation',
      'Training must happen in context, not classrooms',
      'Champions within teams drive adoption more than mandates',
      'Measure adoption, not just deployment'
    ]
  },
  {
    id: 'monolithic-prompt',
    title: 'The Monolithic Prompt',
    type: 'fails',
    summary: 'One giant prompt that tries to do everything. It degrades with length and can\'t be tested.',
    details: [
      'Prompt quality degrades after ~2000 tokens of instructions',
      'Can\'t A/B test parts of a monolithic prompt',
      'Debugging is nearly impossible',
      'Different tasks need different temperature settings'
    ]
  },
  {
    id: 'security-afterthought',
    title: 'Security as Afterthought',
    type: 'fails',
    summary: 'Prompt injection, data leakage, and model misuse are real threats. Build security in.',
    details: [
      'Prompt injection can bypass instructions',
      'Model outputs can leak training data',
      'Rate limiting prevents abuse and cost overruns',
      'Audit trails are required for regulated industries'
    ]
  }
]

export const implementationPhases = [
  {
    phase: 1,
    name: 'Discovery',
    duration: 'Weeks 1-4',
    goals: ['Understand current workflow', 'Identify automation opportunities', 'Define success metrics'],
    activities: ['Stakeholder interviews', 'Process mapping', 'Data assessment', 'Risk analysis']
  },
  {
    phase: 2,
    name: 'Foundation',
    duration: 'Weeks 5-8',
    goals: ['Technical architecture', 'Infrastructure setup', 'Evaluation framework'],
    activities: ['Model selection', 'Security design', 'Monitoring setup', 'Golden dataset creation']
  },
  {
    phase: 3,
    name: 'Build',
    duration: 'Weeks 9-16',
    goals: ['Core functionality', 'Integration points', 'Quality gates'],
    activities: ['Sprint development', 'Continuous testing', 'User feedback loops', 'Documentation']
  },
  {
    phase: 4,
    name: 'Pilot',
    duration: 'Weeks 17-20',
    goals: ['Real-world validation', 'User adoption', 'Performance tuning'],
    activities: ['Limited rollout', 'Metrics collection', 'Training sessions', 'Iteration']
  },
  {
    phase: 5,
    name: 'Scale',
    duration: 'Weeks 21+',
    goals: ['Full deployment', 'Optimization', 'Handoff'],
    activities: ['Gradual rollout', 'Load testing', 'Knowledge transfer', 'Support setup']
  }
]
