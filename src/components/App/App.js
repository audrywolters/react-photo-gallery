import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList: []
  }

  componentDidMount() {
    // console.log( 'in APP ' );
    // this.onClickLike(1);
    this.getGalleryList();
  }

  getGalleryList() {
    // get items from server via AXIOS
    axios({
      method: 'GET',
      url: '/gallery'
    }).then( ( response ) => {
      // AUDRY - remove later
      // console.log( 'back from GET:', response.data );
      
      // hold this data in state.items
      this.setState({
        galleryList: response.data
      }); 
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' );
    }) // end axios call
  } // end getItems

  onClickLike = ( pictureID ) => {
    console.log( 'App.js onClickLike ', pictureID );

    axios( {
      method: 'PUT',
      url: '/gallery/like/:id',
      data: pictureID
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
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList pictures={ this.state.galleryList } 
                     onClickLike={ this.onClickLike } />
      </div>
    ); // end return
    
  } // end render

} // end App

export default App;
