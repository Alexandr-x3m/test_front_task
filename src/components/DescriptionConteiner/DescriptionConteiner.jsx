import React from 'react';

import s from './DescriptionConteiner.module.css';

const DescriptionConteiner = (props) => {

    return (
        <div 
            className={s.conteiner}
            style={props.display ? {display: 'block'}: {display: 'none'}}>
            <div className={s.content}>
                <button 
                    className={s.return_back}
                    onClick={props.return} > ВЕРНУТЬСЯ </button>
                <p>Casual (кэжуал, русское произношение «кэжл», пер. «случайный, непреднамеренный, повседневный») – стиль, главными чертами которого являются практичность, удобство, простота силуэтов, непринужденность сочетаний, а также многослойность.</p>
                <p>Casual (кэжуал, русское произношение «кэжл», пер. «случайный, непреднамеренный, повседневный») – стиль, главными чертами которого являются практичность, удобство, простота силуэтов, непринужденность сочетаний, а также многослойность.</p>
                <p>Casual (кэжуал, русское произношение «кэжл», пер. «случайный, непреднамеренный, повседневный») – стиль, главными чертами которого являются практичность, удобство, простота силуэтов, непринужденность сочетаний, а также многослойность.</p>
            </div>
        </div>
    )
}

export { DescriptionConteiner };