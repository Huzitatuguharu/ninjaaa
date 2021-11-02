const App = {

  init() {
    console.log("Start the engines");

    this.controllers.renderHeader();
    this.controllers.renderContent();

    this.controllers.renderFooter();
    console.log("Finished");
  },
  state: {
    navChild: [{ text: "Button" }, { text: "Accordion" }, { text: "Input" }],
    count: 0,
    increment: () => {
    this.state.count++;
    }
  },

  controllers: {
    renderHeader() {

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
        
        const form = document.createElement("form");
        const numberInput = document.createElement("input");
        const errorText = document.createElement("p");
        numberInput.id = goods.name;
        numberInput.step = 1;
        numberInput.type="number";
        numberInput.min = 0;
        numberInput.max = goods.stock;
        
        errorText.innerHTML="整数のみ入力できます"
        errorText.className = "errorText";


        buyButton.innerHTML = "カゴに追加";
        
        buttonArea.appendChild(buyButton);
        form.appendChild(numberLabel);
        form.appendChild(numberInput);
        form.appendChild(errorText);
        form.appendChild(buttonArea);
        card.appendChild(form);

        return card;
      }

      const addCart=()=>{
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
      console.log(list.state.item[i].count) ; 
      // card.appendChild(botton);
    }

    const showCart=(item)=>{
        const cartContent = document.createElement("div");
        const cartContentText = document.createElement("p");
        const cartContentCount = document.createElement("p");

        cartContentText.innerHTML=item.name;
        cartContentCount.innerHTML=`${item.count*item.count}両`;

        cartContent.appendChild(cartContentText);
        cartContent.appendChild(cartContentCount);
        console.log(item) 
        return cartContent;
    }

    for (let i = 0; i<list.state.item.length; i++){
      if(list.state.item[i].count >0){
      const cartContent =showCart(list.state.item[i]);
      els.cartContentBox.appendChild(cartContent);
      }
    }

    
      App.elements.app.appendChild(els.index);
      els.index.appendChild(els.cardBox);
      els.cardBox.className = "cardBox";
      console.log(list.state.item[0].count);
      els.index.appendChild(els.cartContentBox);
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
      cartContentBox: document.createElement("div"),
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
  },
};

App.init();
