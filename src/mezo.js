import React from 'react';
//rfce
const Mezo = (props) => {
    const itemClass = props.bomba && props.kattintva ? "red" : !props.bomba && props.kattintva ? "green" : ""
    return (
        <div className={'mezo ' + itemClass} onClick={props.kattintas}>{props.ertek}</div>
    )
}
export default Mezo