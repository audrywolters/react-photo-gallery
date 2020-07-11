import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

  state = {
    likes: 0
  } // end state

  // AUDRY - delete if not neededs
  componentDidMount() {
    console.log( 'in gallery ITEM ' );
  } // end componentDidMount

  render() {

    return (
      <div>
        <img src={ this.props.thisPicture.path } />
        {/* <br />
        <span>ID: { this.props.thisPicture.id }</span><br />
        <span>DESCRIPTION: { this.props.thisPicture.description }</span><br />
        <span>LIKES: { this.props.thisPicture.likes }</span><br />
        <span>PATH: { this.props.thisPicture.path }</span><br /> */}
      </div>
    ); // end return

  } // end render

} // end class

export default GalleryItem;
