class Modal {
	constructor() {
		this.modalContainer = document.createElement("div");
		this.modalContainer.className = "modalContainer";

		this.modalContent = document.createElement("div");
		this.modalContent.className = "modalContent";

		this.modalHeader = document.createElement("div");
		this.modalHeader.className = "modalHeader";
		this.modalHeader.innerHTML = 'カートの中身';

		this.modalCover = document.createElement("span");
		this.modalCover.className = "modalCover";
		this.modalCover.onclick = (() => this.modalContainer.classList.remove(
			'visible'));

		this.modalBody = document.createElement("div");
		this.modalBody.className = "modalBody";

		this.modalFotter = document.createElement("div");
		this.modalFotter.className = "modalFotter";

		this.buyButton = document.createElement("button");
		this.buyButton.className = "buyButton";
		this.buyButton.innerHTML = "購入する";
		this.buyButton.onclick = buyButtonClick;
		
		function goHome(){
			document.location.href=''
		}
		function buyButtonClick(){
			localStorage.clear();
			App.elements.header.cartIcon.style.display = "none";
			App.modal.modalFotter.style.display = "none";
			App.modal.modalHeader.innerHTML = 'ご購入ありがとうございます！';
			App.modal.modalBody.innerHTML = '一定時間後にホームに戻ります';
			setTimeout(goHome,5000)
		}
		this.cancelButton = document.createElement("button");
		this.cancelButton.className = "cancelButton";
		this.cancelButton.innerHTML = "買い物をつづける";
		this.cancelButton.onclick = (() => this.modalContainer.classList.remove(
			'visible'));
		

		this.modalFotter.appendChild(this.cancelButton);
		this.modalFotter.appendChild(this.buyButton);

		this.modalContainer.appendChild(this.modalContent);
		this.modalContainer.appendChild(this.modalCover);
		this.modalContent.appendChild(this.modalHeader);
		this.modalContent.appendChild(this.modalBody);
		this.modalContent.appendChild(this.modalFotter);

		window.onclick = function(event) {
			if (event.target.className === "modalContainer") {
				event.target.style.display = "none";
			}
		}

	document.body.appendChild(this.modalContainer);
	}
	comleate(){


		
	}
}
