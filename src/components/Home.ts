import { portfolioData } from "../data/portfolio";

export function createHomeSection(): string {
  return `
    <!-- Home Section -->
    <section id="home" class="hero">
      <div class="hero-container">
        <div class="hero-left">
          <h1 class="hero-name">${portfolioData.name}</h1>
          <h2 class="hero-title">${portfolioData.title}</h2>
          <div class="hero-about">
            <p class="about-description">${portfolioData.profile}</p>
          </div>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="/resume.pdf" class="btn btn-resume" download>Download Resume</a>
          </div>
        </div>
        <div class="hero-right">
          <div class="profile-image">
            <img src="/profile.jpg" alt="${portfolioData.name}" />
          </div>
        </div>
      </div>
    </section>
  `;
}
