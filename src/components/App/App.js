import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList: []
  }

  componentDidMount() {
    this.getGalleryList();
  }

  getGalleryList(){
    // get items from server via AXIOS
    axios({
      method: 'GET',
      url: '/gallery'
    }).then( ( response ) =>{
      console.log( 'back from GET:', response.data );
      // hold this data in state.items
      this.setState({
        galleryList: response.data
      }); 
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' );
    }) // end axios call
  } // end getItems

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList pictures={ this.state.galleryList } />
      </div>
    ); // end return
    
  } // end render

} // end App

export default App;
