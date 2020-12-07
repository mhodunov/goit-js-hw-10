import "../css/market.css";

import menuTemplate from "../templates/market.hbs";
import menu from "../data/menu.json";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//Список с элементами меню
const menuListRef = document.querySelector('.js-menu');

//Кнопка переключения темы
const checkBoxRef = document.getElementById('theme-switch-toggle');

//body для добавления классов
const bodyRef = document.querySelector('body');

//Получаем разметку из шаблонизатора
const menuMarkup = menuTemplate(menu);

//Добавляем разметку в DOM
menuListRef.insertAdjacentHTML('beforeend', menuMarkup);