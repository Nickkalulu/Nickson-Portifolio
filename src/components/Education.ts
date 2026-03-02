import { portfolioData } from "../data/portfolio";

export function createEducationSection(): string {
  return `
    <!-- Education Section -->
    <section id="education" class="section">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-grid">
          ${portfolioData.education
            .map(
              (edu) => `
            <div class="education-card">
              <h3 class="education-degree">${edu.degree}</h3>
              <p class="education-school">${edu.school}</p>
              <span class="education-year">${edu.year}</span>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
