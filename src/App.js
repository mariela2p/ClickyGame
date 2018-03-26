import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Cards/Cards';
import CardItem from './components/Cards/CardItem';
import vinyls from './vinyls.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Card>
          <CardItem
          image={vinyls}
          />
        </Card>
      <Footer />
      </div>
    );
  }
}

export default App;
