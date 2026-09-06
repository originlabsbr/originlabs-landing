import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8')

const requiredCopy = [
  "Build what's next.", 'Same curiosity. Bigger possibilities.', 'Product engineering',
  'AI systems', 'Platforms and infrastructure', 'Data and automation', 'Ideas', 'Engineering',
  'Real impact', 'Capô Aberto', 'In progress',
  'Vehicle history reports built to make used-car decisions clearer.',
  'More work will appear here as it ships.', 'Have something worth building?',
  'CNPJ 68.033.263/0001-30',
]

const translatedCopy = [
  'Pular para o conteúdo', 'Navegação principal', 'Construa o que vem a seguir.',
  'Engenharia de produtos', 'Sistemas de IA', 'Em andamento', 'Privacidade (em breve)',
  'Saltar al contenido', 'Navegación principal', 'Construye lo que sigue.',
  'Ingeniería de productos', 'Sistemas de IA', 'En desarrollo', 'Privacidad (próximamente)',
  'Sistema orbital da Origin Labs', 'Sistema orbital de Origin Labs',
]

test('renders required landing content and honest work state', () => {
  for (const copy of requiredCopy) assert.ok(app.includes(copy), `Missing copy: ${copy}`)
  assert.doesNotMatch(app, /mailto:|href=.*Capô Aberto/)
})

test('provides complete English, Portuguese, and Spanish localization controls', () => {
  assert.match(app, /const languages = \['en', 'pt-BR', 'es'\] as const/)
  for (const copy of translatedCopy) assert.ok(app.includes(copy), `Missing translation: ${copy}`)
  assert.match(app, /aria-current=\{language === value \? 'true' : undefined\}/)
  assert.match(app, /value === 'pt-BR' \? 'PT' : value\.toUpperCase\(\)/)
  assert.match(app, /document\.documentElement\.lang = language/)
  assert.match(app, /localStorage\.getItem\(languageStorageKey\)/)
  assert.match(app, /localStorage\.setItem\(languageStorageKey, value\)/)
  assert.match(app, /catch \{\}/)
  assert.match(html, /<html lang="en">/)
})

test('persists an accessible explicit theme and follows system preference by default', () => {
  assert.match(app, /localStorage\.getItem\(themeStorageKey\)/)
  assert.match(app, /localStorage\.setItem\(themeStorageKey, nextTheme\)/)
  assert.match(app, /matchMedia\('\(prefers-color-scheme: dark\)'\)/)
  assert.match(app, /document\.documentElement\.dataset\.theme = theme/)
  assert.match(app, /aria-label=\{copy\.switchTheme\[nextTheme\]\}/)
  assert.match(app, /title=\{copy\.switchTheme\[nextTheme\]\}/)
  assert.match(app, /className="theme-icon" aria-hidden="true"/)
  assert.match(styles, /:root\[data-theme="light"\]/)
  assert.match(styles, /--contact-action-bg: #075e49/)
})

test('provides core accessibility contracts', () => {
  assert.match(app, /className="skip-link" href="#main"/)
  assert.match(app, /<main id="main">/)
  assert.match(app, /<nav aria-label=\{copy\.primaryNavigation\}>/)
  assert.match(app, /role="img" aria-labelledby="orbit-title orbit-description"/)
  assert.match(styles, /:focus-visible/)
  assert.match(styles, /min-height: 44px/)
  assert.match(styles, /prefers-reduced-motion: reduce/)
})
