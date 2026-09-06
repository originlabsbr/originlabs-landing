# Contributing to Origin Labs landing

Thank you for considering a contribution!

## Getting Started

1. Fork the repository.
2. Follow the [Development Setup](./docs/development/setup.md) guide (`npm ci`, `npm run dev`).
3. Skim the [System Overview](./docs/architecture/overview.md) so your change fits the existing design.

## What to Work On

- Check the open [GitHub Issues](https://github.com/originlabsbr/originlabs-landing/issues).
- Copy changes must keep all three languages (English, Brazilian Portuguese, Spanish) in sync.
- Bug reports: include steps to reproduce, expected vs. actual behavior, and browser/OS.

## Branch Model

This repo uses GitFlow. `develop` is the integration branch; `main` is stable and deployable; all work happens on short-lived branches off `develop`.

| Branch | Purpose | Merges into |
|--------|---------|-------------|
| `main` | Stable. Every push builds and publishes images. | (release target) |
| `develop` | Integration branch. Topic branches merge here first. | `main` via release PR |
| `feat/*` | New features. Branch from `develop`. | `develop` via PR |
| `fix/*` | Bug fixes. Branch from `develop`. | `develop` via PR |
| `docs/*` | Documentation only. | `develop` via PR |
| `chore/*` | Deps, CI, tooling. | `develop` via PR |

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/). Do not add AI attribution or co-author footers. Never use em dashes in generated project text.

## Code Style

- **TypeScript strict, no `any`.**
- **Static only.** No API, router, or runtime configuration.
- **Trilingual.** Every user-facing string ships in English, Brazilian Portuguese, and Spanish.
- **Accessible.** Semantic landmarks, keyboard focus, reduced motion.
- **No secrets in code.**

## Tests Are Required

Before pushing:

```bash
npm test
npm run typecheck
npm run build
docker build -t originlabs-landing:test .
```

New behavior needs new tests. See [docs/testing.md](./docs/testing.md).

## Pull Request Process

1. Branch from `develop` (`feat/*`, `fix/*`, `docs/*`, ...).
2. Ensure `npm test`, `npm run typecheck`, and `npm run build` all pass.
3. Confirm no secrets or `.env` files are committed.
4. Open a PR targeting `develop`. Assign **@mateuseap** as reviewer.
5. Give the PR a clear title (Conventional Commits style) and a description with `#### Changes made` followed by bullet points.
6. After merge to `develop`, create a release PR from `develop` to `main`.

## Reporting Security Issues

Do not open a public issue for a security vulnerability. Contact **@mateuseap** privately. See [docs/security/security.md](./docs/security/security.md).

## License

By contributing, you agree your contributions are licensed under the [MIT License](./LICENSE).
