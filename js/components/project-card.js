class ProjectCard extends HTMLElement {
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

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border-radius: 10px;
          filter: drop-shadow(0 0 2.5px rgba(0,0,0,0.25));
          background-color: #ffffff;
          cursor: pointer;
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
          width: 75rem;
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
          justify-content: space-around;
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
              <div>${name}</div>
              <div>${category} / ${year}</div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolore pariatur doloremque voluptatibus 
              numquam minima quasi animi officia nemo asperiores obcaecati vel repellat optio eum, perspiciatis ea 
              inventore soluta laudantium?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolore pariatur doloremque voluptatibus 
              numquam minima quasi animi officia nemo asperiores obcaecati vel repellat optio eum, perspiciatis ea 
              inventore soluta laudantium?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolore pariatur doloremque voluptatibus 
              numquam minima quasi animi officia nemo asperiores obcaecati vel repellat optio eum, perspiciatis ea 
              inventore soluta laudantium?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolore pariatur doloremque voluptatibus 
              numquam minima quasi animi officia nemo asperiores obcaecati vel repellat optio eum, perspiciatis ea 
              inventore soluta laudantium?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolore pariatur doloremque voluptatibus 
              numquam minima quasi animi officia nemo asperiores obcaecati vel repellat optio eum, perspiciatis ea 
              inventore soluta laudantium?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolore pariatur doloremque voluptatibus 
              numquam minima quasi animi officia nemo asperiores obcaecati vel repellat optio eum, perspiciatis ea 
              inventore soluta laudantium?
            </div>
          </div>
        </div>
      </dialog>

      <div class="card">
        <div class="card-img" style="background-image: url(${url})"></div>

        <div class="card-body">
          <div>${category}</div>  
          <div class="wrapper-project">
            <div>${name}</div>
            <div>${year}</div>
          </div>  
        </div>
      </div>
    `;
  }
}

customElements.define("project-card", ProjectCard);
