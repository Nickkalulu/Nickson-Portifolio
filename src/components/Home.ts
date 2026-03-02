import { portfolioData } from "../data/portfolio";

export function createHomeSection(): string {
  return `
    <!-- Home Section -->
    <section id="home" class="hero">
      <div class="hero-container">
        <div class="hero-left">
          <h1 class="hero-name">${portfolioData.name}</h1>
          <p class="hero-title">${portfolioData.title}</p>
          <div class="hero-about">
            <p class="about-description">${portfolioData.profile}</p>
          </div>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div class="hero-right">
          <div class="profile-image">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nickson" alt="${portfolioData.name}" />
          </div>
        </div>
      </div>
    </section>
  `;
}
