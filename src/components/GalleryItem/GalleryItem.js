import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

  state = {
    isDisplayingImage: true
  } // end state

  toggleImageAndDescription = () => {
    this.setState({
      isDisplayingImage: !this.state.isDisplayingImage
    })
  }

  onClickLike = () => {
    this.props.onClickLike( this.props.thisPicture.id );
  }

  render() {

    return (
      <div>

        <div onClick={ this.toggleImageAndDescription }>
          {
            this.state.isDisplayingImage
            ? 
            <img src={ this.props.thisPicture.path } />
            :
            <div className="description">{ this.props.thisPicture.description }</div>    
          }
        </div>
        
        <button onClick={ this.onClickLike }>&lt;3</button>
        
        <div>Liked: { this.props.thisPicture.likes }</div> 

      </div>
    ); // end return

  } // end render

} // end class

export default GalleryItem;
