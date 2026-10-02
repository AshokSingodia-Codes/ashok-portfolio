export const GH = 'https://github.com/AshokSingodia-Codes'

export const profile = {
  name: 'Ashok Singodia',
  role: 'AI / ML Engineer & Data Scientist',
  tagline: 'B.Tech Mathematics & Computing Student | GenAI, Agentic RAG & Machine Learning Practitioner',
  summary: 'B.Tech student in Mathematics and Computing at Central University of Karnataka with proven industry experience at JSW Steel Ltd. Specialized in end-to-end Machine Learning, Data Science, Agentic LLM / RAG architectures, and Computer Vision. Architect of STEELSCAN at JSW Steel, real-time credit card fraud detection (0.91 ROC-AUC on 590K transactions), and agentic financial platforms using Pandas, NumPy, scikit-learn, PyTorch, LightGBM, OpenCV, and LangGraph.',
  email: 'ashokbadu01@gmail.com',
  phone: '+91 83064 53247',
  phoneHref: 'tel:+918306453247',
  linkedin: 'https://www.linkedin.com/in/ashok-singodia-3821a7292/',
  github: GH,
  location: 'Kalaburagi, Karnataka, India',
  resume: 'https://drive.google.com/file/d/18VoA0HNm_kxrp8kBPBJANg4XfbFNzteh/view?usp=sharing',
  focus: ['RAG & Agentic Workflows', 'Data Science & Machine Learning', 'Pandas, NumPy & scikit-learn', 'Computer Vision & OCR'],
}

export const nav = [['Home', 'hero'], ['Experience', 'experience'], ['Skills', 'skills'], ['Projects', 'projects'], ['Contact', 'contact']] as const

export const experience = [
  {
    org: 'JSW Steel Ltd., Dolvi Works',
    title: 'IT Department Intern',
    period: '18 May 2026 – 18 Jun 2026',
    points: [
      'Built STEELSCAN, a full-stack computer vision web app that reads circular numeric coil-identification codes using OpenCV preprocessing with PaddleOCR and EasyOCR.',
      'Developed FastAPI REST APIs with SQLAlchemy, OAuth2, JWT, bcrypt and role-based access control; every scan is logged for plant-floor traceability.',
      'Added CSV bulk import/export plus health and metrics endpoints (request volume, success rate, latency).',
      'Built a React 18, Vite and Tailwind dashboard with live camera scanning, upload and manual override for plant-floor kiosks.'
    ]
  },
  {
    org: 'YBI Foundation',
    title: 'AIML with Data Science Intern',
    period: '2 months, completed May 2025',
    points: [
      'Completed an intensive 2-month internship with a Data Science specialization, building supervised & unsupervised ML models using Python, Pandas, NumPy, and scikit-learn.',
      'Analyzed real-world datasets, performed data cleaning, feature extraction, model tuning, and evaluation metrics visualization.'
    ]
  },
]

export const education = {
  school: 'Central University of Karnataka, Kalaburagi',
  degree: 'B.Tech, Mathematics and Computing',
  period: '2023 – Expected 2027',
  cgpa: '7.99',
  courses: 'Machine Learning, Computational Statistics, Linear Algebra, Probability & Random Processes, Data Structures & Algorithms, DBMS'
}

export const stats = [
  { value: '0.91', label: 'ROC-AUC on 590K IEEE-CIS transactions' },
  { value: '59.7%', label: 'fraud recall at top-5% alerts' },
  { value: '3x', label: 'retrieval re-tries in Self-RAG verifier' },
  { value: '14+', label: 'public GitHub repositories' },
]

export const certifications = [
  'AI and Data Analytics Virtual Internship: AICTE, Shell India Markets, Edunet Foundation (Apr–May 2025)',
  'AI and Prompt Engineering: VaultCodes (AICTE)',
  'Ethical Hacking and Penetration Testing: C-DAC, Noida',
  'NPTEL: Deep Learning; Essential Mathematics for Machine Learning; Computer Architecture',
]

export const skills: Record<string, string[]> = {
  'Machine Learning & Deep Learning': [
    'scikit-learn',
    'PyTorch',
    'TensorFlow',
    'LightGBM',
    'XGBoost',
    'CatBoost',
    'Optuna Tuning',
    'SHAP & Explainability',
    'Isotonic Calibration',
    'CNN Architecture',
    'RNN / LSTM',
    'Random Forest & Decision Trees',
    'Logistic Regression / SVM'
  ],
  'LLM, GenAI & RAG': [
    'LangGraph Agents',
    'LangChain',
    'Hybrid Search (RRF)',
    'Reciprocal Rank Fusion',
    'Cross-Encoder Reranking',
    'Self-RAG Verifier',
    'Vector DBs (FAISS, ChromaDB)',
    'Sentence-Transformers',
    'Neo4j Knowledge Graph',
    'Prompt Engineering',
    'LLM Multi-Provider Fallbacks'
  ],
  'Backend & MLOps': [
    'Python',
    'FastAPI',
    'RESTful APIs',
    'SQLAlchemy',
    'PostgreSQL',
    'SQLite',
    'Redis Caching',
    'Docker & Docker Compose',
    'GitHub Actions CI/CD',
    'pytest',
    'Prometheus & Grafana'
  ],
  'Data Science & Analytics': [
    'Pandas',
    'NumPy',
    'scikit-learn',
    'SciPy',
    'Polars',
    'Statsmodels',
    'Matplotlib',
    'Seaborn',
    'Plotly',
    'Exploratory Data Analysis (EDA)',
    'Data Cleaning & Imputation',
    'Feature Engineering',
    'Hypothesis Testing'
  ],
  'Computer Vision & OCR': [
    'OpenCV',
    'PaddleOCR',
    'EasyOCR',
    'MediaPipe Hand Tracking',
    'YOLOv8',
    'Image Preprocessing',
    'Deskew & Perspective Transform',
    'Thresholding & Contour Extraction'
  ],
  'Languages & Frameworks': [
    'Python',
    'SQL',
    'C++',
    'C',
    'TypeScript',
    'JavaScript',
    'R',
    'MATLAB',
    'React 18/19',
    'Tailwind CSS',
    'Streamlit'
  ],
}

export type Category = 'GenAI & RAG' | 'Machine Learning' | 'Data Science' | 'Computer Vision' | 'Web'
export interface Project { repo: string; title: string; category: Category; tagline: string; features: string[]; stack: string[]; demo?: string; featured?: boolean }
export const categories: Array<'All' | Category> = ['All', 'GenAI & RAG', 'Machine Learning', 'Data Science', 'Computer Vision', 'Web']

export const projects: Project[] = [
  {
    repo: 'FinAdvisor-Voice',
    title: 'FinAdvisor-X',
    category: 'GenAI & RAG',
    featured: true,
    demo: 'https://fin-advisor-voice.vercel.app',
    tagline: 'Agentic hybrid graph-RAG financial intelligence platform with grounded Q&A over SEC 10-K filings, finance knowledge bases and books.',
    features: [
      'LangGraph agents: semantic router, query decomposition, hybrid retriever, math solver, live market data',
      'Neo4j vector + Lucene keyword search fused with RRF (k=60), reranked by FlashRank',
      'Self-RAG verifier checks numbers and citations, re-retrieving up to 3 times',
      'JWT + email OTP auth, per-user isolation tested with pytest, multi-provider LLM fallback'
    ],
    stack: ['LangGraph', 'Neo4j', 'FastAPI', 'React 19', 'TypeScript', 'Docker']
  },
  {
    repo: 'fraud-scoring-service',
    title: 'Real-Time Fraud Scoring Service',
    category: 'Machine Learning',
    featured: true,
    demo: 'https://fraud-scoring-service.vercel.app',
    tagline: 'End-to-end fraud detection API on the IEEE-CIS dataset (590K transactions) with calibrated scores and cost-based decisions.',
    features: [
      'LightGBM, time-based holdout, isotonic calibration: 0.91 ROC-AUC, 0.55 PR-AUC',
      'APPROVE / MANUAL REVIEW / BLOCK thresholds from an asymmetric cost matrix',
      'Top-5 SHAP reason codes, API-key auth, rate limiting, PostgreSQL audit log',
      'Docker Compose, Prometheus, Grafana, GitHub Actions CI/CD'
    ],
    stack: ['LightGBM', 'scikit-learn', 'SHAP', 'FastAPI', 'PostgreSQL', 'Redis']
  },
  {
    repo: 'steelscan',
    title: 'STEELSCAN',
    category: 'Computer Vision',
    featured: true,
    demo: 'https://steelscan.vercel.app',
    tagline: 'Full-stack computer vision web app that reads circular numeric coil-identification codes from steel coils for JSW Steel.',
    features: [
      'OpenCV deskew, circular unwrapping and contrast enhancement before OCR',
      'PaddleOCR and EasyOCR with OAuth2, JWT and RBAC',
      'Live camera scan, image upload and manual override for plant-floor kiosks',
      'CSV import/export, scan audit trail, health and metrics endpoints'
    ],
    stack: ['OpenCV', 'PaddleOCR', 'EasyOCR', 'FastAPI', 'React 18', 'Tailwind']
  },
  {
    repo: 'heart_risk_prediction',
    title: 'CardioGuard AI',
    category: 'Machine Learning',
    featured: true,
    demo: 'https://ashoksingodia-codes-heart-risk-prediction-app-a8gdyp.streamlit.app/',
    tagline: 'Educational ML web app using scikit-learn for quick cardiovascular risk assessment from patient vitals.',
    features: [
      'Logistic Regression & Random Forest on engineered clinical features',
      'Evaluated performance: ROC-AUC 99.9%, recall 99.4%, precision 98.9%',
      'Instant BMI, blood pressure and cholesterol summary with lifestyle guidance'
    ],
    stack: ['Python', 'Pandas', 'scikit-learn', 'Streamlit']
  },
  {
    repo: 'UsedCarPricePredictionApp',
    title: 'Used Car Price Prediction',
    category: 'Data Science',
    featured: true,
    demo: 'https://usedcarpricepredictionappgit-jfw254dwosmbnhfmh9xeka.streamlit.app/',
    tagline: 'Predictive price regression modeling on automobile datasets built with Pandas, NumPy, and scikit-learn.',
    features: [
      'Exploratory data analysis, outlier removal, and categorical encoding pipeline',
      'Multiple regression models comparison (Random Forest, Gradient Boosting, XGBoost)',
      'Deployed as an interactive user-friendly Streamlit web app'
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Streamlit']
  },
  {
    repo: 'Air-quality-in-indian-cities',
    title: 'Air Quality Analytics in Indian Cities',
    category: 'Data Science',
    featured: true,
    tagline: 'Data science analysis examining PM2.5, NO₂, and SO₂ pollution trends across major Indian cities.',
    features: [
      'Pandas & NumPy data cleaning over multi-city environmental datasets',
      'Matplotlib & Seaborn spatial pollution visualization and trend analysis',
      'Statistical correlation analysis between air pollutants and seasonal changes'
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter']
  },
  {
    repo: 'Virtual-Painter',
    title: 'Hand Tracking Virtual Painter',
    category: 'Computer Vision',
    tagline: 'Draw on a virtual canvas with index finger movements using OpenCV and MediaPipe real-time hand tracking.',
    features: [
      'Drawing mode triggered by single index finger gesture',
      'Selection mode (index + middle finger gesture) to pick palette colors',
      'Eraser mode, brush size slider, and real-time color picker interface'
    ],
    stack: ['OpenCV', 'MediaPipe', 'NumPy', 'Python']
  },
  {
    repo: 'Fake_News_Detection',
    title: 'Fake News NLP Classifier',
    category: 'GenAI & RAG',
    tagline: 'Text processing and machine learning classification pipeline to identify misinformative articles.',
    features: [
      'TF-IDF vectorization, NLTK tokenization and text preprocessing',
      'Evaluated PassiveAggressive and Naive Bayes classifiers with 94%+ accuracy',
      'Interactive inference module for real-time text analysis'
    ],
    stack: ['Python', 'scikit-learn', 'NLTK', 'Pandas', 'Jupyter']
  },
  {
    repo: 'Kaggle-Predicting-Future-Sales',
    title: 'Future Sales Time-Series Forecasting',
    category: 'Data Science',
    tagline: 'Time-series forecasting pipeline predicting monthly item sales for Russian retail stores.',
    features: [
      'Lag feature creation, rolling mean statistics, and store-item aggregations',
      'LightGBM & XGBoost regressors optimized for RMSE evaluation metric',
      'Comprehensive EDA on sales seasonality and promotional impacts'
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'LightGBM', 'XGBoost', 'Jupyter']
  },
  {
    repo: 'fertiliser-prediction-and-crop-recommendation',
    title: 'Crop & Fertilizer Recommendation Engine',
    category: 'Data Science',
    tagline: 'Machine learning model predicting optimal crop species and calculating targeted fertilizer requirements.',
    features: [
      'Crop selection based on N, P, K soil content, temperature, humidity, and rainfall',
      'Fertilizer gap calculation comparing soil test values with target crop needs',
      'Random Forest classifier with 98.5% validation accuracy'
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Random Forest']
  },
  {
    repo: 'Responsive_Online_Food_Shop',
    title: 'Responsive Online Food Shop',
    category: 'Web',
    demo: 'https://responsive-online-food-shop.vercel.app',
    tagline: 'Modern responsive web interface built with HTML5, CSS3, and JavaScript for food ordering.',
    features: [
      'Sticky header navigation and dynamic food items showcase',
      'Fluid layout with Flexbox, CSS Grid and mobile media queries',
      'Interactive menu filter and contact form UI'
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel']
  },
]


