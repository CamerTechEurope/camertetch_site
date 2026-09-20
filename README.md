# CamerTech Europe — website

[![CI](https://github.com/CamerTechEurope/camertetch_site/actions/workflows/ci.yml/badge.svg)](https://github.com/CamerTechEurope/camertetch_site/actions/workflows/ci.yml)
[![CodeQL](https://github.com/CamerTechEurope/camertetch_site/actions/workflows/codeql.yml/badge.svg)](https://github.com/CamerTechEurope/camertetch_site/actions/workflows/codeql.yml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/CamerTechEurope/camertetch_site/badge)](https://scorecard.dev/viewer/?uri=github.com/CamerTechEurope/camertetch_site)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

The official website of **CamerTech Europe**, the community of Cameroonian tech professionals in
Europe — built with [Next.js 16](https://nextjs.org) (App Router), React 19, TypeScript, and
Tailwind CSS.

🌐 <https://ourdomain.com>

## Getting started

Requirements: Node.js 22 (see [`.nvmrc`](.nvmrc); `>= 20.9` works) and npm.

```bash
npm ci        # install exactly what the lockfile says
npm run dev   # http://localhost:3000
```

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server                 |
| `npm run build`     | Create a production build                    |
| `npm run start`     | Serve the production build                   |
| `npm run lint`      | Run ESLint                                   |
| `npm run typecheck` | Run the TypeScript compiler in check mode    |
| `npm run format`    | Format the codebase with Prettier            |
| `npm run check`     | Lint + typecheck + format check (same as CI) |

## Project layout

```
app/          Routes and layouts (App Router)
components/   UI primitives, layout, and page sections
public/       Static assets (images, video)
```

> **Note for AI coding assistants and contributors:** this is Next.js 16. Conventions differ from
> older releases; read the docs shipped in `node_modules/next/dist/docs/` before changing code.
> See [`AGENTS.md`](AGENTS.md).

## Contributing

Bug reports, suggestions, and pull requests are welcome. Please read
[CONTRIBUTING.md](CONTRIBUTING.md) first — it covers the workflow, commit conventions
(Conventional Commits + DCO sign-off), and what we expect in a PR.

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md) code of conduct.

## Security

Please report vulnerabilities **privately** as described in [SECURITY.md](SECURITY.md) — never in
a public issue. The repository runs CodeQL, Dependency Review, Dependabot, and OpenSSF Scorecard,
and the site ships hardened HTTP headers (see [`next.config.ts`](next.config.ts)).

## License

The **source code** in this repository is released under the [MIT License](LICENSE).

The CamerTech Europe name and logo, and the photographs, videos, and texts under `public/images/`
and in the page content (including images of speakers, members, partners, and events) are
**© CamerTech Europe and their respective owners, all rights reserved**. They are included so the
site can be built and previewed, and may not be reused outside this project without permission.
