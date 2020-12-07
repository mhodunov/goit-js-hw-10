import "../css/market.css";

//Импорт шаблона и данных для разметки меню
import menuTemplate from "../templates/market.hbs";
import menu from "../data/menu.json";

//Список с элементами меню
const menuListRef = document.querySelector('.js-menu');

//Получаем разметку из шаблонизатора и добавляем в DOM
const menuMarkup = menuTemplate(menu);
menuListRef.insertAdjacentHTML('beforeend', menuMarkup);