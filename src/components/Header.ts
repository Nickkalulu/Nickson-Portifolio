export function createHeader(): string {
  return `
    <header class="header">
      <nav class="nav">
        <a href="#home" class="nav-logo">Nickson Kalulu</a>
        
        <ul class="nav-links">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#experience" class="nav-link">Experience</a></li>
          <li><a href="#education" class="nav-link">Education</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        
        <div class="nav-actions">
          <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
            <span class="theme-icon dark-icon">🌙</span>
            <span class="theme-icon light-icon">☀️</span>
          </button>
        </div>
        
        <div class="nav-toggle" id="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  `;
}
