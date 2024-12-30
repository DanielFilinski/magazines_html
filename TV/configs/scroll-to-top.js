// Получаем элемент кнопки
const scrollToTopButton = document.getElementById('scrollToTop');

// Показываем или скрываем кнопку в зависимости от прокрутки страницы
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
};

// Прокручиваем страницу к верху по нажатию на кнопку
scrollToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка
  });
};
