import { portfolioData } from "../data/portfolio";

export function createSkillsSection(): string {
  return `
    <!-- Skills Section -->
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <h3>Frontend Development</h3>
            <ul class="skill-list">
              ${portfolioData.skills.frontend.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
          </div>
          <div class="skill-card">
            <h3>Backend Development</h3>
            <ul class="skill-list">
              ${portfolioData.skills.backend.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
          </div>
          <div class="skill-card">
            <h3>Databases</h3>
            <ul class="skill-list">
              ${portfolioData.skills.databases.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
          </div>
          <div class="skill-card">
            <h3>DevOps & Tools</h3>
            <ul class="skill-list">
              ${portfolioData.skills.devops.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
          </div>
          <div class="skill-card">
            <h3>Architecture & Design Patterns</h3>
            <ul class="skill-list">
              ${portfolioData.skills.architecture.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
          </div>
          <div class="skill-card">
            <h3>Other Skills</h3>
            <ul class="skill-list">
              ${portfolioData.otherSkills.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
          </div>
        </div>
        

      </div>
    </section>
  `;
}
