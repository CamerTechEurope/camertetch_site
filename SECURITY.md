# Security Policy

CamerTech Europe takes the security of this website and of the people who visit it seriously.
This policy tells security researchers and users how to report a vulnerability and what to expect
from us. It is modelled on the policies of established open-source projects such as
[Keycloak](https://github.com/keycloak/keycloak/blob/main/SECURITY.md) and the
[CISA vulnerability disclosure policy template](https://www.cisa.gov/vulnerability-disclosure-policy-template).

## Scope

This policy covers the source code in this repository and the public website deployed from it
(`https://ourdomain.com`). Third-party services that the site links to are out of scope; please
report issues in those to their respective owners.

## Supported versions

Security fixes are applied to the `main` branch and deployed to the live site. There are no
long-term-support branches; the latest deployment is the only supported version.

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues, discussions, or
pull requests.**

Report privately through one of these channels:

1. **GitHub private vulnerability reporting (preferred)** —
   [open a draft security advisory](https://github.com/CamerTechEurope/camertetch_site/security/advisories/new).
2. **Email** — `security@ourdomain.com`. If you need to encrypt your report, ask us for a public
   key on that address first.

### What to include

To help us triage quickly, please provide:

- A description of the vulnerability and its potential impact.
- The affected URL, page, or file and the commit/version you tested against (ideally the latest
  deployment or the `main` branch).
- Clear steps to reproduce, or a minimal proof of concept. Log output or text is preferred over
  screenshots and videos.
- Any suggested mitigation, if you have one.
- Your name/handle if you would like to be credited (see _Attribution_ below).

Submit **one finding per report** so each issue can be tracked and discussed separately.

### What to expect

- We will acknowledge your report within **7 business days**.
- We will keep you informed while we confirm the issue, assess its severity, and prepare a fix.
- We ask that you give us a reasonable amount of time to remediate before any public disclosure,
  and that you coordinate the disclosure date with us.
- We will not take legal action against researchers who act in good faith, follow this policy,
  avoid privacy violations and service disruption, and do not exfiltrate or modify data beyond
  what is needed to demonstrate the issue.

### Attribution

With your consent we will credit you in the published security advisory (name or alias, and
optionally company and GitHub username). We do not publish email addresses.

### Bug bounty

There is currently no bug bounty programme.

## Automated scanners and AI-assisted reports

- Raw output from automated security scanners will **not** be accepted. Please triage the
  finding yourself and show how it applies to this project.
- Reports produced with the help of AI tools are welcome, provided you have **validated** the
  finding, can explain it in your own words, and disclose that AI was used. Unreviewed AI output
  will be closed without analysis.

## Third-party dependency vulnerabilities

Known CVEs in dependencies (as reported by `npm audit`, Dependabot, or similar) are **not**
secrets. Open a regular [GitHub issue](https://github.com/CamerTechEurope/camertetch_site/issues/new/choose)
or a pull request that bumps the dependency.

## Security practices in this repository

- Dependabot keeps npm and GitHub Actions dependencies up to date.
- CodeQL scans JavaScript/TypeScript and workflow files on every pull request.
- Dependency Review blocks pull requests that introduce known-vulnerable packages.
- OpenSSF Scorecard runs weekly and publishes its results to the Security tab.
- Workflows request the minimum `GITHUB_TOKEN` permissions and pin actions to full commit SHAs.
- The site sends hardening HTTP headers (CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`); see `next.config.ts`.
