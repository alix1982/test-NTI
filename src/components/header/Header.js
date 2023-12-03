// import './header.css';
import { useState } from 'react';
import logoNoBg from '../../images/header/logoNoBg.png';
import lupa from '../../images/header/lupa.svg';
import profile from '../../images/header/profile.svg';
import sort from '../../images/header/sort.svg';
import like from '../../images/header/like.svg';
import basket from '../../images/header/basket.svg';
import avatarDefault from '../../images/header/avatarDefault.svg'

const Header = (props) => {
    const [isHoverLk, setIsHoverLk] = useState(false);
    const handleHoverLk = () => {
        setIsHoverLk(true);
    }
    const handleNoHoverLk = () => {
        setIsHoverLk(false);
    }

    return (
        <header className={`header ${props.isNav ? 'header__activeMenu' : ''}`}>
            <img  className="header__logo" src={logoNoBg} alt='logo'/>
            <div className="header__rightBlock">
                <ul className={`header__navMenu ${props.isNav ? 'header__navMenu_active' : ''}`}>
                    <li className="header__pointMenu">Главная</li>
                    <li className="header__pointMenu">Каталог</li>
                    <li className="header__pointMenu">Новости</li>
                    <li className="header__pointMenu">Наш АСЦ</li>
                    <li className="header__pointMenu">Контакты</li>
                </ul>
                <ul className="header__lkMenu">
                    <li className="header__lkPointInput">
                        <img className="header__inputImg" src={lupa} alt='find'/>
                    </li>
                    <li className="header__lkPoint" onMouseEnter={handleHoverLk} onMouseLeave={handleNoHoverLk}>
                        <img className="header__lkPointImg" src={profile} alt='profile'/>
                    </li>
                    <li className="header__lkPoint header__lkPoint_none">
                        <img className="header__lkPointImg" src={sort} alt='sort'/>
                    </li>
                    <li className="header__lkPoint header__lkPoint_none">
                        <img className="header__lkPointImg" src={like} alt='like'/>
                    </li>
                    <li className="header__lkPoint">
                        <img className="header__lkPointImg" src={basket} alt='menu'/>
                    </li>
                    <li className="header__lkPoint header__lkPointNav">
                        <button className={props.isNav ? 'header__nav_active' : 'header__nav'} onClick={props.handleMenu}>
                            {/* <img className="header__navImg" src={isNav ? close : burger} alt='нечто'/> */}
                        </button>
                    </li>
                </ul>
            </div>
            {/* <dialog className="header__modal" open={isHoverLk}> */}
            <div className={`header__modal ${isHoverLk ? 'activeHeaderModal' : ''}`}>
                <ul className="header__modalList">
                    <li className="header__modalPoint header__modalPointFirst">
                        <img className="header__modalAvatar" src={avatarDefault} alt='avatar'/>
                        <p className="header__modalName">Мария</p>
                    </li>
                    <li className="header__modalPoint">Личный кабинет</li>
                    <li className="header__modalPoint">История заказов</li>
                    <li className="header__modalPoint">Персональные предложения</li>
                    <li className="header__modalPoint">Выйти</li>
                </ul>

            </div>
                
            {/* </dialog> */}
        </header>
    );
  }
  
export default Header;
