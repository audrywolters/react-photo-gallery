import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

class App extends Component {

  state = {
    galleryList: []
  }

  componentDidMount() {
    this.getGalleryList();
  }

  getGalleryList() {
    // get items from server via AXIOS
    axios({
      method: 'GET',
      url: '/gallery'
    }).then( ( response ) => {
      // AUDRY - remove later
      console.log( 'back from GET:', response.data );
      
      // hold this data in state.items
      this.setState({
        galleryList: response.data
      }); 
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' );
    })
  }

  onClickLike = ( pictureID ) => {
    console.log( 'App.js onClickLike ', pictureID );

    axios( {
      method: 'PUT',
      url: `/gallery/like/${ pictureID }`
    })    
    .then( ( response ) => {
      console.log( 'put response: ' + response.data );
      this.getGalleryList();
    })      
    .catch( ( error ) => {
      console.log( 'got error!: ', error );
    })
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Fun with Friends</h1>
        </header>
        <br/>
        <GalleryList pictures={ this.state.galleryList }
                     onClickLike={ this.onClickLike }
        />

      </div>
    );
    
  }

}

export default App;
