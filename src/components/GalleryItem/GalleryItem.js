import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

  state = {
    isDisplayingImage: true,
    likes: 0
  } // end state

  // AUDRY - delete if not neededs
  componentDidMount() {
    // console.log( 'in gallery ITEM ' );
  } // end componentDidMount

  toggleImageAndDescription = () => {
    this.setState({
      isDisplayingImage: !this.state.isDisplayingImage
    })
  }

  onClickLike = () => {
    this.props.onClickLike('in ITEM');
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
        <div>LIKES: { this.props.thisPicture.likes }</div> 
        {
          // console.log(this.state.likes)
        }
      </div>
    ); // end return

  } // end render

} // end class

export default GalleryItem;
