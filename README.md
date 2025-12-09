# Terminal Portfolio

A small terminal-style personal portfolio built with React + Vite and styled-components. The app is containerized and deployed via Railway to https://0xjiggy.me. A Docker image is published to Docker Hub as `xjiggy/terminal-portfolio`.

Quick links

- Live: https://0xjiggy.me
- Docker image: https://hub.docker.com/r/xjiggy/terminal-portfolio

Badges

- Build / CI: [![CI — build, test, coverage](https://github.com/AmaimiaGhassan/jiggy-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/AmaimiaGhassan/jiggy-portfolio/actions/workflows/ci.yml)

Getting started (local)

Prerequisites:

- Node 18+, pnpm, Docker (optional)

Run locally (dev):

```bash
pnpm install
pnpm dev
# open http://localhost:5173 (vite default) or the HOST/PORT you configured
```

Build and preview:

```bash
pnpm build
pnpm preview
```

Run with Docker (production image):

```bash
# Build (optional - you already push to Docker Hub)
docker build -f dockerfile.prod -t xjiggy/terminal-portfolio:latest .

# Run (map port 5000 or chosen PORT)
docker run --rm -p 5000:5000 -e PORT=5000 xjiggy/terminal-portfolio:latest
```

Docker Compose (production)

This repo includes a `docker-compose.prod.yml` for running the production service locally.

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Testing

Run tests (Vitest):

```bash
pnpm test:once
```

Repository structure

Important docs in this repo:

- `DEPLOYMENT.md` — how Railway and Namecheap are configured for this project
- `USER_STORIES.md` — required user stories and acceptance criteria
- `ARCHITECTURE.md` — system overview and deployment diagram
- `DOCKER_PUSH.md` — how the image is built and pushed to Docker Hub
- `dockerfile.prod` / `docker-compose.prod.yml` — production container configuration

Notes for graders

- CI/CD: Commits to GitHub are automatically deployed via Railway to the custom domain `0xjiggy.me`.
- Docker: Image `xjiggy/terminal-portfolio:latest` is available on Docker Hub.

If you want, I can add a CI build badge or a GitLab CI equivalent (.gitlab-ci.yml) for the course requirements.
