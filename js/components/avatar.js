class AvatarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const url = this.getAttribute("img-url");

    this.shadowRoot.innerHTML = `
      <style>
        img {
          border-radius: 1000px;
        }
      </style>
      <img src="${url}" alt="Users picture" />
    `;
  }
}

customElements.define("avatar-img", AvatarComponent);
