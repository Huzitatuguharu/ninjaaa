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
      els.headerText.className = "headerText";

      els.headerIcon.className = "material-icons";
      els.headerIcon.innerHTML = "shopping_cart";

      App.elements.app.appendChild(els.index);
      els.index.appendChild(els.headerText);
      els.index.appendChild(els.headerIcon);
    },

    renderContent() {

      const els = App.elements.content;
      els.index.className = "container__content";
      // First display img setting


      const makeItem=(item)=>{
        const goods = item;
        let slideIndex = goods.slideIndex;
        console.log(slideIndex);
        const card= document.createElement("div");
        card.className = "card";
        const item_name = document.createElement("p");
        const item_description = document.createElement("p");
        const item_price = document.createElement("p");
        const item_image0 = document.createElement("img");
        const item_image1 = document.createElement("img");
        const sliderContainer = document.createElement("div");

        const arrowRight=document.createElement("div");
        const arrowLeft=document.createElement("div");

        arrowRight.className = "material-icons arrowRight";
        arrowLeft.className = "material-icons arrowLeft" ;
        arrowRight.innerHTML = "navigate_next";
        arrowLeft.innerHTML = "navigate_before";
        
        item_name.innerHTML = goods.displayName;
        item_name.className = "item_name";

        item_description.innerHTML = goods.description;
        item_price.innerHTML = `${goods.price} 両`

        item_image0.className = "slide";
        item_image1.className = "slide";
        sliderContainer.className="sliderContainer";

        item_image0.src = goods.img[0];
        item_image0.alt = goods.name[0];
        item_image1.src = goods.img[1];
        item_image1.alt = goods.name[1];
        
        
        sliderContainer.appendChild(arrowLeft);
        sliderContainer.appendChild(item_image0);
        sliderContainer.appendChild(item_image1);
        sliderContainer.appendChild(arrowRight);
        
        card.appendChild(sliderContainer);
        card.appendChild(item_name);
        card.appendChild(item_description);
        card.appendChild(item_price);
        
        const buttonArea= document.createElement("div");
        const buyButton = document.createElement("button");
        const numberLabel = document.createElement("label");
        numberLabel.innerHTML = "個数を入力";
        numberLabel.htmlFor = goods.name;
        
        const form = document.createElement("form");
        const numberInput = document.createElement("input");
        const errorText = document.createElement("p");
        form.className="formArea"
        numberInput.id = goods.name;
        numberInput.step = 1;
        numberInput.type="number";
        numberInput.min = 0;
        numberInput.max = goods.stock;
        
        errorText.innerHTML="エラーです"
        errorText.className = "errorText";


        buyButton.innerHTML = "カゴに追加";
        buyButton.className="buyButton";
        buttonArea.appendChild(buyButton);
        form.appendChild(numberLabel);
        form.appendChild(numberInput);
        form.appendChild(errorText);
        form.appendChild(buttonArea);
        card.appendChild(form);
        console.log(sliderContainer)

        // for(let j=0;j<goods.img.length;j++){
        //   sliderContainer.style.display = "none";
        // }
        
        item_image0.style.display = "block";
        item_image1.style.display = "none";
        arrowLeft.onclick=(()=>{if(item_image0.style.display =="block"){
          item_image0.style.display = "none";
        item_image1.style.display = "block";
        }else{
        item_image0.style.display = "block";
        item_image1.style.display = "none";}});

        arrowRight.onclick=(()=>{if(item_image0.style.display =="block"){
          item_image0.style.display = "none";
        item_image1.style.display = "block";
        }else{
        item_image0.style.display = "block";
        item_image1.style.display = "none";}});

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
      console.log(list.state.item[i].count);
      // let slideIndex = 0;
      // showSlides(slideIndex); 
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
        cartContent.className="cartContent";
        console.log(item) 
        return cartContent;
    }

    if(list.state.item.reduce((sum, i) => sum + i.count, 0)===0){
      console.log("aaa")

    }else{
      console.log("ccc")

    for (let i = 0; i<list.state.item.length; i++){
      if(list.state.item[i].count >0){
      const cartContent =showCart(list.state.item[i]);
      els.cartContentBox.appendChild(cartContent);
      }
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
