import React, { Component } from 'react';
import Square from "./components/square";
import './App.css';
import albums from "./albums.json"

class App extends Component {
  state = {
    albums: albums
  }

  score: 0;
  highscore: 0;

  _nextRound = () => {
    return albums.reverse();
  }

  _playGame = () => {


  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game <i className="fas fa-chess-queen"></i></h1>
        </header>

        <div className="Container">
          <square name={this.state.albums[0].name} image={this.state.albums[0].image} />
          <square name={this.state.albums[1].name} image={this.state.albums[1].image} />
          <square name={this.state.albums[2].name} image={this.state.albums[2].image} />
          <square name={this.state.albums[3].name} image={this.state.albums[3].image} />
          <p className='clearfix'></p>
          <square name={this.state.albums[4].name} image={this.state.albums[4].image} />
          <square name={this.state.albums[5].name} image={this.state.albums[5].image} />
          <square name={this.state.albums[6].name} image={this.state.albums[6].image} />
          <square name={this.state.albums[7].name} image={this.state.albums[7].image} />
          <p className='clearfix'></p>
          <square name={this.state.albums[8].name} image={this.state.albums[8].image} />
          <square name={this.state.albums[9].name} image={this.state.albums[9].image} />
          <square name={this.state.albums[10].name} image={this.state.albums[10].image} />
          <square name={this.state.albums[11].name} image={this.state.albums[11].image} />
          <p className='clearfix'></p>
        </div>
      </div>
    );
  }
}

export default App;
