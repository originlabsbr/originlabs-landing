import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')

const requiredCopy = [
  "Build what&apos;s next.", 'Same curiosity. Bigger possibilities.', 'Product engineering',
  'AI systems', 'Platforms and infrastructure', 'Data and automation', 'Ideas', 'Engineering',
  'Real impact', 'Capô Aberto', 'In progress',
  'Vehicle history reports built to make used-car decisions clearer.',
  'More work will appear here as it ships.', 'Have something worth building?',
  'CNPJ 68.033.263/0001-30',
]

test('renders required landing content and honest work state', () => {
  for (const copy of requiredCopy) assert.ok(app.includes(copy), `Missing copy: ${copy}`)
  assert.doesNotMatch(app, /mailto:|href=.*Capô Aberto/)
})

test('provides core accessibility contracts', () => {
  assert.match(app, /className="skip-link" href="#main"/)
  assert.match(app, /<main id="main">/)
  assert.match(app, /<nav aria-label="Primary navigation">/)
  assert.match(app, /role="img" aria-labelledby="orbit-title orbit-description"/)
  assert.match(styles, /:focus-visible/)
  assert.match(styles, /min-height: 44px/)
  assert.match(styles, /prefers-reduced-motion: reduce/)
})
