/*
 * Portfolio content lives here so you can add projects, roles, and links
 * without editing the page layout. Keep project entries newest first.
 */
window.portfolioData = {
  name: "Advika Gupta",
  role: "Software Engineer · Forward Deployed Engineer · AI & ML",
  location: "Bengaluru, India",
  email: "advikag3009@gmail.com",
  links: {
    github: "https://github.com/advika30",
    linkedin: "https://www.linkedin.com/in/advikagupta30"
  },
  intro: "I build reliable systems that make AI useful in the real world.",
  about: "I’m a software engineer working across backend systems, applied AI, and product experiences. At DevRev, I build tools that help teams turn conversations and meetings into useful, searchable knowledge. I enjoy taking a problem from the first sketch through production—and making the result faster, simpler, and more dependable.",
  experience: [
    {
      company: "DevRev", logo: "devrev", title: "Member of Technical Staff", place: "Bengaluru, India", dates: "Nov 2025 — Present", current: true,
      summary: "Building production systems for meeting intelligence and customer communication.",
      highlights: [
        "Designed and shipped the Meetings Export API end to end, giving 250+ salespeople self-serve asynchronous exports for up to 50K meetings.",
        "Traced large-organization endpoint failures to MongoDB query planning; selected optimal indexes to cut a 30s+ timeout to 24ms and eliminate recurring 500 errors.",
        "Built deterministic-first meeting-to-opportunity matching with an LLM fallback, avoiding model calls for 80% of 10K+ production meetings.",
        "Created a transcript-to-article pipeline that backfilled 20K+ meetings into searchable knowledge; shipped the Granola connector, syncing 100+ meetings daily.",
        "Led migration of legacy email tracking to a unified chat-based model, integrating 800K+ records and retiring deprecated gateway APIs."
      ],
      tags: ["Go", "MongoDB", "Distributed systems", "APIs", "LLMs", "Production systems"]
    },
    {
      company: "Target", logo: "target", title: "Data Science Apprentice", place: "Bengaluru, India", dates: "Aug 2025 — Nov 2025",
      summary: "Supported a tax-code prediction model for more consistent automated inventory classification.",
      highlights: ["Supported model training and evaluation using Google Cloud Vertex AI."], tags: ["Python", "Vertex AI", "Machine learning"]
    },
    {
      company: "IBM", logo: "ibm", title: "Software Engineer Intern", place: "Bengaluru, India", dates: "Jan 2025 — Jul 2025",
      summary: "Improved systems tooling and data retrieval performance.",
      highlights: ["Replaced a shell log parser with Python and structured JSON output across 50+ system logs.", "Added UUID-based caching to HMC APIs in ISST Tools, cutting data retrieval latency by 40%."], tags: ["Python", "APIs", "Caching"]
    },
    {
      company: "Schneider Electric", logo: "schneider", title: "Summer Intern", place: "Bengaluru, India", dates: "Jul 2024 — Sep 2024",
      summary: "Built an internal support chatbot and tested it with the people who used it.",
      highlights: ["Deployed a Dialogflow chatbot that automated 100+ internal queries and reduced resolution time by 30%.", "Led 20+ user testing sessions, helping lower support tickets by 20%."], tags: ["Dialogflow", "Conversational AI"]
    },
    {
      company: "HPE", logo: "hpe", title: "Project Intern", place: "Bengaluru, India", dates: "Jan 2024 — Jun 2024",
      summary: "Developed an inference pipeline for image and language models.",
      highlights: ["Engineered a TorchServe pipeline using BERT and ResNet-18, reducing latency by 30%, deployment time by 40%, and improving accuracy by 15%."], tags: ["PyTorch", "BERT", "ResNet-18"]
    }
  ],
  education: [{
    school: "M.S. Ramaiah Institute of Technology", degree: "B.E. in Computer Science · AI & ML", dates: "Dec 2021 — Jun 2025", result: "CGPA 9.36"
  }],
  achievements: [
    { number: "Top 100", title: "JPMorgan Chase Code for Good 2024", detail: "Finalist in the global hackathon, recognized among the top 100 students worldwide.", url: "https://lnkd.in/p/dxz3kfcz", linkLabel: "Read the LinkedIn post" },
    { number: "Best project", title: "RIT Alumni Association", detail: "Awarded for ClauseScan, an AI-powered risk intelligence platform." },
    { number: "Top 25", title: "HPE Catch Them Young (CTY) Program", detail: "Chosen as one of my college’s top 25 students for HPE’s Catch Them Young program.", url: "https://medium.com/@advikag3009/how-i-got-into-hpes-catch-them-young-cty-program-and-why-you-should-too-e642ca4cb769" },
    { number: "SIH ’23", title: "Smart India Hackathon", detail: "Built a GAN-based desmoking and defogging system for a challenge under the Ministry of Defence theme." },
    { number: "10+ initiatives", title: "IEEE SIGHT Secretary · 2023–24", detail: "Led campus tech-for-good initiatives focused on humanitarian engineering." },
    { number: "Top 7", title: "TechNova National Hackathon", detail: "Ranked among the top 7 teams nationwide after building an SOS SMS system app." }
  ],
  projects: [
    {
      name: "ClauseScan", label: "AI-powered contract risk intelligence", category: "AI systems", year: "2025",
      description: "A Streamlit tool that detects and classifies contract clauses, assesses legal risk, and creates concise summaries, with a companion user management dashboard.",
      outcome: "Turns uploaded contracts into structured clause insights, risk ratings, and exportable reports.",
      stack: ["Python", "BERT", "BART", "spaCy", "Streamlit", "MongoDB"],
      note: "Best Project · RIT Alumni Association",
      url: "https://github.com/advika30/CLAUSESCAN-AI-POWERED-RISK-INTELLIGENCE",
      demoUrl: "demos/clause-scan-demo.mp4"
    },
    {
      name: "Re:Solve", label: "Customer impact on-call", category: "AI systems", year: "2025",
      description: "An incident triage system that helps teams see which outages matter most to customers. It scores impact, severity, urgency, and blast radius, then brings evidence and diagnosis together for a human-reviewed response.",
      outcome: "Human-approved, allowlisted remediation with auditable decision receipts posted to DevRev.",
      stack: ["Python", "AWS Bedrock", "CloudWatch", "DevRev APIs", "Streamlit"],
      note: "Source code confidential · Built for the AWS × DevRev Hackathon", url: ""
    }
  ],
  skills: [
    { group: "Languages", items: ["Python", "Go", "C++", "SQL", "Java", "C"] },
    { group: "Backend", items: ["REST APIs", "gRPC", "Microservices", "API design"] },
    { group: "Data & cloud", items: ["MongoDB", "MySQL", "AWS Bedrock", "CloudWatch", "Vertex AI", "Docker", "Linux", "Git"] },
    { group: "AI & ML", items: ["LLMs", "AI agents", "RAG", "LangChain", "PyTorch", "TensorFlow", "Transformers", "NLP", "Scikit-learn"] }
  ]
};
