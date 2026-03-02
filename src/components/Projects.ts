import { portfolioData } from "../data/portfolio";

export function createProjectsSection(): string {
  return `
    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          ${portfolioData.projects
            .map(
              (project) => `
            <div class="project-card">
              <h3 class="project-title">${project.name}</h3>
              <p class="project-tech">${project.techStack}</p>
              <ul class="project-description">
                ${project.description.map((desc) => `<li>${desc}</li>`).join("")}
              </ul>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
