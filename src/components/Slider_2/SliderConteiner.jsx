import React, { useState, useEffect } from 'react';

import s from './Slider.module.css';

import dataSlider from '../../dataSlider.json';
import { Navigation } from './Navigation/Navigation';

const Slider = (props) => {

    const data = dataSlider;

    const [indexSlide, setIndexSlide] = useState(props.check)
    
    useEffect(() => setIndexSlide(props.check))

    let slides = data.map(el => {
        return (
            <div 
                key={el.title}
                className={s.slider_item}
            >
                <img 
                    src={el.src} 
                    style={{width: props.width + 'px', height: props.height + 'px'}} />
            </div>
        )
    })

    let navBtns = data.map( (el, index) => {
        return (
            <Navigation 
                setIndex={(val) => setIndexSlide(val)}
                count={data.length}
                value={index}
                indexSlide={indexSlide}
                setCheck={(val) => props.setCheck(val)}
                check={props.check} />
        )
    })


    return (
        <div 
            className={s.conteiner}
            style={{width: props.width + 'px', height: props.height + 'px'}}    
        >
            <div 
                className={s.slider_items_block}
                style={{left: (-1) * indexSlide + '00%'}}     
            >
                {slides}
            </div>
            <div className={s.nav_block}>
                {navBtns}
            </div>
        </div>
    )
}

export { Slider };