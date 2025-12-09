# Project Specifications - DevOps CI/CD
## GitLab Pipeline with Agile Project Management

---

## I. Context and Objectives

Implementation of an automated continuous deployment pipeline integrating collaborative work practices and agile project management.

**Objectives:**
- Automate build, test, and deployment
- Apply collaborative Git workflow
- Use agile methodology
- Containerize application with Docker
- Deploy to cloud environment

---

## II. Organization

### Teams
- **Groups of 2 to 4 people maximum**
- Designation of a project leader (Product Owner)
- Balanced task distribution

### ⚠️ Mandatory GitLab Configuration
**Add the instructor as Owner of the project:**
- **GitLab Email:** benissasonia@gmail.com
- **Role:** Owner (for full repository access and evaluation)

---

## III. Mandatory Technologies

- GitLab CI/CD (project management + pipeline)
- Docker / Docker Compose
- Git (collaborative workflow)
- Language of choice: Node.js, Python, Java, C++, etc.
- Deployment platform: AWS, Kubernetes, Heroku, or other

---

## IV. Project Requirements

### 1. Planning and Project Management (4 points)

**User Stories:**
- Create 8-12 user stories in format: "As a [role], I want [action] so that [benefit]"
- Add acceptance criteria
- Prioritize (High/Medium/Low)

**Issues and Organization:**
- Create technical issues linked to user stories
- Use milestones (Week 1, 2, 3)
- Labels: `feature`, `bug`, `documentation`, `ci/cd`, `test`
- Kanban board with columns: Backlog → To Do → In Progress → Done

---

### 2. Git Workflow and Collaboration (4 points)

**Branching Strategy:**
- `main`: production (protected)
- `develop`: integration (protected)
- `feature/*`: new features
- `hotfix/*`: urgent fixes

**Collaboration Rules:**
- ❌ No direct push to `main` or `develop`
- ✅ Merge only via Merge Request (MR)
- ✅ At least 1 code review per MR
- ✅ CI pipeline must pass before merge

**Commit Convention:**
Use Conventional Commits:
```
feat(scope): add feature X
fix(api): fix bug Y
docs(readme): update documentation
ci(pipeline): add security stage
```

**Requirements per Member:**
- Minimum 10 significant commits
- Minimum 2 Merge Requests created
- Minimum 2 Code Reviews performed

---

### 3. Application and Containerization (3 points)

**Application:**
- Functional application of your choice
- Database (PostgreSQL, MongoDB, MySQL, etc.)
- Unit tests (coverage > 60%)
- REST API or web interface

**Docker:**
- Optimized Dockerfile (multi-stage recommended)
- docker-compose.yml with all services (app + db)
- Environment variables management
- Volumes for data persistence

---

### 4. CI/CD Pipeline (4 points)

**Minimum 3 mandatory stages:**

```yaml
stages:
  - build    # Compilation and image building
  - test     # Automated tests
  - deploy   # Automatic deployment
```

**Requirements:**
- Automated tests that pass
- Artifacts saved
- Cache for optimization
- CI/CD variables configured (no hardcoded secrets)
- Build status badge in README

---

### 5. Deployment (4 points)

**Environment:**
- Deployment to AWS, Kubernetes, Google Cloud, Heroku, or other
- Application accessible via public URL
- Automatic deployment from pipeline
- Variables and secrets managed securely

**Documentation:**
- Deployment procedure in DEPLOYMENT.md
- Access URL provided
- Test credentials if necessary

---

### 6. Documentation and Quality (1 point + 2 bonus)

**Mandatory Documentation (1 point):**

**README.md must contain:**
- Project description
- Team members and roles
- Architecture (diagram recommended)
- Installation and launch (Docker + local)
- Required environment variables
- Test execution
- Deployed application URL
- Build status badge

**Additional Files:**
- `ARCHITECTURE.md`: technical architecture
- `DEPLOYMENT.md`: deployment guide
- `USER_STORIES.md`: list of user stories

**Bonus (2 additional points):**

**DevSecOps Security (+1 pt):**
- Vulnerability scanning (Trivy, Snyk)
- Docker image scanning
- SAST (static code analysis)
- Secrets scanning

**Monitoring and Observability (+1 pt):**
- Prometheus + Grafana
- Centralized logs (ELK, Loki)
- Advanced health checks
- Dashboards and alerting

---

## V. Deliverables and Submission

### Repository Structure

```
project-root/
├── .gitlab-ci.yml
├── docker-compose.yml
├── Dockerfile
├── README.md
├── ARCHITECTURE.md
├── DEPLOYMENT.md
├── USER_STORIES.md
├── src/
├── tests/
└── .env.example
```

### Submission

**Deadline:** End of Week 3

**To provide:**
1. Accessible GitLab repository (Owner added)
2. Deployed application URL
3. Complete and up-to-date documentation

**⚠️ IMPORTANT: Add benissasonia@gmail.com as Owner of the GitLab project**

---

## VI. Grading Scale

### Grade out of 20 points

| Criteria | Points |
|---------|--------|
| **Collaborative Work and Git** | 4 pts |
| Branching, MR, code reviews, commits | |
| **Docker Containerization** | 5 pts |
| Dockerfile, docker-compose, configuration | |
| **Basic CI/CD Pipeline** | 5 pts |
| 3+ stages, tests, artifacts, deployment | |
| **Environment Deployment** | 5 pts |
| AWS/K8s/Cloud, accessible URL, automated | |
| **Documentation and Quality** | 1 pt |
| README, basic guides | |
| **BONUS: Security** | +1 pt |
| Scans, SAST, secrets management | |
| **BONUS: Monitoring** | +1 pt |
| Prometheus, logs, dashboards, alerting | |

**Total: 20 points (18 mandatory points + 2 bonus points)**

**Note:** The 2 bonus points allow compensation for any shortcomings or achieving excellence (maximum grade 20/20).

---

## VII. 3-Week Schedule

### Week 1: Foundations
- Team formation and GitLab Owner addition
- User stories and issues
- Containerized application
- Basic pipeline (3 stages)
- First commits and MRs

### Week 2: Development
- Main features
- Complete and optimized pipeline
- Automated tests (>60% coverage)
- Automatic deployment
- Active code reviews

### Week 3: Finalization
- Bonus implementation (optional)
- Complete documentation
- Non-regression testing
- All criteria verification
- Validation preparation

---

## VIII. Important Points

### ✅ Must Do

- **Add benissasonia@gmail.com as Owner** upon project creation
- Protect `main` and `develop` branches
- Make MRs with reviews (no direct push)
- Document as you go
- Test pipeline regularly
- Verify deployed application is accessible

### ❌ To Avoid

- Working individually without MRs
- Hardcoded secrets or passwords in code
- Last-minute documentation
- Neglecting unit tests
- Ignoring issues and Kanban board
- Failing pipeline without fixes

### 💡 Tips

- Commit often with clear messages
- Use comments in MRs for discussions
- Update Kanban board regularly
- Test Docker locally before pushing
- Keep README up-to-date constantly
- Communicate as a team (Discord, Slack, etc.)

---

## IX. Final Checklist

### Before Submission

**GitLab:**
- [ ] Repository accessible with benissasonia@gmail.com as Owner
- [ ] 8-12 user stories created
- [ ] Issues organized with labels and milestones
- [ ] Kanban board up-to-date
- [ ] Protected branches

**Git:**
- [ ] Minimum 10 commits per member
- [ ] Minimum 2 MRs per member with reviews
- [ ] Commit convention followed
- [ ] Clean Git history

**Application:**
- [ ] Functional application
- [ ] Tests > 60% coverage
- [ ] Docker Compose operational
- [ ] Environment variables configured

**Pipeline:**
- [ ] Valid .gitlab-ci.yml
- [ ] 3+ functional stages
- [ ] Automated tests passing
- [ ] Artifacts generated
- [ ] Recent pipelines green ✅

**Deployment:**
- [ ] Application deployed and accessible
- [ ] URL provided in README
- [ ] Automatic deployment via CI/CD

**Documentation:**
- [ ] Complete README.md with badge
- [ ] ARCHITECTURE.md
- [ ] DEPLOYMENT.md
- [ ] USER_STORIES.md

**Bonus (optional):**
- [ ] Security: scans and SAST
- [ ] Monitoring: metrics and logs

---

## X. Contact

**Module Coordinator:** Sonia Ben Aissa  
**Email:** benissasonia@gmail.com

### FAQ

**Q: How many members per group?**
A: 3 to 4 people maximum.

**Q: How to add the instructor to the project?**
A: GitLab → Settings → Members → Invite member → benissasonia@gmail.com → Owner

**Q: Is security mandatory?**
A: No, it's a bonus (+1 point).

**Q: Which platform for deployment?**
A: AWS, Kubernetes, Heroku, Google Cloud, or other of your choice.

**Q: How to prove each member's work?**
A: Via Git history, MRs, and code reviews visible on GitLab.

---

**Good luck with your project!** 🚀