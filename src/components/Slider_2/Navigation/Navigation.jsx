import React from 'react';

import s from './Navigation.module.css';

const Navigation = (props) => {

    return (
            <div >
                <button
                    value={props.value}
                    className={`${s.switcher_item} ${(props.value == props.indexSlide)? s.active_item : ''}`}
                    onClick={(el) => {
                        let val = el.currentTarget.value
                        props.setCheck(val)
                        props.setIndex(val)
                    }}
                />
            </div>
    )
}

export { Navigation };