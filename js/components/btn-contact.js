class BtnContactComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const dialog = this.shadowRoot.querySelector("dialog");
    const btnClose = this.shadowRoot.querySelector(".btn-close");
    const openModalBtns = this.shadowRoot.querySelectorAll(".openModalBtn");
    
    openModalBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        dialog.showModal();
      });
    });
    
    btnClose.addEventListener("click", () => {
      dialog.close();
    });
  }
  
  render() {
    const variant = this.getAttribute("variant");

    this.shadowRoot.innerHTML = `
      <style>
        dialog {
          background-color: transparent;
          border: none;
          width: 53rem;
        }
        
        .dialog-body {
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .openModalBtn {
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 1px;
          border-radius: 1000px;
          text-align: center;
          padding: 1rem 2rem 1rem 2rem;
          max-width: max-content;
          font-size: 12px;
          padding: 0.8rem 1.3rem 0.8rem 1.3rem;
          border-radius: 1000px;
        }
        
        .btn-secondary {
          background-color: white;
          border: 2px solid #2b2a2c;
          color: #2b2a2c;
          font-family: 'Montserrat-semi-bold', sans-serif;
        }
        .btn-secondary:hover {
          background-color: #2b2a2c;
          color: white;
        }

        .btn-primary {
          background-color: #2b2a2c;
          color: white;
          border: 2px solid transparent;
          font-family: 'Montserrat-semi-bold', sans-serif;
        }
        .btn-primary:hover {
          background-color: white;
          color: #2b2a2c;
          border: 2px solid #2b2a2c;
        }

        .btn-close {
          position: absolute;
          top: 2rem;
          right: 2rem;
          cursor: pointer;
        }

        .contact-block {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        
        .title {
          font-size: 45px;
          line-height: 45px;
          color: #2b2a2c;
          font-weight: 100;
          text-transform: uppercase;
          padding-top: 3rem;
        }
        
        .subtitle {
          font-size: 16px;
          line-height: 45px;
          color: #2b2a2c;
          font-weight: 100;
          text-transform: uppercase;
        }

        .contact-details {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          }
          
        .contact-details span {
          font-size: 14px;
          line-height: 30px;
          color: #2b2a2c;
          font-weight: 100;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .gap-4 {
          gap: 1rem;
        }

        .gap-2 {
          gap: 0.5rem;
        }

        input {
          padding: 1rem;
          border-radius: 1000px;
        }

        input:focus-visible, textarea:focus-visible {
          outline: none;
        }

        input, textarea {
          border: 1px solid #2b2a2c;
        }

        textarea {
          padding: 1rem;
          border-radius: 32px;
        }

        .btn-submit {
          margin-top: 10px;
          display: flex;
          justify-content: end;
        }

        .btn-submit input {
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          font-weight: 100;
          letter-spacing: 1px;
          font-size: 14px;
          padding: 0.8rem 1.5rem 0.8rem 1.5rem;
          border-radius: 1000px;
          filter: drop-shadow(2.121px 2.121px 6px rgba(0,0,0,0.24));
          line-height: 25px;
          text-align: center;
          max-width: max-content;
          background-color: #2b2a2c;
          color: white;
          border: 2px solid transparent;
        }

        .btn-submit input:hover {
          background-color: white;
          color: #2b2a2c;
          border: 2px solid #2b2a2c;
        }

            .img-close-desktop {
            display: none;
          }

          .img-close-mobile {
            display: block;
          }
        
        .modal-img {
          background-image: url("images/popup-1.jpg");
          width: 100%;
          height: 42rem;
          background-size: cover;
          display: none;
          background-repeat: repeat;
        }

        .w-full {
          width: 100%;
        }

        @media (width >= 48rem) { 
          .title {
            padding-top: 1rem;
          }

          .img-close-desktop {
            display: block;
          }
          
          .img-close-mobile {
            display: none;
          }

          .openModalBtn {
            font-size: 14px;
            padding: 0.8rem 1.5rem 0.8rem 1.5rem;
          }
          
          .dialog-body {
            flex-direction: row;
          }

          .modal-img {
            display: block;
          }
        }
      </style>

      <dialog closedby="closerequest">
        <div class="dialog-body">
          <div class="contact-block">
            <div>
              <div class="title">
                Contact
              </div>
              <div class="subtitle">
                Appelez-moi ou envoyez-moi un mail
              </div>
              <div class="contact-details">
                <img src="images/icons/phone.png" alt="Phone icon" width=16 />
                <span>01 02 03 04 05</span>
              </div>
              <div class="contact-details">
                <img src="images/icons/email.png" alt="Mail icon" width=16 />
                <span>designer@ui43.com/span>
              </div>
            </div>

            <form action="" method="get" class="form gap-4">
              <div class="form gap-2">
                <label for="email">Adresse e-mail</label>
                <input type="text" name="email" id="email" placeholder="Adresse e-mail" required />
              </div>

              <div class="form gap-2">
                <label for="content">Contenu</label>
                <textarea id="content" name="content" rows="5" cols="33" placeholder="Contenu" required></textarea>
              </div>
              <div class="btn-submit">
                <input type="submit" value="S'abonner !" />
              </div>
            </form>
          </div>

          <div class="w-full">
            <div class="btn-close">
              <img src="images/icons/cross-white.png" alt="Cross icon" width=35 class="img-close-desktop" />
              <img src="images/icons/cross-black.png" alt="Cross icon" width=35 class="img-close-mobile" />
            </div>
            <div class="modal-img"></div>
          </div>
        </div>
      </dialog>

      <button class="openModalBtn ${variant}">Contact</button>
    `;
  }
}

customElements.define("btn-contact", BtnContactComponent);