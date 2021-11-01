const App = {

  init() {
    console.log("Start the engines");
  console.log(this);
  console.log(list);

    this.controllers.renderHeader();
    this.controllers.renderContent();

    this.controllers.renderFooter();
    console.log("Finished");
  },
  state: {
    navChild: [{ text: "Button" }, { text: "Accordion" }, { text: "Input" }],
  },

  controllers: {
    renderHeader() {
      // console.log(list);
  console.log(this);

      const els = App.elements.header;
      els.index.className = "header";
      els.headerText.innerHTML = "忍具SHOP";

      els.headerIcon.className = "material-icons";
      els.headerIcon.innerHTML = "shopping_cart";

      App.elements.app.appendChild(els.index);
      els.index.appendChild(els.headerText);
      els.index.appendChild(els.headerIcon);
    },
    renderContent() {

      const els = App.elements.content;
      els.index.className = "container__content";


      const makeItem=(item)=>{
        const card= document.createElement("div");
        card.className = "card";
        const goods = item;
        const item_name = document.createElement("p");
        const item_description = document.createElement("p");
        const item_price = document.createElement("p");
        const item_image = document.createElement("img");
        item_name.innerHTML = goods.name;
        item_description.innerHTML = goods.description;
        item_price.innerHTML = `${goods.price} 両`
        item_image.className = goods.name;
        item_image.src = goods.img;
        item_image.alt = goods.name;
        card.appendChild(item_name);
        card.appendChild(item_description);
        card.appendChild(item_price);
        card.appendChild(item_image);

        const buttonArea= document.createElement("div");
        const buyButton = document.createElement("button");
        const numberLabel = document.createElement("label");
        numberLabel.innerHTML = "個数";
        numberLabel.htmlFor = goods.name;

        const numberInput = document.createElement("input");
        numberInput.id = goods.name;
        const form = document.createElement("form");
        numberInput.type="number";
        numberInput.min = 0;
        numberInput.max = goods.stock;

        buyButton.innerHTML = "カゴに追加";

        buttonArea.appendChild(buyButton);
        form.appendChild(numberLabel);
        form.appendChild(numberInput);
        form.appendChild(buttonArea);
        card.appendChild(form);

        return card;
      }

      const makeBotton=()=>{
        const buttonArea= document.createElement("div");
        const deleteButton = document.createElement("button");
        const buyButton = document.createElement("button");
        buttonArea.appendChild(buyButton);
        buttonArea.appendChild(deleteButton);

      }

    for (let i = 0; i<list.state.item.length; i++){
      const card =makeItem(list.state.item[i]);
      // const botton=makeBotton();
      els.cardBox.appendChild(card);
      // card.appendChild(botton);
    }
      App.elements.app.appendChild(els.index);
      els.index.appendChild(els.cardBox);
      els.cardBox.className = "cardBox";

    },
    renderFooter() {

      const els = App.elements.footer;
      els.index.className = "footer";
      els.footerText.innerHTML = "ふったーです";
      App.elements.app.appendChild(els.index);
      els.index.appendChild(els.footerText);
    },
  },

  elements: {
    app: document.getElementById("app"),
    container: document.createElement("div"),
    content: {
      index: document.createElement("main"),
      cardBox: document.createElement("div"),
    },
    header: {
      index: document.createElement("header"),
      headerText: document.createElement("div"),
      headerIcon: document.createElement("span"),
    },
    footer: {
      index: document.createElement("footer"),
      footerText: document.createElement("div"),
    },
    // a: document.createElement("a"),
    // main: document.createElement("main"),
    // messageJa: document.createElement("p"),
    // messageEn: document.createElement("p"),
    // nav: document.createElement("nav"),
  },
};

App.init();
