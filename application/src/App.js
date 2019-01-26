import React, { Component } from 'react';
import './App.css';
import NavSquare from './components/NavSquare';
import axios from 'axios'
import data from './data.json'



class App extends Component {
  constructor(){
    super();
    this.state={
      navItems: []
    }
  }
  componentDidMount(){
   this.setState({navItems: data.Navigation})
  }

  render() {
    return (
      <div className="App">
        {this.state.navItems.map(nav =>{
          return <NavSquare title={nav.title} icon={nav.icon}/>
        })}
      </div>
    );
  }
}

export default App;
