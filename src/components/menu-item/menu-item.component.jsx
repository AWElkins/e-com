import React from 'react';
import './menu-items.styles.scss';

const MenuItem = ({ product, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className={'background-image'} style={{backgroundImage: `url(${imageUrl})`}} />
            <div className={'content'}>
                <h1 className={'title'}>{product}</h1>
                <span className={'substitle'}>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;