# Deployment

This document describes how the project is deployed and the steps to reproduce or troubleshoot deployments.

Overview

- Source: GitHub repository (this repo)
- CI/CD: Railway is connected to GitHub and automatically deploys commits pushed to the configured branch (usually `main`).
- Hosting: Railway runs the container and serves the site. The custom domain `0xjiggy.me` is configured on Railway and points to the Railway service (DNS via Namecheap).

Railway (GitHub integration)

1. In Railway, connect the GitHub repository and choose the branch to deploy (e.g., `main`).
2. Configure the build settings:
   - Option A (Dockerfile): set Dockerfile path to `/dockerfile.prod` (recommended since this repo contains `dockerfile.prod`).
   - Option B (Build command): set Build Command to `pnpm install --frozen-lockfile && pnpm build` and Start Command to `serve -s dist -l $PORT`.
3. Set environment variables (Railway → Environment). At minimum:
   - `PORT` (Railway provides this automatically on runtime)
   - Any other runtime secrets (API keys, DB credentials) as Railway environment variables
4. Enable automatic deploys so pushes to the selected branch trigger Railway builds and deployments.

Custom domain (Namecheap)

1. In Railway, add the custom domain `0xjiggy.me` to the service.
2. Railway will provide DNS records (usually a CNAME or A records) to verify domain ownership and route traffic.
3. In Namecheap, go to the Domain List → Manage → Advanced DNS (or DNS settings) and add the provided records (CNAME/A) exactly as Railway specifies.
4. Wait for DNS propagation and Railway to verify the domain. Railway will usually provision HTTPS automatically.

How deploys happen in this project

- Commit & push to GitHub → GitHub notifies Railway → Railway runs the configured build (Dockerfile or build commands) → Railway deploys the container → Railway notifies DNS / serves via custom domain.
- Because Railway is the deployment platform, you do not need a separate GitHub Action deploy job unless you prefer explicit control via the Railway CLI/API.

Manual deploy (optional)

If you need to trigger a manual deploy or use the Railway CLI from CI:

```bash
# Install railway CLI
npm i -g @railway/cli

# Login locally (interactive)
railway login

# Deploy current branch to Railway
railway up --project <projectId>
```

CI-triggered Railway deploy (alternative)

- Create a GitHub Actions job that runs the Railway CLI using a `RAILWAY_TOKEN` secret and calls `railway up` or calls the Railway API to trigger a deploy. This is optional since Railway auto-deploys on push.

Troubleshooting

- Build failures: check Railway build logs — common issues are missing build dependencies or wrong Dockerfile path.
- Domain issues: verify DNS records on Namecheap and check Railway domain verification logs.
- Environment variables: ensure required variables are set in Railway Environment, not hardcoded in the repo.

Security

- Store secrets in Railway environment variables, not in the Git repo. For CI workflows, store tokens in GitHub Secrets.
