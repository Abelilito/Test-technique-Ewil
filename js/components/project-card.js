class ProjectCardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const dialog = this.shadowRoot.querySelector("dialog");
    const btnClose = this.shadowRoot.querySelector(".btn-close");
    const openModalCards = this.shadowRoot.querySelectorAll(".card");
    
    openModalCards.forEach(card => {
      card.addEventListener("click", () => {
        dialog.showModal();
      });
    });
    
   btnClose.addEventListener("click", () => {
      dialog.close();
    });
  }

  render() {
    const category = this.getAttribute("category");
    const name = this.getAttribute("name");
    const year = this.getAttribute("year");
    const url = this.getAttribute("img-url");
    const text = this.getAttribute("text");
    const customer = this.getAttribute("customer");

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border-radius: 10px;
          filter: drop-shadow(0 0 2.5px rgba(0,0,0,0.25));
          background-color: #ffffff;
          cursor: pointer;
          transition: opacity 0.15s ease-in;
        }

        .card:hover .card-img {
          opacity: 0.5;
        }

        .card-img {
          height: 300px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .card-body {
          padding: 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem; 
        }

        .wrapper-project {
          display: flex;
          justify-content: space-between;
        }
        
        dialog { 
          background-color: transparent;
          border: none;
          width: 55rem;
        }

        dialog:focus-visible {
          outline: none;
        }

        .dialog-body {
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-desc {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .btn-close {
          position: absolute;
          top: 2rem;
          right: 2rem;
          cursor: pointer;
        }

        .project-img {
          width: 100%;
          object-fit: cover;
        }

        .img-close-desktop {
          display: none;
        }

        .img-close-mobile {
          display: block;
        }

        .w-full {
          width: 100%;
        }

        .mt-10 {
          margin-top: 3rem;
        }

        .name {
          font-family: 'Montserrat-bold', sans-serif;
          font-size: 32px;
        }

        .cat {
          font-family: 'Montserrat-light', sans-serif;
          font-size: 18px;
        }

        .text {
          font-family: 'Montserrat-light', sans-serif;
          font-size: 12px;
          line-height: 24px;
        }

        .projet-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .customer div,
        .card-body .name,
        .card-body .year {
          font-family: 'Montserrat-semi-bold', sans-serif;
          font-size: 16px;
        }

        .customer span, .card-body .cat {
          font-family: 'Montserrat-light', sans-serif;
          font-size: 12px;
        }

        @media (width >= 48rem) { 
          .dialog-body {
            flex-direction: row;
          }

          .img-close-desktop {
            display: block;
          }
          
          .img-close-mobile {
            display: none;
          }

          .project-dec {
            width: 50%;
          }
        }
      </style>

      <dialog closedby="closerequest">
        <div class="dialog-body">
          <img src="${url}" class="project-img" alt="Project image"/>

          <div class="project-desc">
            <div class="btn-close">
              <img src="images/icons/cross-white.png" alt="Cross icon" width=35 class="img-close-mobile" />
              <img src="images/icons/cross-black.png" alt="Cross icon" width=35 class="img-close-desktop" />
            </div>

            <div class="w-full">
              <div class="projet-details">
                <div class="name">${name}</div>
                <div class="cat">${category} / ${year}</div>
                <div class="customer">
                  <div>Client: </div>
                  <span>${customer}</span>
                </div>
              </div >
              <div class="mt-10 text">${text}</div>
            </div>
          </div>
        </div>
      </dialog>

      <div class="card">
        <div class="card-img" style="background-image: url(${url})"></div>
        <div class="card-body">
          <div class="cat">${category}</div>
          <div class="wrapper-project">
            <div class="name">${name}</div>
            <div class="year">${year}</div>
          </div>  
        </div>
      </div>
    `;
  }
}

customElements.define("project-card", ProjectCardComponent);
