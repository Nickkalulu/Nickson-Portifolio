import { portfolioData } from "../data/portfolio";

export function createSkillsSection(): string {
  return `
    <!-- Skills Section -->
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <h3>Frontend</h3>
            <div class="skill-tags">
              ${portfolioData.skills.frontend.map((skill) => `<span class="tag">${skill}</span>`).join("")}
            </div>
          </div>
          <div class="skill-card">
            <h3>Backend</h3>
            <div class="skill-tags">
              ${portfolioData.skills.backend.map((skill) => `<span class="tag">${skill}</span>`).join("")}
            </div>
          </div>
          <div class="skill-card">
            <h3>Databases</h3>
            <div class="skill-tags">
              ${portfolioData.skills.databases.map((skill) => `<span class="tag">${skill}</span>`).join("")}
            </div>
          </div>
          <div class="skill-card">
            <h3>DevOps & Tools</h3>
            <div class="skill-tags">
              ${portfolioData.skills.devops.map((skill) => `<span class="tag">${skill}</span>`).join("")}
            </div>
          </div>
          <div class="skill-card full-width">
            <h3>Architecture</h3>
            <div class="skill-tags">
              ${portfolioData.skills.architecture.map((skill) => `<span class="tag">${skill}</span>`).join("")}
            </div>
          </div>
        </div>
        
        <div class="soft-skills">
          <h3>Soft Skills</h3>
          <ul class="soft-skills-list">
            ${portfolioData.softSkills.map((skill) => `<li>${skill}</li>`).join("")}
          </ul>
        </div>
        
        <div class="other-skills">
          <h3>Other Skills</h3>
          <ul class="other-skills-list">
            ${portfolioData.otherSkills.map((skill) => `<li>${skill}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
  `;
}
