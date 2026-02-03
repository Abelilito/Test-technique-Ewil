class SocialNetworksComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const icon = this.getAttribute("name");
    const url = this.getAttribute("url");
    const hasBoxColor = this.hasAttribute("boxColor");
    const bgColor = !hasBoxColor ? icon : "";
    const boxWidth = !hasBoxColor ? "box" : "no-box";

    this.shadowRoot.innerHTML = `
      <style>
        .box {
          width: 41px;
          height: 41px;
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

        .size-behance, .size-dribble, .size-facebook,
        .size-x-twitter, .size-linkedin {
          width: 18px;
        }

        .size-instagram {
          width: 21px;
        }

      </style>

      <a href="${url}" class="decoration-none">
        <div class="${boxWidth} ${bgColor}">
          <img src="images/icons/${icon}.png" alt="social network"  class="size-${icon}" />
        </div>
      </a>
    `;
  }
}

customElements.define("social-networks", SocialNetworksComponent);
