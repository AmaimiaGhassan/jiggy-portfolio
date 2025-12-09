# User Stories

Below are 10 user stories for the terminal-style portfolio app. Each story includes acceptance criteria and a priority.

1) As a Visitor, I want to view an introductory welcome message so that I immediately understand the site purpose.
- Acceptance: Visiting the root shows a welcome message and a short description. Priority: High

2) As a Visitor, I want to view a list of projects so that I can see what the developer built.
- Acceptance: Projects command or Projects page lists projects with title, short description, and link. Priority: High

3) As a Visitor, I want to view detailed project information so that I can learn more about a specific project.
- Acceptance: Selecting a project shows details (technologies, links to repo/demo). Priority: High

4) As a Visitor, I want to view the developer's resume/education so that I can assess their qualifications.
- Acceptance: An Education or Resume command displays education and certifications. Priority: Medium

5) As a Visitor, I want to email the developer from a displayed contact address so that I can reach out.
- Acceptance: Email command shows contact email and optionally copies it to clipboard or opens mailto link. Priority: Medium

6) As a Visitor, I want a theme switcher so that I can toggle light/dark preferences.
- Acceptance: Themes are toggleable via `themes` command and persist across sessions (localStorage). Priority: Low

7) As a Visitor, I want a `help` command that lists available commands so that I can navigate the app quickly.
- Acceptance: `help` prints all commands and short descriptions. Priority: High

8) As a Visitor, I want the terminal to remember my command history so that I can use up/down to traverse recent commands.
- Acceptance: Command history is preserved in session (or localStorage) and accessible via arrows. Priority: Low

9) As a Visitor, I want the app to be responsive and accessible so that I can use it on mobile and screen readers.
- Acceptance: Layout adjusts for small screens; semantic HTML and ARIA attributes are present. Priority: Medium

10) As a Developer, I want unit tests covering core components so that code changes are safe.
- Acceptance: Tests run in CI, with coverage >= 60%. Priority: High

Notes

- Add acceptance-tests or manual test cases that map to these stories. These stories can be converted into issues and linked to milestones for the course.
