import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CyberChad extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--cyber-chad-background-color);
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
 <div>paste html</div>
    `;
  }
}

customElements.define('cyber-chad', CyberChad);