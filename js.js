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
      els.headerText.innerHTML = "ヘッダーです";

      els.headerIcon.className = "material-icons";
      els.headerIcon.innerHTML = "shopping_cart";

      App.elements.app.appendChild(els.index);
      els.index.appendChild(els.headerText);
      els.index.appendChild(els.headerIcon);
    },
    renderContent() {
  console.log(this);
  console.log(this);

      const els = App.elements.content;
      els.index.className = "container__content";
      els.cardBox.innerHTML = "content";

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
