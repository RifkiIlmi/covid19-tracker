import {separateNumber} from '../../helper/NumberFormatting.js'

class Card extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set data(data) {
        this._data = data;
        this.render();
      }

    set title(title) {
        this._title = title;
        this.render();
      }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        /* Font */
        @import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');
        
        /* Design */
        :host{
          box-sizing: border-box;
          font-family: Helvetica;
        }
    
        .card {
            margin: 2rem 0.55rem;
            padding: 1rem;
            text-align: center;
          width: 233px;
          height: 90px;
          border-radius: 0.50rem;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          overflow: hidden;
          transition: 0.3s;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }

        @media (max-width: 775px) {
            .card {
              width: 410px ;
            }
          }

        .card_title {
          color: #ffffff;
          font-size: 1.1rem;
          letter-spacing: 1px;
          text-transform: capitalize;
          margin: 0px;
        }
        
        .card_text {
            display: inline;
          color: #ffffff;
          font-size: 2.5rem; 
          font-weight: 700;
        }
        
        </style>
            <div class="card" style="background-color: ${this.getAttribute("color")}">
                <p class="card_title">${this._title}</p>
                <p class="card_text">${separateNumber(this._data.value)}</p>
            </div>
        
        `;
    }
}

customElements.define("card-show", Card);