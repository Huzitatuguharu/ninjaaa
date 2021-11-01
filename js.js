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
  console.log(this);
  console.log(this);
        console.log(list.state.item.length);

      const els = App.elements.content;
      els.index.className = "container__content";

      for (let i = 0; i<list.state.item.length; i++){
        const product = list.state.item[i];
        console.log(product);
        const item_name = document.createElement("p");
        const item_description = document.createElement("p");
        const item_price = document.createElement("p");
        const item_image = document.createElement("img");
        item_name.innerHTML = product.name;
        item_description.innerHTML = product.description;
        item_price.innerHTML = `${product.price} 両`
        item_image.className = product.name;
        item_image.src = product.img;
        item_image.alt = product.name;
        els.cardBox.appendChild(item_name);
        els.cardBox.appendChild(item_description);
        els.cardBox.appendChild(item_price);
        els.cardBox.appendChild(item_image);
      }

       App.elements.app.appendChild(els.index);
       els.index.appendChild(els.cardBox);
    },
    renderFooter() {
  console.log(this);

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
      card: document.createElement("p"),
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
