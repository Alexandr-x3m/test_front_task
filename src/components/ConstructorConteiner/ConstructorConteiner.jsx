import React, { useState } from 'react';

import { Footer } from '../Footer/Footer';
import { ParamItem } from './ParamItem/ParamItem';
import { DescriptionConteiner } from '../DescriptionConteiner/DescriptionConteiner';

import s from './ConstructorConteiner.module.css';
import img_item from './item13.png';
import icon_information from './icon-information.png';
import icon_check from './icon_check.svg';
import { Slider } from '../Slider_2/SliderConteiner';

const ConstructorConteiner = (props) => {

    let initialState = [
        { id: 1, active: false, value: "Теплый" },
        { id: 2, active: false, value: "Дневной" },
        { id: 3, active: false, value: "холодный" }
    ]

    const [desrBl, setDescrBl] = useState(false);
    const [check, setCheck] = useState(0)

    let paramsList = initialState.map((el, index) => {
        return (
            <ParamItem
                key={'unic_key_' + el.id}
                data={el}
                index={index}
                img={img_item}
                icon={icon_check}
                check={check}
                setCheck={(val) => setCheck(val)} />
        )
    })

    return (
        <div className={s.conteiner}>
            <div>
                <Slider 
                    width={460} 
                    height={386} 
                    setCheck={(val) => setCheck(val)}
                    check={check}
                />
            </div>
            <div>
                <div className={s.information_block}>
                    <div className={s.sting_block}>
                        <p>Класс:</p>
                        <p className={s.action_btn} >Standart</p>
                    </div>
                    <div className={s.sting_block}>
                        <p>Потребляемая мощность:</p>
                        <p>59 Вт.</p>
                    </div>
                    <div className={s.sting_block}>
                        <p>Сила света:</p>
                        <p>3459 Люмен = 7,5 ламп накаливания по 40 Вт.</p>
                    </div>
                    <div className={s.sting_block}>
                        <p>Гарантия:</p>
                        <p>3 года</p>
                    </div>
                    <div className={s.sting_block}>
                        <p>Монтаж:</p>
                        <p>Да</p>
                    </div>
                    <div className={s.sting_block}>
                        <p>Итого сумма:</p>
                        <p>2594 рублей</p>
                    </div>
                </div>
                <div className={s.type_glow}>
                    <div className={s.attention_block}>
                        <button
                            className={s.icon_block}
                            onClick={() => setDescrBl(true)} >
                            <img src={icon_information} />
                        </button>
                        <p>Выберите цвет свечения</p>
                    </div>
                    <div className={s.options_glow_block}>
                        {paramsList}
                    </div>
                </div>
            </div>
            <DescriptionConteiner
                display={desrBl}
                return={() => setDescrBl(false)} />
            <Footer />
        </div>
    )
}

export { ConstructorConteiner };