customElements.define('my-button', class extends HTMLElement {
  constructor () {
    super();
    this.innerText = 'my button';
    this.addEventListener('click', () => alert('clicked'), false);
  }
}, {extends: 'button'});