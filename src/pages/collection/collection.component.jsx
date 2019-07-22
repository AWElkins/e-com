import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

class CollectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    static getDerivedStateFromProps() {
        window.scrollTo(0, 0);
        return null;
    }

    render() {
        const { collection, history } = this.props;
        const { title, items } = collection;

        return (
            <div className='collection-page'>
                <h2 className={ 'title-container' }>
                    <span className={ 'title-back' } onClick={ () => history.goBack()}>&#10094; Back</span>
                    <span className={ 'title-heading' }>{ title }</span>
                </h2>
                <div className={ 'items' }>
                    {
                        items.map(item => <CollectionItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default withRouter(connect(mapStateToProps)(CollectionPage));