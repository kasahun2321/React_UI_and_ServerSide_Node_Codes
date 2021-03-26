import logo from './logo.svg';
import './App.css';
import React from 'react'
import Form from './new-student'
import List from './list-students'
import ListBYclass from './LIstStudentByClass'

// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';


function App() {
  return (
   
    <div><h2>hello world</h2>
      <butto className="btn btn-primery"> hello my button</butto>
      <Form /><br />
      <List/><br /><hr/>
      <ListBYclass/>
      </div>
  );
}

export default App;
