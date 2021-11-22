const App = {

	init() {
			console.log("Start the engines");
			this.modal = new Modal();
			this.controllers.renderHeader();
			this.controllers.renderContent();
			this.controllers.renderFooter();
			console.log(this.modal.modalContainer);
			console.log(App.modal.modalContainer);

			App.elements.header.headerCart.onclick = (() => this.modal.modalContainer.classList
				.add('visible'));
			this.modal.modalContainer.appendChild(App.elements.content.cartContentBox);

			console.log("Finished");
		},

		state: {

			userCart: [],
			result: [],

		},

		controllers: {
			renderHeader() {

					const els = App.elements.header;
					els.index.className = "header";
					els.headerText.innerHTML = "忍具SHOP";
					els.headerText.className = "headerText";

					els.headerCart.className = "material-icons cart";
					els.headerCart.innerHTML = "shopping_cart";
					els.cartIcon.className = "cartIcon";

					App.elements.app.appendChild(els.index);
					els.index.appendChild(els.headerText);
					els.index.appendChild(els.headerCart);
					els.headerCart.appendChild(els.cartIcon);

					if (localStorage.hasOwnProperty('list')) {
						els.cartIcon.style.display = "block";
					} else {
						els.cartIcon.style.display = "none";
					}
				},

				renderContent() {

					const els = App.elements.content;
					els.index.className = "container__content";

					const makeItem = (item) => {
						const goods = item;
						let slideIndex = goods.slideIndex;
						console.log(slideIndex);
						const card = document.createElement("div");
						card.className = "card";
						const item_name = document.createElement("p");
						const item_description = document.createElement("p");
						const item_price = document.createElement("p");


						item_name.innerHTML = goods.displayName;
						item_name.className = "item_name";

						item_description.innerHTML = goods.description;
						item_price.innerHTML = `${goods.price} 両`

						card.appendChild(item_name);
						card.appendChild(item_description);
						card.appendChild(item_price);

						const buttonArea = document.createElement("div");
						const buyButton = document.createElement("button");
						// const numberLabel = document.createElement("label");
						// numberLabel.innerHTML = "個数を入力";
						// numberLabel.htmlFor = goods.name;

						const form = document.createElement("form");
						// const numberInput = document.createElement("input");
						// const errorText = document.createElement("p");
						form.className = "formArea"
							// numberInput.id = goods.name;
							// numberInput.step = 1;
							// numberInput.type="number";
							// numberInput.min = 0;
							// numberInput.max = goods.stock;

						// errorText.innerHTML="エラーです"
						// errorText.className = "errorText";


						buyButton.innerHTML = "カゴに追加";
						buyButton.id = item.name;
						buyButton.value = goods.price;
						buyButton.className = "buyButton";
						buyButton.onclick = addCart;
						buttonArea.appendChild(buyButton);
						// form.appendChild(numberLabel);
						// form.appendChild(numberInput);
						// form.appendChild(errorText);
						form.appendChild(buttonArea);
						card.appendChild(form);


						console.log(list.state.usercurt)

						return card;
					}

					const addCart = (e) => {

						App.state.result = App.state.userCart.find((array) => array.name === e.target
							.id);
						if (App.state.result) {
							return;

						} else {
							App.state.userCart.push({
								"name": e.target.id,
								"price": e.target.value
							});
							localStorage.setItem("list", JSON.stringify(App.state.userCart));
						}
					}

					for (let i = 0; i < list.state.item.length; i++) {
						const card = makeItem(list.state.item[i]);
						const sliderContainer = this.showSlides(list.state.item[i]);
						card.appendChild(sliderContainer);
						els.cardBox.appendChild(card);
					}


					const showCart = (item) => {
						const cartContent = document.createElement("div");
						for (let i = 0; i < item.length; i++) {
							const cartContentText = document.createElement("p");
							const cartContentCount = document.createElement("p");


							cartContentText.innerHTML = item[i].name;
							// cartContentCount.innerHTML=`${item.count*item.count}両`;
							cartContentCount.innerHTML = `${item[i].price}両`;

							cartContent.appendChild(cartContentText);
							cartContent.appendChild(cartContentCount);
							cartContent.className = "cartContent";
						}
						return cartContent;

					}
					// console.log(this.modal.modalContainer);
					console.log(App.modal.modalContainer);

					if (localStorage.getItem('list') !== null) {
						App.state.userCart = JSON.parse(localStorage.getItem('list'));
						showCart(App.state.userCart);
						const cartContent = showCart(App.state.userCart);
						els.cartContentBox.appendChild(cartContent);

					} else {
						console.log("ccc")
					}


					if (list.state.item.reduce((sum, i) => sum + i.count, 0) === 0) {

					} else {

						for (let i = 0; i < list.state.item.length; i++) {
							if (list.state.item[i].count > 0) {
								const cartContent = showCart(list.state.item[i]);
								els.cartContentBox.appendChild(cartContent);
							}
						}
					}


					App.elements.app.appendChild(els.index);
					els.index.appendChild(els.cardBox);
					els.cardBox.className = "cardBox";
					els.index.appendChild(els.cartContentBox);
				},


				showSlides(item) {
					const imgs = [];

					const item_image0 = document.createElement("img");
					const item_image1 = document.createElement("img");
					const item_image2 = document.createElement("img");
					const sliderContainer = document.createElement("div");
					const arrowRight = document.createElement("div");
					const arrowLeft = document.createElement("div");

					imgs.push(item_image0, item_image1, item_image2);

					item_image0.className = `slide_${item.name}`;
					item_image1.className = `slide_${item.name}`;
					item_image2.className = `slide_${item.name}`;
					sliderContainer.className = "sliderContainer";

					item_image0.src = item.img[0];
					item_image0.alt = item.name[0];
					item_image1.src = item.img[1];
					item_image1.alt = item.name[1];
					item_image2.alt = item.name[2];
					item_image2.src = item.img[2];
					item_image0.style.display = "block";
					item_image1.style.display = "none";
					item_image2.style.display = "none";

					sliderContainer.appendChild(arrowLeft);
					sliderContainer.appendChild(item_image0);
					sliderContainer.appendChild(item_image1);
					sliderContainer.appendChild(item_image2);
					sliderContainer.appendChild(arrowRight);

					arrowRight.className = "material-icons arrowRight";
					arrowLeft.className = "material-icons arrowLeft";
					arrowRight.innerHTML = "navigate_next";
					arrowLeft.innerHTML = "navigate_before";

					arrowLeft.onclick = (() => plusSlides(-1));
					arrowRight.onclick = (() => plusSlides(1));

					function plusSlides(n) {
						showSlides(item.slideIndex += n);
					}

					function showSlides(n) {
						// let dots = document.getElementsByClassName("blogSlider__dots--dot");
						if (n > imgs.length - 1) {
							item.slideIndex = 0;
						}
						if (n < 0) {
							item.slideIndex = imgs.length - 1
						}
						for (let i = 0; i < imgs.length; i++) {
							imgs[i].style.display = "none";
						}
						console.log(imgs);
						// for (i = 0; i < dots.length; i++) {
						//   dots[i].className = dots[i].className.replace(" active", "");
						// }
						imgs[item.slideIndex].style.display = "block";
						// dots[slideIndex].className += " active";
					}


					return sliderContainer;

				},


				plusSlides(n) {
					this.showSlides(slideIndex += n);
				},
				currentSlide(n) {
					showSlides(slideIndex = n);
				},


				renderFooter() {
					const els = App.elements.footer;
					els.index.className = "footer";
					// els.footerText.innerHTML = "ふったーです";
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
				headerCart: document.createElement("div"),
				cartIcon: document.createElement("span"),
			},
			footer: {
				index: document.createElement("footer"),
				footerText: document.createElement("div"),
			},
		},
};

App.init();
