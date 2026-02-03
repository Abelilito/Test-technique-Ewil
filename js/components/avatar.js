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
    const name = this.getAttribute("name");
    const job = this.getAttribute("job");
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

        .avatar-component .name {
          font-family: 'Montserrat-bold', sans-serif;
          font-size: 16px;
        }

        .avatar-component .job {
          font-family: 'Montserrat-light', sans-serif;
          font-size: 12px;
        }

        .avatar-component.default .name {
          width: 8rem;
          display: block;
        }

        .default {
          align-items: center;
        }

        .avatar-component.column {
          flex-direction: column;
          align-items: center;
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
          <div class="name">${name}</div>
          <div class="job">${job}</div>
        </div>
      </div>
    `;
  }
}

customElements.define("avatar-img", AvatarComponent);
