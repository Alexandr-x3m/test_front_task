import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.css';
import logo from './logo.png';
import shopping_cart from './shopping-cart.png';

const Header = (props) => {

    const [menuBar, setMenuBar] = useState(false)

    return (
        <div className={s.conteiner}>
            <div className={s.background}></div>
            <div className={s.content_block}>
                <NavLink to="/">
                    <img src={logo} className={s.logo} />
                </NavLink>

                <NavLink to="/shopping_cart" style={{ gridColumn: 3 }}>
                    <button className={s.shop_cart}>
                        <img src={shopping_cart} className={s.img} />
                    </button>
                </NavLink>

                <div className={s.hamb_block} >
                    <input
                        type="checkbox"
                        id="menu_check"
                        className={`${s.checkbox3} ${s.visuallyHidden}`}
                        onChange={(el) => setMenuBar(el.target.checked)} />
                    <label htmlFor="menu_check">
                        <div className={`${s.hamburger} ${s.hamburger3}`}>
                            <span className={`${s.bar} ${s.bar1}`}></span>
                            <span className={`${s.bar} ${s.bar2}`}></span>
                            <span className={`${s.bar} ${s.bar3}`}></span>
                            <span className={`${s.bar} ${s.bar4}`}></span>
                        </div>
                    </label>
                </div>
            </div>
            <div className={s.menu_conteiner} style={menuBar ? { display: 'block' } : { display: 'none' }} >
                <ul>
                    <NavLink to="/">
                        <li>Обучающее видео</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Оформление заказа</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Оплата</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Доставка</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Гарантия</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Возврат</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Контакты</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Партнерам</li>
                    </NavLink>
                </ul>
            </div>
            
        </div>
    )
}

export { Header };