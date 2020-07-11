import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
        <p>Gallery goes here</p>
        <ul>
          { this.state.galleryList.map( ( picture ) => <img key={ picture.id } src={ picture.path } />)}
        </ul>
      </div>
    );
  }
}

export default App;
