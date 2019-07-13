import React from 'react';
import './homepage.styles.scss';

import Dictionary from '../../components/directory/directory.component';

const HomePage = () => {
    return (
            <div className={'homepage'}>
                <Dictionary />
            </div>
    )
}

export default HomePage;