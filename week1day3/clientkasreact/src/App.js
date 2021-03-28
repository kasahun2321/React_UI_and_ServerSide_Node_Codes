import logo from './logo.svg';
import './App.css';
import React from 'react'
import List from './list-student'
import Form from './new-student'

export default class App extends React.Component {
  state={showState: true}
  showHideButton() {
    // this.setState({showState: this.state.showState?false:true});
  }
  render() {
    return (
      <div align="center">
        <button onClick={this.showHideButton}>show/ hide</button>
        <List />
        <Form/>
      </div>
    )
  }
}

