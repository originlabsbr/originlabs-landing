# Origin Labs landing

Minimal static company landing built with React, TypeScript, and Vite.

## Local development

Requires Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Available checks:

```bash
npm test
npm run typecheck
npm run build
npm run preview
```

## Architecture

The application is one static React page. `src/App.tsx` owns semantic content and the accessible inline SVG. `src/styles.css` owns the responsive editorial layout, visual system, and reduced-motion behavior. Vite emits deployable files to `dist/`. No API, environment variables, client-side router, or runtime configuration is required.

## Docker

Build and run the production image:

```bash
docker build -t originlabs-landing .
docker run --rm -p 8080:80 originlabs-landing
```

The image uses a Node build stage and serves static output from nginx. nginx provides SPA fallback, immutable caching for hashed assets, no-cache HTML, gzip, and baseline security headers.

CI publishes `ghcr.io/originlabsbr/originlabs-landing` only from protected delivery branches:

- `develop` receives the `develop` channel tag and a full commit SHA tag.
- `main` receives the `latest` channel tag and a full commit SHA tag.

## Homelab handoff

Add these files to the homelab repository:

```text
apps/originlabs-landing/deployment.yaml
apps/originlabs-landing/service.yaml
apps/originlabs-landing/ingress.yaml
argocd/app-originlabs-landing.yaml
```

Use the existing platform namespace file rather than creating another namespace manifest. Reference `ghcr.io/originlabsbr/originlabs-landing:<TAG>` from the deployment. Set the ingress host by replacing `<PUBLIC_HOSTNAME>` with the approved public domain. No ready-to-apply hostname is provided here because the public domain is an infrastructure decision.
