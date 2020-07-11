import React, { Component } from 'react';

class GalleryList extends Component {

  state = {
    pictures: []
  }

  // AUDRY - delete if not needed
  componentDidMount(){
    console.log( 'GalleryList mounted' );   
  } // end componentDidMount

  render() {

    return (
      <div>
        <h1>GalleryList</h1>
        <ul>
          { this.props.pictures.map( ( picture ) => <img key={ picture.id } src={ picture.path } /> ) }
        </ul>
      </div>
    ); // end return

  } // end render

} // end class

export default GalleryList;
