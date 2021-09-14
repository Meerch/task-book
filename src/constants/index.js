import home from "../assets/img/icons/home.webp";
import family from "../assets/img/icons/family-3.webp";
import work from "../assets/img/icons/work-3.webp";
import sport from "../assets/img/icons/sport-1.webp";

export const engToRuDays = {
    Monday: 'Понедельник',
    Tuesday: 'Вторник',
    Wednesday: 'Среду',
    Thursday: 'Четверг',
    Friday: 'Пятницу',
    Saturday: 'Субботу',
    Sunday: 'Воскресенье'
}

export const defaultCategories = [
    {
        name: 'Дом',
        icon: home,
        id: 0
    },
    {
        name: 'Семья',
        icon: family,
        id: 1
    },
    {
        name: 'Работа',
        icon: work,
        id: 2
    },
    {
        name: 'Спорт',
        icon: sport,
        id: 3
    }
]

export const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']


export const defaultColors = ['#ff9090', '#ff90e0', '#90a2ff', '#5ed953', '#ffd990']