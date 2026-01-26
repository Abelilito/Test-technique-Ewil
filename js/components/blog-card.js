class BlogCardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const text = this.getAttribute("text");
    const name = this.getAttribute("name");
    const url = this.getAttribute("url");

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background-color: #ffffff;
          transition: opacity 0.15s ease-in;
        }
        
        .card:hover .card-img {
          opacity: 0.5;
        }

        .card-img {
          height: 300px;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 0.8rem; 
          padding-top: 0.8rem;
        }

        .wrapper-project {
          display: flex;
          justify-content: space-between;
        }

        .card-body .name {
          font-family: 'Montserrat-semi-bold', sans-serif;
          font-size: 16px;
        }

        .card-body .text {
          font-family: 'Montserrat-light', sans-serif;
          font-size: 15px;
          line-height: 24px;
        }
      </style>

      <div class="card">
        <div class="card-img" style="background-image: url(${url})"></div>
        <div class="card-body">
          <div class="name">${name}</div>
          <div class="text">${text}</div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("blog-card", BlogCardComponent);
