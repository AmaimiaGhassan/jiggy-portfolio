# Building and pushing the Docker image
```markdown
# Building and pushing the Docker image

This project includes a production multi-stage Dockerfile at `dockerfile.prod` that builds the app and serves the static `dist` using the `serve` package.

Local build and push (image owner is `xjiggy`):

1. Build the image locally:

   docker build -f dockerfile.prod -t xjiggy/terminal-portfolio:latest .

2. Log in to Docker Hub (runs an interactive login):

   docker login

3. Push the image:

   docker push xjiggy/terminal-portfolio:latest

Notes about CI / GitHub Actions

- A GitHub Actions workflow was added at `.github/workflows/docker-publish.yml` that will build and push to Docker Hub on pushes to `main`.
- To enable the workflow, set the following repository secrets:
  - `DOCKERHUB_USERNAME` — your Docker Hub username (the workflow uses this secret for login)
  - `DOCKERHUB_TOKEN` — a Docker Hub access token (or password). For security, prefer a token.

The workflow is preconfigured to push images to `xjiggy/terminal-portfolio:latest` and a commit-specific tag `${{ github.sha }}`.

If you want a different image name, edit the workflow to change the `tags` lines.

If you'd like, I can also:
- Build and push the image from this environment (requires Docker and your credentials), or
- Update `README.md` with a short Docker usage section.

```
