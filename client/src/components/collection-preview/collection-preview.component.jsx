import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './collection-preview.styles';

const CollectionPreview = ({title, items}) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer>
                <Link 
                    className={ 'title' }
                    to={`shop/${title.toLowerCase()}`}
                >
                    {title.toUpperCase()}
                </Link>
            </TitleContainer>
            <PreviewContainer>
                {
                    items
                        .filter((item,idx) => idx < 4)
                        .map( item => (
                            <CollectionItem key={ item.id } item={ item } />
                        ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview;