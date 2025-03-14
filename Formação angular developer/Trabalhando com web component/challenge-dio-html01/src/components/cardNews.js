class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    const spanText = document.createElement("span");
    spanText.textContent = "by " + this.getAttribute("spanText") || "Anonymous";

    const tittle = document.createElement("h2");
    tittle.textContent = this.getAttribute("tittle") || "No Title";

    const paragraph = document.createElement("p");
    paragraph.textContent = this.getAttribute("paragraph");

    cardLeft.appendChild(spanText);
    cardLeft.appendChild(tittle);
    cardLeft.appendChild(paragraph);

    const cardRigth = document.createElement("div");
    cardRigth.setAttribute("class", "card-right");

    const image = document.createElement("img");
    image.src = this.getAttribute("image") || "assets/foto-default.png";
    image.alt = "imagem da notícia";

    cardRigth.appendChild(image);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRigth);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
        .card{
    width: 80%;
    -webkit-box-shadow: -1px 1px 27px 3px rgba(0,0,0,0.68);
    -moz-box-shadow: -1px 1px 27px 3px rgba(0,0,0,0.68);
    box-shadow: -1px 1px 27px 3px rgba(0,0,0,0.68);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.card-left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 18px;
}
.card-left span{
    font-weight: 600;
}
.card-left h2{
    margin-top: 16px;
    font-size: 22px;
}
.card-left p {
  color: gray;
}

img{
    width: 350px;
}
        `;

    return style;
  }
}

customElements.define("card-news", CardNews);
