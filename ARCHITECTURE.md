# Architecture Overview

ASCII diagram

```
Developer (local)
  └─> GitHub (push)
        └─> Railway (connected to repo)
              ├─ runs build (dockerfile.prod or build command)
              ├─ deploys container
              └─ serves at custom domain (0xjiggy.me) via Namecheap DNS

Optional:
  └─> Docker Hub (xjiggy/terminal-portfolio)  (image pushed for traceability)
        └─> Railway can pull image from Docker Hub (alternative deploy method)
```

Components

- Frontend: React (Vite) — builds static `dist`
- Containerization: multi-stage `dockerfile.prod` builds static site and uses `serve` to run it
- CI/CD: GitHub → Railway automatic deploys (configured branch)
- Hosting: Railway (managed), custom domain served through Namecheap DNS
- Image registry: Docker Hub (optional, `xjiggy/terminal-portfolio`)

Data flow

- Developer pushes code → GitHub → Railway triggers build → Docker image built or `dist` served → Railway deploys container → DNS (Namecheap) routes domain to Railway service → Users access `0xjiggy.me`.
