export function createHeader(): string {
  return `
    <header class="header">
      <nav class="nav">
        <div class="nav-logo">NK</div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  `;
}
