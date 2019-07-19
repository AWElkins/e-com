import ShopActionTypes from './shop.types';
import { firestore, covertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap,
})

export const fetchCollectionsFailure = errMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage,
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then( snapshot => {
            const collectionMap = covertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch( err => dispatch(fetchCollectionsFailure(err.message)))
    }
}