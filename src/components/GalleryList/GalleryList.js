import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {

  state = {
    pictures: []
  } // end state

  // AUDRY - delete if not needed
  componentDidMount() {
    console.log( 'in gallery LIST ' );
  } // end componentDidMount

  render() {

    return (
      <div>
        <h1>GalleryList</h1>
        <ul>
          { this.props.pictures.map( ( picture ) => <GalleryItem key={ picture.id } thisPicture={ picture } /> ) }
        </ul>
      </div>
    ); // end return

  } // end render

} // end class

export default GalleryList;
