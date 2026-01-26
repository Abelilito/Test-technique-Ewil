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
    const variant = this.getAttribute("variant" || "default");
    let className;

    if (variant === "column") {
      className = "column"
    } else {
      className = "default"
    }

    this.shadowRoot.innerHTML = `
      <style>
        img {
          border-radius: 1000px;
        }

        .avatar-component {
          display: flex;
          gap: 1rem;
        }

        .default {
          align-items: center;
        }

        .column {
          flex-direction: column;
          width: max-content;
          justify-content: center;
        }

        .column div {
          text-align: center;
        }

        .column img {
          widht: 6.2rem;
          height: 6.2rem;
        }

        .column img {
          widht: 4rem;
          height: 4rem;
          border: 3px solid white;
        }
      </style>
      
      <div class="avatar-component ${className}">
        <img src="${url}" alt="Users picture" />
        <div>
          texte
        </div>
      </div>
    `;
  }
}

customElements.define("avatar-img", AvatarComponent);
