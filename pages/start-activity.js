import { preCreate } from '../services/order-service.js';

customElements.define('start-activity', class extends HTMLElement {
  constructor () {
    super();
    this.state = {
      text: 'Hello',
    };
    this.attachShadow({mode: 'open'});
    this.innerHTML = `
      <h1>${this.state.text}</h1>
      <button id="btn"></button>
    `;
    this.querySelector('#btn').
      addEventListener('click', () => preCreate(), false);
  }
});