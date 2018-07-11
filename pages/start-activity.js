import { preCreate } from '../services/order-service.js';

window.customElements.define('start-activity', class extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({mode: 'open'});
    const style = document.createElement('style');
    style.textContent = `
    :host {display: block; height:100%;} 
    button {width: 100px;height:44px;line-height:44px;background: red;}
    `;
    this.appendChild(style);
    const btn = document.createElement('button');
    btn.addEventListener('click', () => preCreate(), false);
    btn.textContent = 'Click Me';
    this.appendChild(btn);
  }
});