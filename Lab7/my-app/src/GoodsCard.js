import React from 'react';

function GoodsCard(props) {
    return (
        <div className="goods-card">
            <img src={props.image} alt={props.name} style={{ width: '30%', height: 'auto' }} />
            <h3>{props.name}</h3>
            <p>{props.price} грн</p>
        </div>
    );
}

export default GoodsCard;