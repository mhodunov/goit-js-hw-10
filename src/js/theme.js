import "../css/theme.css";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//Кнопка переключения темы и body для добавления классов
const toggleRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

//Слушатель события на переключатель темы
toggleRef.addEventListener('change', switchTheme);

//Проверяем какая тема включена
checkTheme();

function checkTheme() {
  if (localStorage.theme === 'dark-theme') {
    bodyRef.classList.add(Theme.DARK);
    toggleRef.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

//Функция для переключения темы
function switchTheme(event) {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);

  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}