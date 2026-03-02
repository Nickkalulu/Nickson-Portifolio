import { portfolioData } from "../data/portfolio";

export function createContactSection(): string {
  return `
    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
          <p class="contact-intro">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
          <div class="contact-links">
            <a href="mailto:${portfolioData.contact.email}" class="contact-item">
              <span>${portfolioData.contact.email}</span>
            </a>
            <a href="tel:${portfolioData.contact.phone}" class="contact-item">
              <span class="contact-icon">📱</span>
              <span>${portfolioData.contact.phone}</span>
            </a>
            <a href="https://github.com/${portfolioData.contact.github}" target="_blank" class="contact-item">
              <span class="contact-icon">🐙</span>
              <span>github.com/${portfolioData.contact.github}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
