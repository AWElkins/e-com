import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = ({ collection, history }) => {
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className={ 'title-container' }>
                <span class={ 'title-back' }><Link onClick={ () => history.goBack()}>{"< Back"}</Link></span>
                <span class={ 'title-heading' }>{ title }</span>
            </h2>
            <div className={ 'items' }>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default withRouter(connect(mapStateToProps)(CollectionPage));