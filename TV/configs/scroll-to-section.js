// script.js

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Отключаем стандартное поведение ссылки

    const targetId = this.getAttribute('href'); // Получаем ID целевой секции
    const targetElement = document.querySelector(targetId); // Находим элемент

    // Скроллим к элементу с использованием "smooth" scroll
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
