# Testing

```bash
npm test
npm run typecheck
npm run build
docker build -t originlabs-landing:test .
```

`tests/landing.test.js` covers content, locale switching, and theme behavior. New behavior needs new tests; do not weaken a test to make a change pass.
