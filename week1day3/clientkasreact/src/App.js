import logo from './logo.svg';
import './App.css';
import React from 'react'
import Form from './aman'
import List2 from './list-student'
import ListBYclass from './LIstStudentByClass'
import MyForm from './registrationForm'

// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';


export default class App extends React.Component {

  state = {
    am:[
      { fname:"hello",lname:"world"}
    ]
  }



  render() {
    return (
      <div align="center">
        <Form fname={this.state.am[0].fname} Lname={this.state.am[0].lname}></Form>
        <List2/>
      </div>
    )
  }
}

