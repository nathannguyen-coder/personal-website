import { useEffect, useState } from "react"

const projects = [
  {
    year: "2026",
    eyebrow: "Public health · Pharmacovigilance",
    title: "Turning FAERS reports into responsible safety signals.",
    summary:
      "A live openFDA adverse-event dashboard that computes disproportionality signals (ROR/PRR) by drug, event, and demographic group, backed by a Python signal service, a SQL-backed cache, and built-in bias and causality guardrails.",
    metric: "Live",
    metricLabel: "openFDA signal feed",
    tags: ["Python", "FastAPI", "TypeScript", "React", "SQLite cache"],
    theme: "drugsafety",
    href: "https://github.com/nathannguyen-coder/drug-safety-signal-dashboard",
  },
  {
    year: "2026",
    eyebrow: "AI safety · Policy RAG",
    title: "A citation-grounded reference layer for mirror-life policy.",
    summary:
      "A retrieval-augmented system over the public mirror-life governance debate — hybrid BM25 and vector retrieval, a pre-retrieval boundary gate that refuses synthesis or protocol questions by construction, and citations back to the primary consensus statement and technical report.",
    metric: "1,400",
    metricLabel: "policy chunks indexed",
    tags: ["FastAPI", "ChromaDB", "BM25 hybrid", "Boundary gate"],
    theme: "governance",
    href: "https://github.com/nathannguyen-coder/mirror-governance-rag",
  },
  {
    year: "2026",
    eyebrow: "AI safety · Benchmarking",
    title: "Testing boundaries in high-stakes AI assistance.",
    summary:
      "A safety-first benchmark for measuring whether AI systems can distinguish permissible scientific discussion from assistance that crosses dangerous boundaries in mirror-molecule and mirror-life contexts.",
    metric: "Safety",
    metricLabel: "boundary benchmark",
    tags: ["Python CLI", "LLM evals", "JSONL", "Ollama/Qwen"],
    theme: "mirror",
    href: "https://github.com/nathannguyen-coder/mirror-boundary-bench",
  },
  {
    year: "2026",
    eyebrow: "Biosecurity · Metagenomics",
    title: "Turning wastewater reads into analyst-ready signals.",
    summary:
      "A defensive wastewater-surveillance dashboard that transforms public NCBI SRA taxonomy profiles into QC-aware anomaly signals, feature-level explanations, typed API responses, and a static deployable analyst experience.",
    metric: "31",
    metricLabel: "SRA runs analyzed",
    tags: ["FastAPI", "React", "Nextflow", "Docker", "CLR analysis"],
    theme: "wastewater",
    href: "https://nathannguyen-coder.github.io/wastewater-watch/",
  },
  {
    year: "2026",
    eyebrow: "Machine learning · Public health",
    title: "Forecasting outbreak risk without leaking the future.",
    summary:
      "A leakage-safe dengue forecasting pipeline with expanding-window validation, recursive case-lag prediction, calibrated outbreak classification, and two-stage policies for balancing MAE against outbreak-week recall.",
    metric: "51.6%",
    metricLabel: "outbreak recall",
    tags: ["Python", "pandas", "scikit-learn", "Forecasting"],
    theme: "outbreak",
    href: "https://github.com/nathannguyen-coder/dengue-forecasting-model",
  },
  {
    year: "2025",
    eyebrow: "Data analysis · Climate policy",
    title: "Turning 30,000 records into climate action.",
    summary:
      "Analysis and geospatial storytelling that helped shape New Jersey’s cleaner-refrigerants incentive program and direct support toward high-emitting, underserved communities.",
    metric: "$15M",
    metricLabel: "program informed",
    tags: ["SAP", "ArcGIS Pro", "Geospatial analysis"],
    theme: "climate",
  },
  {
    year: "2025",
    eyebrow: "Forecasting · Energy systems",
    title: "Reading stress in the electricity market.",
    summary:
      "A research project combining statistical analysis, SQL, interactive dashboards, and random-forest models to forecast prices and classify volatility.",
    metric: "24h",
    metricLabel: "ahead forecasting",
    tags: ["Python", "SQL", "Power BI", "XGBoost"],
    theme: "market",
    href: "https://github.com/nathannguyen-coder/electricity_market",
  },
]

const experience = [
  ["Summer 2026", "Commercial Analytics Intern", "Menarini Stemline", "Analyzing product performance, customer engagement, and the competitive landscape to identify opportunities for the next business cycle."],
  ["2025 — 2026", "Strategy Intern", "Merck & Co.", "Built a pediatric-vaccine forecast and translated regulatory, market, and disease-area research into portfolio recommendations."],
  ["Summer 2025", "Data Analyst Intern", "NJ Department of Environmental Protection", "Connected policy, facility data, and environmental-justice indices to help design a statewide climate incentive."],
  ["Summer 2024", "Research Intern", "Princeton · Avalos Lab", "Developed experimental workflows for light-controlled protein purification and presented the research at Princeton’s HMEI Symposium."],
]

const navItems = [
  ["Home", "#home"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
]

const portraitSrc = `${import.meta.env.BASE_URL}nathan-portrait.jpeg`

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow" fill="none">
      <path d={diagonal ? "M5 19 19 5M8 5h11v11" : "M4 12h16M14 6l6 6-6 6"} />
    </svg>
  )
}

function ProjectVisual({ theme }: { theme: string }) {
  if (theme === "mirror") {
    return (
      <div className="project-visual visual-mirror" aria-hidden="true">
        <div className="mirror-label"><span>BOUNDARY TEST</span><strong>SAFE?</strong><small>ASSISTANCE CLASSIFIER</small></div>
        <div className="mirror-stage">
          <i /><i /><b /><b /><em />
        </div>
        <span className="visual-caption">Mirror-life / refusal boundary / benchmark suite</span>
      </div>
    )
  }
  if (theme === "outbreak") {
    return (
      <div className="project-visual visual-outbreak" aria-hidden="true">
        <div className="visual-label"><span>EARLY SIGNAL</span><strong>0.82</strong><small>MODEL CONFIDENCE</small></div>
        <div className="radar"><i /><i /><i /><b /><b /><b /><b /></div>
        <span className="visual-caption">Environmental health monitor / 06:42</span>
      </div>
    )
  }
  if (theme === "wastewater") {
    return (
      <div className="project-visual visual-wastewater" aria-hidden="true">
        <div className="visual-label"><span>ANOMALY REVIEW</span><strong>QC</strong><small>METAGENOMIC SIGNALS</small></div>
        <svg className="wastewater-chart" viewBox="0 0 800 380" preserveAspectRatio="none">
          <path className="qc-band" d="M0 120H800" />
          <path className="qc-band" d="M0 260H800" />
          <path className="qc-trend" d="M0 210C90 205 150 200 220 198C300 196 360 202 430 200C500 198 560 195 630 193C690 191 740 190 800 189" />
          <g className="qc-points">
            <circle cx="40" cy="205" r="5" /><circle cx="120" cy="200" r="5" /><circle cx="200" cy="198" r="5" />
            <circle cx="280" cy="202" r="5" /><circle cx="440" cy="199" r="5" /><circle cx="520" cy="196" r="5" />
            <circle cx="680" cy="198" r="5" /><circle cx="760" cy="192" r="5" />
          </g>
          <g className="qc-flag-group"><circle className="qc-flag-ring" cx="360" cy="94" r="8" /><circle className="qc-flag" cx="360" cy="94" r="6" /></g>
          <g className="qc-flag-group"><circle className="qc-flag-ring" cx="600" cy="292" r="8" /><circle className="qc-flag" cx="600" cy="292" r="6" /></g>
        </svg>
        <span className="visual-caption">NCBI SRA / CLR anomaly engine / FastAPI</span>
      </div>
    )
  }
  if (theme === "drugsafety") {
    return (
      <div className="project-visual visual-drugsafety" aria-hidden="true">
        <div className="visual-label"><span>SIGNAL REVIEW</span><strong>PRR</strong><small>ADVERSE EVENT SCREENING</small></div>
        <div className="drugsafety-stat"><small>TOP SIGNAL</small><strong>ROR 4.2×</strong></div>
        <div className="drugsafety-chart">
          <span className="ds-threshold" />
          <div className="drugsafety-bars"><i /><i /><i /><i /><i className="is-signal" /><i /><i /></div>
        </div>
        <span className="visual-caption">openFDA FAERS / ROR·PRR signal math / React dashboard</span>
      </div>
    )
  }
  if (theme === "governance") {
    return (
      <div className="project-visual visual-governance" aria-hidden="true">
        <div className="visual-label"><span>BOUNDARY GATE</span><strong>RAG</strong><small>POLICY CITATION GRAPH</small></div>
        <svg className="governance-graph" viewBox="0 0 700 500" preserveAspectRatio="xMidYMid meet">
          <line className="gg-gate" x1="350" y1="20" x2="350" y2="480" />
          <g className="gg-links">
            <line x1="350" y1="250" x2="120" y2="90" /><line x1="350" y1="250" x2="90" y2="250" />
            <line x1="350" y1="250" x2="120" y2="410" /><line x1="350" y1="250" x2="580" y2="120" />
            <line x1="350" y1="250" x2="610" y2="250" /><line x1="350" y1="250" x2="580" y2="380" />
          </g>
          <circle className="gg-node" cx="120" cy="90" r="8" /><circle className="gg-node" cx="90" cy="250" r="8" />
          <circle className="gg-node" cx="120" cy="410" r="8" /><circle className="gg-node" cx="610" cy="250" r="8" />
          <circle className="gg-node" cx="580" cy="380" r="8" />
          <g className="gg-flag-group"><circle className="gg-flag-ring" cx="580" cy="120" r="8" /><circle className="gg-node gg-flag" cx="580" cy="120" r="8" /></g>
          <circle className="gg-node gg-core" cx="350" cy="250" r="14" />
        </svg>
        <span className="visual-caption">Hybrid retrieval / 24 docs · 1,400 chunks / pre-retrieval gate</span>
      </div>
    )
  }
  if (theme === "climate") {
    return (
      <div className="project-visual visual-climate" aria-hidden="true">
        <div className="orbit o1" /><div className="orbit o2" /><div className="orbit o3" />
        <div className="pin p1" /><div className="pin p2" /><div className="pin p3" /><div className="pin p4" /><div className="pin p5" />
        <div className="climate-stat"><small>FACILITIES MAPPED</small><strong>1,000+</strong></div>
        <span className="visual-caption">New Jersey / environmental justice overlay</span>
      </div>
    )
  }
  return (
    <div className="project-visual visual-market" aria-hidden="true">
      <div className="market-top"><span>DAY-AHEAD / PRICE</span><span>LIVE MODEL</span></div>
      <div className="market-stat"><strong>+18.4%</strong><span>PRICE STRESS</span></div>
      <svg viewBox="0 0 800 380" preserveAspectRatio="none">
        <path className="market-area" d="M0 300C70 280 92 310 150 268C210 224 240 260 298 210C342 170 370 242 418 178C460 120 500 160 538 118C578 74 604 148 646 104C694 54 720 100 800 32V380H0Z" />
        <path className="market-line" d="M0 300C70 280 92 310 150 268C210 224 240 260 298 210C342 170 370 242 418 178C460 120 500 160 538 118C578 74 604 148 646 104C694 54 720 100 800 32" />
      </svg>
      <span className="visual-caption">Random forest / classification / clustering</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [introUnlocked, setIntroUnlocked] = useState(false)
  const [introExiting, setIntroExiting] = useState(false)
  const [learnCursor, setLearnCursor] = useState({ x: 0, y: 0, visible: false })
  const [learnTextLength, setLearnTextLength] = useState(0)
  const learnText = "Learn more!"

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true")
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen)
    const close = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", close)
    return () => {
      document.body.classList.remove("menu-open")
      window.removeEventListener("keydown", close)
    }
  }, [menuOpen])

  useEffect(() => {
    document.body.classList.toggle("intro-locked", !introUnlocked)
    if (!introUnlocked) window.scrollTo({ top: 0, left: 0 })
    return () => document.body.classList.remove("intro-locked")
  }, [introUnlocked])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLearnTextLength((length) => length >= learnText.length + 7 ? 0 : length + 1)
    }, 115)
    return () => window.clearInterval(interval)
  }, [learnText.length])

  const moveToPortrait = () => {
    setIntroUnlocked(true)
    setIntroExiting(true)
    setLearnCursor((cursor) => ({ ...cursor, visible: true }))
    window.setTimeout(() => {
      document.querySelector("#portrait")?.scrollIntoView({ behavior: "smooth" })
    }, 80)
    window.setTimeout(() => {
      setIntroExiting(false)
      setLearnCursor((cursor) => ({ ...cursor, visible: false }))
    }, 850)
  }

  return (
    <main className={introUnlocked ? "is-unlocked" : "is-locked"}>
      <header className="site-header">
        <a className="signature" href="#home" aria-label="Nathan Nguyen home">Nathan</a>
      </header>

      <section
        className="hero page-frame"
        id="home"
        onPointerMove={(event) => setLearnCursor({ x: event.clientX, y: event.clientY, visible: true })}
        onPointerEnter={(event) => setLearnCursor({ x: event.clientX, y: event.clientY, visible: true })}
        onPointerLeave={() => setLearnCursor((cursor) => ({ ...cursor, visible: false }))}
      >
        <div className="hero-side hero-side-left">Engineer &amp; analyst</div>
        <div className="hero-name" aria-label="Nathan Nguyen"><span>NATHAN</span><span>NGUYEN</span></div>
        <div className="hero-side hero-side-right">Based in Princeton, NJ</div>
        <button className="hero-click-target" type="button" aria-label="Learn more and continue to portrait" onClick={moveToPortrait} />
        <div
          className={`learn-cursor ${learnCursor.visible ? "is-visible" : ""} ${introExiting ? "is-exiting" : ""}`}
          style={{ left: learnCursor.x, top: learnCursor.y }}
          aria-hidden="true"
        >
          <span>{learnText.slice(0, Math.min(learnTextLength, learnText.length))}</span>
        </div>
        <button className="mobile-learn" type="button" onClick={moveToPortrait}>
          <span>{learnText.slice(0, Math.min(learnTextLength, learnText.length))}</span>
        </button>
      </section>

      <section className="portrait-stage page-frame" id="portrait" aria-hidden={!introUnlocked}>
        <svg className="portrait-scribble" viewBox="0 0 1000 300" aria-hidden="true">
          <path d="M30 210C145 34 170 251 277 97c67-98 61 151 168 22 81-97 22 156 163 28 85-78 66 102 166 12 78-70 102 22 194-75" />
        </svg>
        <img src={portraitSrc} alt="Nathan Nguyen standing beneath a Princeton stone arch" />
      </section>

      <section className="work page-frame" id="work" aria-hidden={!introUnlocked}>
        <div className="section-heading" data-reveal>
          <span className="section-index">01 / Selected work</span>
          <h2>Work with a pulse.</h2>
          <p>A few problems I’ve followed from messy evidence to useful direction.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const inside = (
              <>
                <div className="project-top"><span>{project.year}</span><span>{project.eyebrow}</span><span>0{index + 1}</span></div>
                <ProjectVisual theme={project.theme} />
                <div className="project-copy">
                  <div><h3>{project.title}</h3><p>{project.summary}</p></div>
                  <div className="project-meta">
                    <div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                    <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </div>
                {project.href && <span className="view-project">View project <Arrow diagonal /></span>}
              </>
            )
            return project.href ? (
              <a className="project" href={project.href} target="_blank" rel="noreferrer" key={project.title} data-reveal>{inside}</a>
            ) : (
              <article className="project" key={project.title} data-reveal>{inside}</article>
            )
          })}
        </div>
      </section>

      <section className="experience page-frame" id="experience" aria-hidden={!introUnlocked}>
        <div className="experience-heading" data-reveal>
          <span className="section-index">02 / Experience</span>
          <h2>Across the lab, private industry, and the public sector.</h2>
          <div className="education-card">
            <small>Education</small>
            <strong>Princeton University</strong>
            <span>B.S.E. in Biochemical Engineering</span>
            <em>Expected May 2027</em>
          </div>
        </div>
        <div className="experience-list">
          {experience.map(([dates, role, company, detail], index) => (
            <article className="experience-row" key={role} data-reveal>
              <span>0{index + 1}</span>
              <div><small>{dates}</small><h3>{role}</h3><em>{company}</em></div>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="personal page-frame" data-reveal aria-hidden={!introUnlocked}>
        <span className="section-index">Off the clock</span>
        <p>
          You’ll find me singing baritone with the{" "}
          <a href="https://www.princetonfootnotes.com" target="_blank" rel="noreferrer">Princeton Footnotes <Arrow diagonal /></a>
          {" "}or riding with the{" "}
          <a href="https://www.instagram.com/princetonequestrian/" target="_blank" rel="noreferrer">Princeton Equestrian Team <Arrow diagonal /></a>.
        </p>
      </section>

      <section className="contact page-frame" id="contact" aria-hidden={!introUnlocked}>
        <span className="section-index">03 / Contact</span>
        <div className="contact-title" data-reveal><span>LET’S MAKE</span><span>SOMETHING</span><span>IMPACTFUL.</span></div>
        <div className="contact-bottom">
          <p>Always happy to meet thoughtful people working across healthcare, climate, AI, or the useful spaces between them.</p>
          <a href="mailto:nn9069@princeton.edu">nn9069@princeton.edu <Arrow diagonal /></a>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/bachgianguyen/" target="_blank" rel="noreferrer">
            <span>LinkedIn</span><small>Professional profile</small><Arrow diagonal />
          </a>
          <a href="https://github.com/nathannguyen-coder" target="_blank" rel="noreferrer">
            <span>GitHub</span><small>Code and projects</small><Arrow diagonal />
          </a>
        </div>
        <footer><span>© 2026 Nathan Nguyen</span><a href="#home">Back to top ↑</a></footer>
      </section>

      <nav className={`floating-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation" aria-hidden={!introUnlocked}>
        <button type="button" aria-expanded={menuOpen} aria-controls="menu-panel" onClick={() => setMenuOpen((value) => !value)}>
          <span>{menuOpen ? "Close" : "Menu"}</span><i aria-hidden="true" />
        </button>
        <div className="menu-panel" id="menu-panel" aria-hidden={!menuOpen}>
          {navItems.map(([label, href], index) => <a href={href} key={href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}
        </div>
      </nav>
    </main>
  )
}

export default App
