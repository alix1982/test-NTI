//contacts
import geoIcon from './images/contactsAndRequest/geoIcon.svg';
import emailIcon from './images/contactsAndRequest/emailIcon.svg';
import telIcon from './images/contactsAndRequest/telIcon.svg';

//events
import news1 from './images/news/news1.png';
import news2 from './images/news/news2.png';
import news3 from './images/news/news3.png';
import news4 from './images/news/news4.png';
import news5 from './images/news/news5.png';
import news6 from './images/news/news6.png';

//advantages
import imgAdvantage01 from './images/advantages/1.svg';
import imgAdvantage02 from './images/advantages/2.svg';
import imgAdvantage03 from './images/advantages/3.svg';
import imgAdvantage04 from './images/advantages/4.svg';

//products
import imgProduct01 from './images/catalog/01.png';
import imgProduct02 from './images/catalog/02.png';
import imgProduct03 from './images/catalog/03.png';
import imgProduct04 from './images/catalog/04.png';
import imgProduct05 from './images/catalog/05.png';


export const contacts = [
    {
        contactId: 1,
        contactName: 'geo',
        contactHeader: "Адрес",
        contactContent: ["Москва, ул. 3-я Хорошевская, дом 2, строение 1"],
        contactImg: geoIcon,
    },
    {
        contactId: 2,
        contactName: 'email',
        contactHeader: "E-mail",
        contactContent: ["dell_ru@gmail.com"],
        contactImg: emailIcon,
    },
    {
        contactId: 3,
        contactName: 'tel',
        contactHeader: "Телефон",
        contactContent: ["+7 495 737-06-01", "+7 495 737-06-01"],
        contactImg: telIcon,
    }
]

export const events = [
    {
        newsId: 1,
        newsHeader: "GE использует технологии Dell",
        newsContent: "Вы можете посмотреть ещё больше интересных",
        newsImg: news1,
        newsDate: 1689050358,
    },
    {
        newsId: 2,
        newsHeader: "GE использует технологии Dell",
        newsContent: "Вы можете посмотреть ещё больше интересных",
        newsImg: news2,
        newsDate: 1689050358,
    },
    {
        newsId: 3,
        newsHeader: "GE использует технологии Dell",
        newsContent: "Вы можете посмотреть ещё больше интересных",
        newsImg: news3,
        newsDate: 1689050358,
    },
    {
        newsId: 4,
        newsHeader: "GE использует технологии Dell",
        newsContent: "Вы можете посмотреть ещё больше интересных",
        newsImg: news4,
        newsDate: 1689050358,
    },
    {
        newsId: 5,
        newsHeader: "GE использует технологии Dell",
        newsContent: "Вы можете посмотреть ещё больше интересных",
        newsImg: news5,
        newsDate: 1689050358,
    },
    {
        newsId: 6,
        newsHeader: "GE использует технологии Dell",
        newsContent: "Вы можете посмотреть ещё больше интересных",
        newsImg: news6,
        newsDate: 1689050358,
    }
]
export const eventsMobile = [
    {
        newsId: 1,
        newsHeader: "GE использует технологии Dell",
        newsContent: "Вы можете посмотреть ещё больше интересных новостей",
        newsImg: news1,
        newsDate: 1689050358,
    },
    {
        newsId: 4,
        newsHeader: "GE использует технологии Dell",
        newsContent: "Вы можете посмотреть ещё больше интересных новостей",
        newsImg: news4,
        newsDate: 1689050358,
    },
    {
        newsId: 5,
        newsHeader: "GE использует технологии Dell",
        newsContent: "Вы можете посмотреть ещё больше интересных новостей",
        newsImg: news5,
        newsDate: 1689050358,
    }
];

export const advantages = [
    {
        id: 1,
        imgAdvantage: imgAdvantage01,
        headings: ['Самые выгодные', 'и низкие цены'],
        contents: ['В наличии широкий ассортимент,', 'а также доступные цены', 'на ноутбуки Dell '],
    },
    {
        id: 2,
        imgAdvantage: imgAdvantage02,
        headings: ['Авторизованный', 'сервисный центр DELL'],
        contents: ['Сертифицированный сервисный', 'центр по ремонту техники Dell', 'в России и странах СНГ'],
    },
    {
        id: 3,
        imgAdvantage: imgAdvantage03,
        headings: ['Высокий уровень', 'технической экспертизы'],
        contents: ['Мы прошли аттестацию в виде', 'тестирования, где показали', 'высокий уровень знаний'],
    },
    {
        id: 4,
        imgAdvantage: imgAdvantage04,
        headings: ['Официальный партнер', 'DELL'],
        contents: ['Официальный поставщик', 'продукции DELL в России', 'и странах СНГ'],
    }
];
export const advantagesMobile = [
    {
        id: 1,
        imgAdvantage: imgAdvantage01,
        headings: ['У нас самые выгодные', 'и низкие цены '],
        contents: ['В наличии широкий ассортимент,', 'а также доступные цены', 'на ноутбуки Dell '],
    },
    {
        id: 2,
        imgAdvantage: imgAdvantage02,
        headings: ['Авторизованный сервисный', 'центр DELL'],
        contents: ['Сертифицированный сервисный центр', 'по ремонту техники Dell в России', 'и странах СНГ'],
    },
    {
        id: 3,
        imgAdvantage: imgAdvantage03,
        headings: ['Высокий уровень технической', 'экспертизы'],
        contents: ['Мы прошли аттестацию в виде', 'тестирования, где показали высокий', 'уровень знаний'],
    },
    {
        id: 4,
        imgAdvantage: imgAdvantage04,
        headings: ['Мы являемся официальным', 'партнером DELL'],
        contents: ['Мы лучший официальный поставщик', 'продукции DELL в России', 'и странах СНГ'],
    }
];

export const products = [
    {
        id: 1,
        imgProduct: imgProduct01,
        counterProduct: 105,
        heading: 'Ноутбуки',
    },
    {
        id: 2,
        imgProduct: imgProduct02,
        counterProduct: 65,
        heading: 'Персональные компьютеры',
    },
    {
        id: 3,
        imgProduct: imgProduct03,
        counterProduct:13,
        heading: 'Cерверы',
    },
    {
        id: 4,
        imgProduct: imgProduct04,
        counterProduct: 2345,
        heading: 'Dell EMC',
    },
    {
        id: 5,
        imgProduct: imgProduct05,
        counterProduct: 195,
        heading: 'Запасные части к Dell EMC',
    }
];

//footer
export const catalog = ['Каталог', ['Ноутбуки', 'Персональные компьютеры', 'Серверы', 'Dell EMC', 'Запасные части к Dell EMC']];
export const lk = ['Личный кабинет', ['Профиль', 'История заказов', 'SMS-уведомления', 'Избранное', 'Сравнение товаров']];
export const help = ['Помощь', ['Доставка и оплата', 'Контакты', 'FAQ', 'Наш АСЦ']];