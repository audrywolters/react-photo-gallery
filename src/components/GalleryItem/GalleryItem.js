import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

  state = {
    isDisplayingImage: true
  } // end state

  // AUDRY - delete if not neededs
  componentDidMount() {
    console.log( 'in gallery ITEM ' );
  } // end componentDidMount

  toggleImageAndDescription = () => {
    this.setState({
      isDisplayingImage: !this.state.isDisplayingImage
    })
  }

  render() {

    return (
        <div onClick={ this.toggleImageAndDescription }>
          {
            this.state.isDisplayingImage
            ? 
            <img src={ this.props.thisPicture.path } />
            :
            <div className="description">{ this.props.thisPicture.description }</div>    
          }
          
          {/* <span>LIKES: { this.props.thisPicture.likes }</span> */}

        </div>
    ); // end return

  } // end render

} // end class

export default GalleryItem;
