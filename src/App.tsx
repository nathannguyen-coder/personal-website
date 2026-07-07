import { useEffect, useState } from "react"

const projects = [
  {
    year: "2026",
    eyebrow: "AI safety · Benchmarking",
    title: "Testing boundaries in high-stakes AI assistance.",
    summary:
      "A safety-first benchmark for measuring whether AI systems can distinguish permissible scientific discussion from assistance that crosses dangerous boundaries in mirror-molecule and mirror-life contexts.",
    metric: "Safety",
    metricLabel: "boundary benchmark",
    tags: ["Python", "Evaluation", "AI Safety"],
    theme: "mirror",
    href: "https://github.com/nathannguyen-coder/mirror-boundary-bench",
  },
  {
    year: "2026",
    eyebrow: "Machine learning · Public health",
    title: "Finding outbreaks before they spread.",
    summary:
      "An end-to-end machine-learning pipeline using environmental data to surface early signals of vector-borne disease, with responsible sourcing and model evaluation built in.",
    metric: "AI4ALL",
    metricLabel: "Ignite fellow",
    tags: ["Python", "Classification", "Responsible AI"],
    theme: "outbreak",
  },
  {
    year: "2025",
    eyebrow: "Data analysis · Climate policy",
    title: "Turning 30,000 records into climate action.",
    summary:
      "Analysis and geospatial storytelling that helped shape New Jersey’s cleaner-refrigerants incentive program and direct support toward high-emitting, underserved communities.",
    metric: "$15M",
    metricLabel: "program informed",
    tags: ["SAP", "ArcGIS Pro", "Policy"],
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
    tags: ["Python", "SQL", "Power BI"],
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
        <img src="/nathan-portrait.jpeg" alt="Nathan Nguyen standing beneath a Princeton stone arch" />
      </section>

      <section className="work page-frame" id="work" aria-hidden={!introUnlocked}>
        <div className="section-heading" data-reveal>
          <span className="section-index">01 / Selected work</span>
          <h2>Work with a pulse.</h2>
          <p>A few problems I’ve followed from messy evidence to useful direction.</p>
        </div>

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
      </section>

      <section className="experience page-frame" id="experience" aria-hidden={!introUnlocked}>
        <div className="experience-heading" data-reveal>
          <span className="section-index">02 / Experience</span>
          <h2>Across the lab, the market, and the public sector.</h2>
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
