import { portfolioData } from "../data/portfolio";

export function createFooter(): string {
  return `
    <footer class="footer">
      <p>© ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.</p>
    </footer>
  `;
}
