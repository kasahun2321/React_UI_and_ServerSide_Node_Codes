import logo from './logo.svg';
import './App.css';
import React from 'react'
import List from './list-student'

export default class App extends React.Component {
  render() {
    return (
      <div align="center">
        <List/>
      </div>
    )
  }
}

