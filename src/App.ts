import { createHeader } from "./components/Header";
import { createHomeSection } from "./components/Home";
import { createSkillsSection } from "./components/Skills";
import { createProjectsSection } from "./components/Projects";
import { createExperienceSection } from "./components/Experience";
import { createEducationSection } from "./components/Education";
import { createContactSection } from "./components/Contact";
import { createFooter } from "./components/Footer";

function createApp() {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
    ${createHeader()}

    <main>
      ${createHomeSection()}
      ${createSkillsSection()}
      ${createProjectsSection()}
      ${createExperienceSection()}
      ${createEducationSection()}
      ${createContactSection()}
    </main>

    ${createFooter()}
  `;

  // Add smooth scrolling for navigation links
  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

  // Add mobile navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  }

  // Add scroll effect to header
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
}

export default createApp;
