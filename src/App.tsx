const githubUrl = 'https://github.com/originlabsbr'

const capabilities = [
  ['Product engineering', 'Web and mobile products shaped from early decisions through reliable delivery.'],
  ['AI systems', 'Focused AI tools built around real workflows, useful context, and measurable outcomes.'],
  ['Platforms and infrastructure', 'Cloud foundations and internal platforms designed to stay understandable as they grow.'],
  ['Data and automation', 'Data flows and automations that remove repetitive work and make operations clearer.'],
]

const approach = [
  ['Ideas', 'We clarify the problem, constraints, and smallest useful outcome before choosing technology.'],
  ['Engineering', 'We build in small, testable steps with direct communication and sound technical foundations.'],
  ['Real impact', 'We ship, learn from use, and improve what creates practical value.'],
]

function Orbit() {
  return (
    <svg className="orbit" viewBox="0 0 620 620" role="img" aria-labelledby="orbit-title orbit-description">
      <title id="orbit-title">Origin Labs orbital system</title>
      <desc id="orbit-description">Connected paths orbit a central point, representing ideas becoming durable software systems.</desc>
      <g className="orbit-grid" aria-hidden="true">
        <circle cx="310" cy="310" r="238" /><circle cx="310" cy="310" r="158" />
        <line x1="310" y1="34" x2="310" y2="586" /><line x1="34" y1="310" x2="586" y2="310" />
      </g>
      <g className="orbit-path orbit-path-wide" aria-hidden="true">
        <ellipse cx="310" cy="310" rx="252" ry="112" transform="rotate(-28 310 310)" />
        <circle cx="542" cy="213" r="11" className="orbit-node" />
      </g>
      <g className="orbit-path orbit-path-tall" aria-hidden="true">
        <ellipse cx="310" cy="310" rx="112" ry="252" transform="rotate(28 310 310)" />
        <circle cx="425" cy="518" r="8" className="orbit-node orbit-node-small" />
      </g>
      <circle cx="310" cy="310" r="62" className="orbit-core-ring" aria-hidden="true" />
      <circle cx="310" cy="310" r="18" className="orbit-core" aria-hidden="true" />
      <path className="orbit-signal" d="M310 292V174M328 310h118M310 328v118M292 310H174" aria-hidden="true" />
    </svg>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-shell">
        <header className="rail">
          <a className="wordmark" href="#top" aria-label="Origin Labs home"><span>Origin</span><span>Labs</span></a>
          <nav aria-label="Primary navigation">
            <a href="#capabilities">Capabilities</a><a href="#approach">Approach</a>
            <a href="#work">Work</a><a href="#contact">Contact</a>
          </nav>
          <p className="rail-note">Software house<br />Brazil</p>
        </header>
        <main id="main">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="hero-kicker">Same curiosity. Bigger possibilities.</p>
              <h1 id="hero-title">Build what&apos;s next.</h1>
              <p className="hero-positioning">A Brazilian software house building useful digital products and durable systems.</p>
              <div className="hero-actions">
                <a className="primary-action" href="#contact">Start a conversation</a>
                <a className="text-action" href={githubUrl}>GitHub organization</a>
              </div>
            </div>
            <div className="hero-visual"><Orbit /></div>
          </section>
          <section className="section" id="capabilities" aria-labelledby="capabilities-title">
            <div className="section-heading"><p>What we build</p><h2 id="capabilities-title">Capabilities</h2></div>
            <div className="capability-list">
              {capabilities.map(([title, copy]) => <article className="capability" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </section>
          <section className="section approach-section" id="approach" aria-labelledby="approach-title">
            <div className="section-heading"><p>How we work</p><h2 id="approach-title">Approach</h2></div>
            <ol className="approach-list">
              {approach.map(([title, copy], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
            </ol>
          </section>
          <section className="section" id="work" aria-labelledby="work-title">
            <div className="section-heading"><p>Selected work</p><h2 id="work-title">Work</h2></div>
            <div className="work-content">
              <article className="work-entry"><div><h3>Capô Aberto</h3><span className="status">In progress</span></div><p>Vehicle history reports built to make used-car decisions clearer.</p></article>
              <p className="empty-state">More work will appear here as it ships.</p>
            </div>
          </section>
          <section className="contact" id="contact" aria-labelledby="contact-title">
            <p>Contact</p><h2 id="contact-title">Have something worth building?</h2>
            <p>Start a conversation through the Origin Labs GitHub organization.</p>
            <a className="primary-action" href={githubUrl}>Visit Origin Labs on GitHub</a>
          </section>
          <footer>
            <div><strong>Origin Labs</strong><span>CNPJ 68.033.263/0001-30</span></div>
            <a href={githubUrl}>GitHub</a><span>Privacy (coming soon)</span><span>Terms (coming soon)</span>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
