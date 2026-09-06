# Contributing

## Setup

Use Node.js 24 and install the locked dependencies:

```bash
npm ci
npm run dev
```

## Before submitting changes

Run the same checks used by CI:

```bash
npm test
npm run typecheck
npm run build
docker build -t originlabs-landing:test .
```

Keep the site static, accessible, concise, and free of invented company claims or contact details. Use Conventional Commits for commit messages.
