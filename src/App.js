import React, { Component } from 'react'
import Nav from './Nav';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user:null,
      post: [],
      name: 'Chet',
      age: 23
    }

  }

  componentDidMount(){
    console.log('first rendering is complete')

  }
methodNumber3() {
  return 'do something'
}


  render() {
    return (
      <div>
        <Nav></Nav>
        <h1>App</h1>
        <h3>The name is {this.state.name}</h3>
        </div>
    )
  }
}
