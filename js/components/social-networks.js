class SocialNetworksComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name");
    const url = this.getAttribute("url");

    this.shadowRoot.innerHTML = `
      <style>
        .box {
          width: 41px;
          height: 41px;
          background-color: green;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .decoration-none {
          text-decoration: none;
        }

        .behance {
          background-color: #1869ff;
        }
        .dribble {
          background-color: #e51a68;
        }
        .linkedin {
          background-color: #007bb6;
        }
        .facebook {
          background-color: #3a5898;
        }
        .instagram {
          background-color: #13578a;
        }
        .x-twitter {
          background-color: #56acef;
        }

      </style>

      <a href="${url}" class="decoration-none">
        <div class="box ${name}">
          <img src="images/icons/${name}.png" alt="social network" width=22 class="img-close-mobile" />
        </div>
      </a>
    `;
  }
}

customElements.define("social-networks", SocialNetworksComponent);
