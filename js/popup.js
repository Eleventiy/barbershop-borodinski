var link 		 = document.querySelector(".login"),
		popup 	 = document.querySelector(".modal-content"),
		overlay	 = document.querySelector(".modal-overlay"),
		close 	 = popup.querySelector(".modal-content-close"),
		form 		 = popup.querySelector("form"),
		login 	 = popup.querySelector("[name=login]"),
		password = popup.querySelector("[name=password]"),
		storage  = localStorage.getItem("login");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-overlay-show");

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});
