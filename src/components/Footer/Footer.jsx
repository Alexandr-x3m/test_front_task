import React from 'react';
import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className={s.conteiner}>
            <ul>
                <NavLink to="/" activeClassName={s.was_select_block}>    
                    <li className={s.long_name_item} >Вариант <br/> кухни</li>
                </NavLink>
                <NavLink to="/" activeClassName={s.was_select_block}>    
                    <li>Размеры</li>
                </NavLink>
                <NavLink to="/" activeClassName={s.was_select_block}>    
                    <li>Сенсор</li>
                </NavLink>
                <NavLink to="/" activeClassName={s.was_select_block}>    
                    <li className={s.long_name_item} >Питающий <br/> кабель</li>
                </NavLink>
                <NavLink to="/" activeClassName={s.was_select_block}>    
                    <li className={s.long_name_item} >Блок <br/> питания</li>
                </NavLink>
                <NavLink to="/" activeClassName={s.selected_block}>    
                    <li className={s.long_name_item} >Цвет <br/> свечения</li>
                </NavLink>
                <NavLink to="/" activeClassName={s.was_not_select_block}>    
                    <li>Монтаж</li>
                </NavLink>
                <NavLink to="/" >    
                    <li>Корзина</li>
                </NavLink>
            </ul>
        </div>
    )
}

export {Footer};
