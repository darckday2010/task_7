document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav");
	const body = document.body;

	if (burger && nav) {
		burger.addEventListener("click", () => {
			// Переключаем классы
			burger.classList.toggle("is-active");
			nav.classList.toggle("is-open");

			// Блокируем или разблокируем скролл страницы
			if (nav.classList.contains("is-open")) {
				body.style.overflow = "hidden";
			} else {
				body.style.overflow = "auto";
			}
		});

		// Закрываем меню при клике на любую ссылку внутри него (полезно для мобилок)
		const navLinks = nav.querySelectorAll(".nav__link");
		navLinks.forEach((link) => {
			link.addEventListener("click", () => {
				burger.classList.remove("is-active");
				nav.classList.remove("is-open");
				body.style.overflow = "auto";
			});
		});
	}
});
