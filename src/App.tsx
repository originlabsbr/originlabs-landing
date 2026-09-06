import { useEffect, useState } from 'react'

const githubUrl = 'https://github.com/originlabsbr'
const languageStorageKey = 'originlabs-language'
const themeStorageKey = 'originlabs-theme'
const languages = ['en', 'pt-BR', 'es'] as const
const themes = ['light', 'dark'] as const

type Language = (typeof languages)[number]
type Theme = (typeof themes)[number]
type Copy = {
  metaDescription: string
  skipLink: string
  homeLabel: string
  primaryNavigation: string
  languageLabel: string
  languageTitles: Record<Language, string>
  themeLabel: string
  switchTheme: Record<Theme, string>
  themeNames: Record<Theme, string>
  nav: { capabilities: string; approach: string; work: string; contact: string }
  railNote: [string, string]
  heroKicker: string
  heroTitle: string
  heroPositioning: string
  startConversation: string
  githubOrganization: string
  orbitTitle: string
  orbitDescription: string
  capabilitiesKicker: string
  capabilitiesTitle: string
  capabilities: Array<[string, string]>
  approachKicker: string
  approachTitle: string
  approach: Array<[string, string]>
  workKicker: string
  workTitle: string
  workStatus: string
  workDescription: string
  workEmpty: string
  contactKicker: string
  contactTitle: string
  contactDescription: string
  visitGithub: string
  privacy: string
  terms: string
}

const translations: Record<Language, Copy> = {
  en: {
    metaDescription: 'Origin Labs is a Brazilian software house building useful digital products and durable systems.',
    skipLink: 'Skip to content', homeLabel: 'Origin Labs home', primaryNavigation: 'Primary navigation', languageLabel: 'Language',
    languageTitles: { en: 'Switch language to English', 'pt-BR': 'Switch language to Brazilian Portuguese', es: 'Switch language to Spanish' },
    themeLabel: 'Theme', switchTheme: { light: 'Switch to light theme', dark: 'Switch to dark theme' }, themeNames: { light: 'Light', dark: 'Dark' },
    nav: { capabilities: 'Capabilities', approach: 'Approach', work: 'Work', contact: 'Contact' }, railNote: ['Software house', 'Brazil'],
    heroKicker: 'Same curiosity. Bigger possibilities.', heroTitle: "Build what's next.",
    heroPositioning: 'A Brazilian software house building useful digital products and durable systems.', startConversation: 'Start a conversation', githubOrganization: 'GitHub organization',
    orbitTitle: 'Origin Labs orbital system', orbitDescription: 'Connected paths orbit a central point, representing ideas becoming durable software systems.',
    capabilitiesKicker: 'What we build', capabilitiesTitle: 'Capabilities', capabilities: [
      ['Product engineering', 'Web and mobile products shaped from early decisions through reliable delivery.'],
      ['AI systems', 'Focused AI tools built around real workflows, useful context, and measurable outcomes.'],
      ['Platforms and infrastructure', 'Cloud foundations and internal platforms designed to stay understandable as they grow.'],
      ['Data and automation', 'Data flows and automations that remove repetitive work and make operations clearer.'],
    ],
    approachKicker: 'How we work', approachTitle: 'Approach', approach: [
      ['Ideas', 'We clarify the problem, constraints, and smallest useful outcome before choosing technology.'],
      ['Engineering', 'We build in small, testable steps with direct communication and sound technical foundations.'],
      ['Real impact', 'We ship, learn from use, and improve what creates practical value.'],
    ],
    workKicker: 'Selected work', workTitle: 'Work', workStatus: 'In progress', workDescription: 'Vehicle history reports built to make used-car decisions clearer.', workEmpty: 'More work will appear here as it ships.',
    contactKicker: 'Contact', contactTitle: 'Have something worth building?', contactDescription: 'Start a conversation through the Origin Labs GitHub organization.', visitGithub: 'Visit Origin Labs on GitHub',
    privacy: 'Privacy (coming soon)', terms: 'Terms (coming soon)',
  },
  'pt-BR': {
    metaDescription: 'A Origin Labs é uma empresa brasileira de software que cria produtos digitais úteis e sistemas duradouros.',
    skipLink: 'Pular para o conteúdo', homeLabel: 'Início da Origin Labs', primaryNavigation: 'Navegação principal', languageLabel: 'Idioma',
    languageTitles: { en: 'Mudar idioma para inglês', 'pt-BR': 'Mudar idioma para português do Brasil', es: 'Mudar idioma para espanhol' },
    themeLabel: 'Tema', switchTheme: { light: 'Mudar para o tema claro', dark: 'Mudar para o tema escuro' }, themeNames: { light: 'Claro', dark: 'Escuro' },
    nav: { capabilities: 'Capacidades', approach: 'Abordagem', work: 'Projetos', contact: 'Contato' }, railNote: ['Empresa de software', 'Brasil'],
    heroKicker: 'A mesma curiosidade. Possibilidades maiores.', heroTitle: 'Construa o que vem a seguir.',
    heroPositioning: 'Uma empresa brasileira de software que cria produtos digitais úteis e sistemas duradouros.', startConversation: 'Inicie uma conversa', githubOrganization: 'Organização no GitHub',
    orbitTitle: 'Sistema orbital da Origin Labs', orbitDescription: 'Caminhos conectados orbitam um ponto central, representando ideias que se tornam sistemas de software duradouros.',
    capabilitiesKicker: 'O que construímos', capabilitiesTitle: 'Capacidades', capabilities: [
      ['Engenharia de produtos', 'Produtos web e móveis desenvolvidos desde as primeiras decisões até uma entrega confiável.'],
      ['Sistemas de IA', 'Ferramentas de IA focadas em fluxos de trabalho reais, contexto útil e resultados mensuráveis.'],
      ['Plataformas e infraestrutura', 'Bases em nuvem e plataformas internas projetadas para permanecer compreensíveis enquanto crescem.'],
      ['Dados e automação', 'Fluxos de dados e automações que eliminam trabalho repetitivo e tornam as operações mais claras.'],
    ],
    approachKicker: 'Como trabalhamos', approachTitle: 'Abordagem', approach: [
      ['Ideias', 'Esclarecemos o problema, as restrições e o menor resultado útil antes de escolher a tecnologia.'],
      ['Engenharia', 'Construímos em etapas pequenas e testáveis, com comunicação direta e bases técnicas sólidas.'],
      ['Impacto real', 'Entregamos, aprendemos com o uso e melhoramos o que gera valor prático.'],
    ],
    workKicker: 'Projetos selecionados', workTitle: 'Projetos', workStatus: 'Em andamento', workDescription: 'Relatórios de histórico veicular criados para tornar mais claras as decisões sobre carros usados.', workEmpty: 'Mais projetos aparecerão aqui conforme forem lançados.',
    contactKicker: 'Contato', contactTitle: 'Tem algo que vale a pena construir?', contactDescription: 'Inicie uma conversa pela organização da Origin Labs no GitHub.', visitGithub: 'Visite a Origin Labs no GitHub',
    privacy: 'Privacidade (em breve)', terms: 'Termos (em breve)',
  },
  es: {
    metaDescription: 'Origin Labs es una empresa brasileña de software que crea productos digitales útiles y sistemas duraderos.',
    skipLink: 'Saltar al contenido', homeLabel: 'Inicio de Origin Labs', primaryNavigation: 'Navegación principal', languageLabel: 'Idioma',
    languageTitles: { en: 'Cambiar idioma a inglés', 'pt-BR': 'Cambiar idioma a portugués de Brasil', es: 'Cambiar idioma a español' },
    themeLabel: 'Tema', switchTheme: { light: 'Cambiar al tema claro', dark: 'Cambiar al tema oscuro' }, themeNames: { light: 'Claro', dark: 'Oscuro' },
    nav: { capabilities: 'Capacidades', approach: 'Enfoque', work: 'Proyectos', contact: 'Contacto' }, railNote: ['Empresa de software', 'Brasil'],
    heroKicker: 'La misma curiosidad. Mayores posibilidades.', heroTitle: 'Construye lo que sigue.',
    heroPositioning: 'Una empresa brasileña de software que crea productos digitales útiles y sistemas duraderos.', startConversation: 'Inicia una conversación', githubOrganization: 'Organización en GitHub',
    orbitTitle: 'Sistema orbital de Origin Labs', orbitDescription: 'Caminos conectados orbitan un punto central y representan ideas que se convierten en sistemas de software duraderos.',
    capabilitiesKicker: 'Lo que construimos', capabilitiesTitle: 'Capacidades', capabilities: [
      ['Ingeniería de productos', 'Productos web y móviles desarrollados desde las primeras decisiones hasta una entrega confiable.'],
      ['Sistemas de IA', 'Herramientas de IA enfocadas en flujos de trabajo reales, contexto útil y resultados medibles.'],
      ['Plataformas e infraestructura', 'Bases en la nube y plataformas internas diseñadas para seguir siendo comprensibles mientras crecen.'],
      ['Datos y automatización', 'Flujos de datos y automatizaciones que eliminan trabajo repetitivo y hacen más claras las operaciones.'],
    ],
    approachKicker: 'Cómo trabajamos', approachTitle: 'Enfoque', approach: [
      ['Ideas', 'Aclaramos el problema, las restricciones y el resultado útil más pequeño antes de elegir la tecnología.'],
      ['Ingeniería', 'Construimos en pasos pequeños y verificables, con comunicación directa y bases técnicas sólidas.'],
      ['Impacto real', 'Lanzamos, aprendemos del uso y mejoramos lo que genera valor práctico.'],
    ],
    workKicker: 'Proyectos seleccionados', workTitle: 'Proyectos', workStatus: 'En desarrollo', workDescription: 'Informes de historial vehicular creados para aclarar las decisiones sobre automóviles usados.', workEmpty: 'Más proyectos aparecerán aquí a medida que se lancen.',
    contactKicker: 'Contacto', contactTitle: '¿Tienes algo que valga la pena construir?', contactDescription: 'Inicia una conversación mediante la organización de Origin Labs en GitHub.', visitGithub: 'Visita Origin Labs en GitHub',
    privacy: 'Privacidad (próximamente)', terms: 'Términos (próximamente)',
  },
}

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(languageStorageKey)
    if (languages.includes(stored as Language)) return stored as Language
  } catch {}
  return 'en'
}

function readInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(themeStorageKey)
    if (themes.includes(stored as Theme)) return stored as Theme
  } catch {}
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function Orbit({ copy }: { copy: Copy }) {
  return (
    <svg className="orbit" viewBox="0 0 620 620" role="img" aria-labelledby="orbit-title orbit-description">
      <title id="orbit-title">{copy.orbitTitle}</title><desc id="orbit-description">{copy.orbitDescription}</desc>
      <g className="orbit-grid" aria-hidden="true"><circle cx="310" cy="310" r="238" /><circle cx="310" cy="310" r="158" /><line x1="310" y1="34" x2="310" y2="586" /><line x1="34" y1="310" x2="586" y2="310" /></g>
      <g className="orbit-path orbit-path-wide" aria-hidden="true"><ellipse cx="310" cy="310" rx="252" ry="112" transform="rotate(-28 310 310)" /><circle cx="542" cy="213" r="11" className="orbit-node" /></g>
      <g className="orbit-path orbit-path-tall" aria-hidden="true"><ellipse cx="310" cy="310" rx="112" ry="252" transform="rotate(28 310 310)" /><circle cx="425" cy="518" r="8" className="orbit-node orbit-node-small" /></g>
      <circle cx="310" cy="310" r="62" className="orbit-core-ring" aria-hidden="true" /><circle cx="310" cy="310" r="18" className="orbit-core" aria-hidden="true" /><path className="orbit-signal" d="M310 292V174M328 310h118M310 328v118M292 310H174" aria-hidden="true" />
    </svg>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>(readStoredLanguage)
  const [theme, setTheme] = useState<Theme>(readInitialTheme)
  const copy = translations[language]
  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    document.documentElement.lang = language
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', copy.metaDescription)
  }, [copy.metaDescription, language])

  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    const followSystemTheme = (event: MediaQueryListEvent) => {
      try { if (themes.includes(localStorage.getItem(themeStorageKey) as Theme)) return } catch {}
      setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', followSystemTheme)
    return () => media.removeEventListener('change', followSystemTheme)
  }, [])

  const chooseLanguage = (value: Language) => {
    setLanguage(value)
    try { localStorage.setItem(languageStorageKey, value) } catch {}
  }
  const toggleTheme = () => {
    setTheme(nextTheme)
    try { localStorage.setItem(themeStorageKey, nextTheme) } catch {}
  }

  return (
    <>
      <a className="skip-link" href="#main">{copy.skipLink}</a>
      <div className="site-shell">
        <header className="rail">
          <a className="wordmark" href="#top" aria-label={copy.homeLabel}><span>Origin</span><span>Labs</span></a>
          <nav aria-label={copy.primaryNavigation}><a href="#capabilities">{copy.nav.capabilities}</a><a href="#approach">{copy.nav.approach}</a><a href="#work">{copy.nav.work}</a><a href="#contact">{copy.nav.contact}</a></nav>
          <div className="preferences">
            <div className="language-selector" aria-label={copy.languageLabel} role="group">
              {languages.map((value) => <button aria-current={language === value ? 'true' : undefined} key={value} onClick={() => chooseLanguage(value)} title={copy.languageTitles[value]} type="button">{value === 'pt-BR' ? 'PT' : value.toUpperCase()}</button>)}
            </div>
            <button aria-label={copy.switchTheme[nextTheme]} className="theme-toggle" onClick={toggleTheme} title={copy.switchTheme[nextTheme]} type="button"><span className="theme-icon" aria-hidden="true">{theme === 'dark' ? '●' : '○'}</span><span>{copy.themeNames[theme]}</span></button>
          </div>
          <p className="rail-note">{copy.railNote[0]}<br />{copy.railNote[1]}</p>
        </header>
        <main id="main">
          <section className="hero" id="top" aria-labelledby="hero-title"><div className="hero-copy"><p className="hero-kicker">{copy.heroKicker}</p><h1 id="hero-title">{copy.heroTitle}</h1><p className="hero-positioning">{copy.heroPositioning}</p><div className="hero-actions"><a className="primary-action" href="#contact">{copy.startConversation}</a><a className="text-action" href={githubUrl}>{copy.githubOrganization}</a></div></div><div className="hero-visual"><Orbit copy={copy} /></div></section>
          <section className="section" id="capabilities" aria-labelledby="capabilities-title"><div className="section-heading"><p>{copy.capabilitiesKicker}</p><h2 id="capabilities-title">{copy.capabilitiesTitle}</h2></div><div className="capability-list">{copy.capabilities.map(([title, text]) => <article className="capability" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
          <section className="section approach-section" id="approach" aria-labelledby="approach-title"><div className="section-heading"><p>{copy.approachKicker}</p><h2 id="approach-title">{copy.approachTitle}</h2></div><ol className="approach-list">{copy.approach.map(([title, text], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
          <section className="section" id="work" aria-labelledby="work-title"><div className="section-heading"><p>{copy.workKicker}</p><h2 id="work-title">{copy.workTitle}</h2></div><div className="work-content"><article className="work-entry"><div><h3>Capô Aberto</h3><span className="status">{copy.workStatus}</span></div><p>{copy.workDescription}</p></article><p className="empty-state">{copy.workEmpty}</p></div></section>
          <section className="contact" id="contact" aria-labelledby="contact-title"><p>{copy.contactKicker}</p><h2 id="contact-title">{copy.contactTitle}</h2><p>{copy.contactDescription}</p><a className="primary-action" href={githubUrl}>{copy.visitGithub}</a></section>
          <footer><div><strong>Origin Labs</strong><span>CNPJ 68.033.263/0001-30</span></div><a href={githubUrl}>GitHub</a><span>{copy.privacy}</span><span>{copy.terms}</span></footer>
        </main>
      </div>
    </>
  )
}

export default App
