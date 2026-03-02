import { portfolioData } from "../data/portfolio";

export function createExperienceSection(): string {
  return `
    <!-- Experience Section -->
    <section id="experience" class="section">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          ${portfolioData.experience
            .map(
              (exp) => `
            <div class="timeline-item">
              <div class="timeline-header">
                <h3 class="timeline-title">${exp.title}</h3>
                <span class="timeline-company">${exp.company}</span>
                <span class="timeline-period">${exp.period}</span>
              </div>
              <ul class="timeline-content">
                ${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
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
