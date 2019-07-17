import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
    return (
        <div className={ 'collections-overview' }>
            {
                collections.map(({ id, ...otheCollectionsProps}) => {
                    return <CollectionPreview key={id} {...otheCollectionsProps} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionOverview);