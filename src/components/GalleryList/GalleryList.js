import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {

  render() {

    return (
      <div>
        
        <ul>
          { this.props.pictures.map( ( picture ) => 
                <GalleryItem key={ picture.id } 
                             thisPicture={ picture } 
                             onClickLike={ this.props.onClickLike } 
                /> ) }
        </ul>

      </div>
    );

  }

}

export default GalleryList;
