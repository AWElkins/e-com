import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import { Route } from 'react-router-dom';
import { firestore, covertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then( snapshot => {
            const collectionMap = covertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ loading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={ props => <CollectionOverviewWithSpinner isLoading={ loading } { ...props } /> } />
                <Route path={`${match.path}/:collectionId`} render={ props => <CollectionPageWithSpinner isLoading={ loading } { ...props } /> } />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);