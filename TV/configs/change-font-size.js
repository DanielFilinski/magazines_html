// Элементы
const widget = document.getElementById('widget');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const content = document.querySelector('.content');

// Переменные для скроллинга
let lastScrollTop = 0;

// Показывает/скрывает виджет при скроллинге
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Скроллим вниз — скрываем виджет
    widget.classList.remove('show');
  } else {
    // Скроллим вверх — показываем виджет
    widget.classList.add('show');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Убеждаемся, что скролл не ушёл в минус
});

// Управление шрифтом
increaseButton.addEventListener('click', () => {
  const currentFontSize = parseFloat(window.getComputedStyle(content).fontSize);
  content.style.fontSize = (currentFontSize + 2) + 'px';
});

decreaseButton.addEventListener('click', () => {
  const currentFontSize = parseFloat(window.getComputedStyle(content).fontSize);
  content.style.fontSize = (currentFontSize - 2) + 'px';
});
