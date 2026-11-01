export const GH = 'https://github.com/AshokSingodia-Codes'

export const profile = {
  name: 'Ashok Singodia',
  role: 'AI / ML Engineer (Internship)',
  summary:
    'AI/ML engineering student (B.Tech Mathematics and Computing) who builds and measures LLM systems: a hybrid RAG financial assistant over SEC filings, a QLoRA fine-tuned Text-to-SQL model with guardrails tested against held-out red-team attacks, a LangGraph multi-agent research assistant with Redis checkpointing and budget controls, and a calibrated fraud-scoring API. Interned at JSW Steel building a computer-vision OCR web app.',
  email: 'ashokbadu01@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashok-singodia-3821a7292/',
  github: GH,
}

export const nav = [
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
] as const

export const experience = [
  {
    org: 'JSW Steel Ltd., Dolvi Works',
    title: 'IT Department Intern',
    period: '18 May 2026 to 18 Jun 2026',
    points: [
      'Built STEELSCAN, a full-stack web app that reads circular coil-ID codes from steel coils using OpenCV preprocessing (deskew, circular unwarping, contrast enhancement) with PaddleOCR and EasyOCR.',
      'FastAPI + SQLAlchemy REST APIs with OAuth2/JWT, bcrypt and RBAC; per-scan audit log (timestamp, operator, confidence, source), CSV bulk import/export, and health and metrics endpoints.',
      'React 18 + Tailwind kiosk dashboard with live camera, image upload and manual-override modes; deployed on Vercel and Render.',
    ],
  },
]

export const education = {
  school: 'Central University of Karnataka, Kalaburagi',
  degree: 'B.Tech, Mathematics and Computing',
  period: '2023 to Present',
  cgpa: '7.88',
  courses: 'Machine Learning, Statistics, Advanced Scientific Computing and Probability',
}

export const certifications = [
  'AI and Data Analytics Virtual Internship (Green Skills): AICTE, Shell India Markets, Edunet Foundation',
  'AI-ML with Data Science Intern: completed a 2-month AIML with Data Science virtual internship (specialization: Data Science)',
  'NPTEL: Deep Learning; Essential Mathematics for Machine Learning; Introduction to Large Language Models (LLMs); Statistical Foundation for Big Data Analysis; Introduction to Software Engineering',
]

export const skills: Record<string, string[]> = {
  'LLM and GenAI': [
    'QLoRA Fine-Tuning (PEFT, bitsandbytes)',
    'GGUF Quantization (llama.cpp)',
    'RAG',
    'Hybrid Search (Vector + Keyword, Reciprocal Rank Fusion)',
    'Cross-Encoder Reranking',
    'LangGraph',
    'Multi-Agent Systems',
    'SQL Guardrails (sqlglot AST Validation)',
    'LLM Evaluation (Execution Accuracy, Precision@5)',
  ],
  'ML and Modeling': [
    'LightGBM',
    'scikit-learn',
    'PyTorch',
    'Hugging Face Transformers',
    'Probability Calibration',
    'SHAP',
    'Imbalanced Classification',
    'Time-Based Validation',
    'ROC-AUC',
    'PR-AUC',
  ],
  Programming: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'MATLAB'],
  'Backend and Data': [
    'FastAPI',
    'REST APIs',
    'Server-Sent Events',
    'JWT/OAuth2',
    'PostgreSQL',
    'Redis',
    'Neo4j',
    'SQLAlchemy',
    'NumPy',
    'Pandas',
    'SciPy',
  ],
  'MLOps and Deployment': [
    'Docker',
    'Docker Compose',
    'GitHub Actions (CI/CD)',
    'pytest',
    'Prometheus',
    'Grafana',
    'Git',
    'Render',
    'Vercel',
  ],
  'Computer Vision and Frontend': [
    'OpenCV',
    'PaddleOCR',
    'EasyOCR',
    'React',
    'Tailwind CSS',
  ],
}

export type Category = 'LLM' | 'ML'

export interface Project {
  repo: string
  title: string
  category: Category
  tagline: string
  features: string[]
  stack: string[]
  demo?: string
  model?: string
}

export const categories: Array<'All' | Category> = ['All', 'LLM', 'ML']

export const projects: Project[] = [
  {
    repo: 'FinAdvisor-Voice',
    title: 'FinAdvisor-X',
    category: 'LLM',
    demo: 'https://fin-advisor-voice.vercel.app/',
    tagline: 'Agentic Hybrid RAG Financial Intelligence Platform',
    features: [
      'Hybrid Retrieval: Neo4j vector + Lucene keyword search fused with RRF (k=60) and FlashRank reranking; Precision@5 up from 0.39 to 0.46 on 34 gold queries.',
      'Agentic Pipeline: LangGraph workflow (router, decomposition, hybrid retriever, math solver, live market data) for grounded Q&A over SEC 10-K filings and finance books.',
      'Accuracy Control: Python calculators (DCF, WACC, NPV, CAGR, SIP, Indian tax) replace LLM arithmetic; 0% hallucination on 10 out-of-corpus trap questions.',
      'Security: JWT + email OTP, bcrypt and pytest-tested per-user data isolation.',
      'Deployment: Groq -> GitHub Models -> OpenRouter -> Gemini fallback; React 19 + TypeScript on Vercel, FastAPI on Render, CI with GitHub Actions.',
      'Evaluation: Harness for Precision@5, recall, MRR, router accuracy and hallucination rate.',
    ],
    stack: ['LangGraph', 'Neo4j', 'FastAPI', 'React 19', 'TypeScript', 'Docker', 'Python', 'pytest'],
  },
  {
    repo: 'fine-tuned-text2sql',
    title: 'Fine-Tuned Text-to-SQL Assistant',
    category: 'LLM',
    model: 'https://huggingface.co/Ashoksainibadu/fine-tuned-text2sql',
    tagline: 'Local-First QLoRA Model with SQL Safety Guardrails',
    features: [
      'Fine-Tuning: QLoRA fine-tuned Qwen2.5-Coder-3B on Spider and quantized it to a 1.9 GB GGUF model that runs on a laptop CPU; execution accuracy rose from 62.3% to 71.6% on Spider dev (n=1,034), 70.7% after quantization.',
      'Usage: Self-hosted tool to query SQLite databases in plain English through a CLI, a React web UI or a REST API; weights on Hugging Face Hub, Docker support, GitHub Actions CI.',
      'Safety and Reliability: sqlglot AST validator, read-only sandbox and 100-row cap; 0 of 40 held-out red-team attacks succeeded, with 0.19% false blocks on Spider dev (2/1,034); implemented execution-guided self-correction and majority voting.',
    ],
    stack: ['QLoRA', 'GGUF', 'SQLite', 'React', 'Docker', 'sqlglot', 'GitHub Actions'],
  },
  {
    repo: 'research-agent',
    title: 'Multi-Agent Research Assistant',
    category: 'LLM',
    demo: 'https://research-agent-sooty-rho.vercel.app',
    tagline: 'Durable LangGraph Workflow with Budget Controls',
    features: [
      'Agent Architecture: LangGraph supervisor-worker pipeline (planner, parallel Tavily researchers, supervisor with contradiction check, writer, citation validator) producing cited research reports, with live SSE progress and instant cancellation.',
      'Durability: Redis checkpoint after every node and a Redis Streams worker with XAUTOCLAIM recovery, so interrupted runs resume from the last completed step; Groq, Anthropic and Gemini fallback.',
      'Cost and Security Controls: Token, search and time budgets enforced in code at graph edges; API-key auth, rate limiting and SSRF-filtered fetching; 123 passing tests (76% coverage); Docker, Vercel and Render.',
    ],
    stack: ['LangGraph', 'Redis', 'Tavily', 'Docker', 'Vercel', 'Render'],
  },
  {
    repo: 'fraud-scoring-service',
    title: 'Real-Time Fraud Scoring Service',
    category: 'ML',
    demo: 'https://fraud-scoring-service.vercel.app',
    tagline: 'IEEE-CIS, 590K transactions',
    features: [
      'Modeling: LightGBM on highly imbalanced data with a strict time-based holdout, isotonic probability calibration, and a feature builder shared by training and serving; 0.90 ROC-AUC and 0.53 PR-AUC.',
      'Cost-Based Decisions: APPROVE / MANUAL REVIEW / BLOCK thresholds optimized on an asymmetric cost matrix ($10 review cost vs. chargeback loss); top-5 SHAP reason codes per prediction.',
      'Serving and MLOps: FastAPI with API-key auth, Redis rate limiting and PostgreSQL audit logging; Prometheus and Grafana monitoring; Docker Compose, GitHub Actions CI/CD, pytest; deployed on Render and Vercel.',
    ],
    stack: ['LightGBM', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker Compose', 'Prometheus', 'Grafana', 'pytest'],
  },
]
