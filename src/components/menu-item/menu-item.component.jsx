import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-items.styles.scss';

const MenuItem = ({ product, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`)}>
            <div className={'background-image'} style={{backgroundImage: `url(${imageUrl})`}} />
            <div className={'content'}>
                <h1 className={'title'}>{product}</h1>
                <span className={'substitle'}>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);