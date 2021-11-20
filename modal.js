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
		this.modalBody.innerHTML = "modalBody";

		this.modalFotter = document.createElement("div");
		this.modalFotter.className = "modalFotter";

		this.buyButton = document.createElement("button");
		this.buyButton.className = "buyButton";
		this.buyButton.innerHTML = "購入する";

		this.cancelButton = document.createElement("button");
		this.cancelButton.className = "cancelButton";
		this.cancelButton.innerHTML = "閉じる";
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

		// const openModalButtons = document.querySelectorAll('.open-modal'),
		//       modal = document.querySelector('.modal'),
		//       closeModalButtons = document.querySelectorAll('.close-modal');
		// openModalButtons.forEach(openBtn => {
		//   openBtn.addEventListener('click', openModal)
		// });


		document.body.appendChild(this.modalContainer);
	}
}
