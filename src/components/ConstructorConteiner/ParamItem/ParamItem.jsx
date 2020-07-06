import React from 'react';
import s from '../ConstructorConteiner.module.css';

const ParamItem = (props) => {

    return (
        <div >
            <input
                type="radio"
                name="param_item"
                id={"glow_item_" + props.index}
                onChange={el => {
                    let id = el.currentTarget.id
                    let length = el.currentTarget.id.length
                    props.setCheck(id[length - 1])
                }} 
                style={{display: 'none'}}
            />

            <label htmlFor={"glow_item_" + props.index} >
                <div className={s.option_glow_item}>
                    <img src={props.img} className={s.glow_img} />
                    <p>{props.data.value}</p>
                    <img 
                        src={props.icon} 
                        className={s.icon_check}
                        style={(props.check == props.index) ? {display: 'block'}: {display: 'none'}} />
                </div>
            </label>
        </div>
    )
}

export { ParamItem };