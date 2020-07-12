import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {

  // AUDRY - delete if not needed
  componentDidMount() {
    // console.log( 'in gallery LIST ' );
  } // end componentDidMount

  // listClickLike = () => {
  //   this.props.clickLike( 'in LIST' );

  // }

  render() {

    return (
      <div>
        <h1>GalleryList</h1>
        <ul>
          { this.props.pictures.map( ( picture ) => 
                <GalleryItem key={ picture.id } 
                thisPicture={ picture } 
                onClickLike={ this.props.onClickLike } 
                /> ) }
        </ul>
        {/* <button onClick={ this.listClickLike }>List</button> */}
      </div>
    ); // end return

  } // end render

} // end class

export default GalleryList;
