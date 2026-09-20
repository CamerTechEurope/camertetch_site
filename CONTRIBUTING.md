# Contributing to the CamerTech Europe website

Thank you for your interest in contributing! This document explains how to report problems,
propose changes, and get a pull request merged. Please also read our
[Code of Conduct](CODE_OF_CONDUCT.md).

## Table of contents

- [Ways to contribute](#ways-to-contribute)
- [Before you start](#before-you-start)
- [Development setup](#development-setup)
- [Making changes](#making-changes)
- [Commit messages](#commit-messages)
- [Developer Certificate of Origin](#developer-certificate-of-origin)
- [Pull requests](#pull-requests)
- [Security](#security)

## Ways to contribute

- **Report a bug** — open a [bug report](https://github.com/CamerTechEurope/camertetch_site/issues/new/choose).
- **Suggest an improvement** — open a [feature request](https://github.com/CamerTechEurope/camertetch_site/issues/new/choose).
- **Fix typos, copy, or content** — small, obvious fixes can go straight to a pull request.
- **Contribute code** — see below.

## Before you start

1. **Search first.** Check existing issues and pull requests to avoid duplicates. If you find an
   existing issue, add a 👍 or a comment with new information rather than opening a new one.
2. **Discuss larger changes.** For anything beyond a small fix (new sections, new pages, design
   changes, new dependencies), open an issue first so the approach can be agreed before you invest
   time in it.
3. **Every non-trivial PR should reference an issue.** This keeps the history and changelog useful.
4. **Never commit secrets** — API keys, webhook URLs, `.env` files, member data, or production
   configuration. If you need a service credential to test locally, keep it in `.env.local`
   (git-ignored).

## Development setup

Requirements:

- Node.js 22 (see [`.nvmrc`](.nvmrc); any version `>= 20.9` works)
- npm (ships with Node.js)

```bash
git clone https://github.com/CamerTechEurope/camertetch_site.git
cd camertetch_site
npm ci
npm run dev
```

Open <http://localhost:3000>.

Useful scripts:

| Command                | What it does                                      |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the development server                      |
| `npm run build`        | Production build (also run by CI)                 |
| `npm run start`        | Serve the production build                        |
| `npm run lint`         | ESLint (Next.js + React Hooks + TypeScript rules) |
| `npm run typecheck`    | TypeScript type check                             |
| `npm run format`       | Format with Prettier                              |
| `npm run format:check` | Verify formatting without writing                 |
| `npm run check`        | Lint + typecheck + format check (what CI runs)    |

This is a **Next.js 16** project using the App Router. Several APIs and conventions differ from
older versions; when in doubt, consult the docs shipped with the installed version in
`node_modules/next/dist/docs/` rather than older tutorials.

## Making changes

1. Fork the repository and create a branch from `main`:
   `git switch -c feat/short-description` (or `fix/…`, `docs/…`, `chore/…`).
2. Keep each pull request focused on **one** change. Do not reformat or refactor code that is
   unrelated to your change — send that as a separate PR.
3. Preserve accessibility (semantic HTML, keyboard navigation, alt text, colour contrast),
   responsiveness, and the existing visual language. Check both light and dark themes.
4. Do not add dependencies without discussing it in the issue first. New dependencies must be
   actively maintained and free of known vulnerabilities (`npm audit`).
5. Run `npm run check` and `npm run build` before pushing.

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <short summary>

<optional body: what and why, not how>

Closes #123
Signed-off-by: Your Name <you@example.com>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.
Append `!` after the type/scope for breaking changes.

Examples:

- `feat(events): add 2026 speaker line-up`
- `fix(navbar): keep menu open on iOS Safari`
- `chore(deps): bump next to 16.3.5`

Pull requests are squash-merged, so the PR title should itself be a valid Conventional Commit
subject.

## Developer Certificate of Origin

Contributions must only contain code that you have the right to submit under this project's
[MIT license](LICENSE). We use the [Developer Certificate of Origin](https://developercertificate.org/)
(DCO) to record this: sign off every commit with `git commit --signoff` (or `-s`), which adds a
`Signed-off-by:` trailer with your name and email.

```bash
git commit -s -m "fix(footer): correct LinkedIn link"
```

If you forget, amend with `git commit --amend -s --no-edit` or rebase with `git rebase --signoff`.

## Pull requests

- Fill in the [pull request template](.github/pull_request_template.md): what changed, why, how
  you tested it, and screenshots for anything visual (light and dark theme, mobile and desktop).
- Link the related issue with `Closes #<number>`.
- All CI checks (lint, typecheck, format, build, CodeQL, dependency review) must pass.
- A maintainer will review your PR. Please respond to review comments; PRs with no activity for
  30 days may be closed (you can always reopen or resubmit).
- Maintainers may ask you to squash or rebase; keep your branch rebased on `main`
  (`git rebase main`, not `git merge`).

### Content contributions

Text, photos, and logos of partners, speakers, and members are **not** covered by the MIT license
(see [README › License](README.md#license)). Only submit images and content you have permission
to publish, and say so in the PR description.

## Security

Do **not** open public issues for security vulnerabilities. Follow the
[security policy](SECURITY.md) instead.
