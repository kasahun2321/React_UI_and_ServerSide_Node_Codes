
// import './App.css';
import React from 'react'
import Books from './components/books'
import Aux from './components/auxilary'
import Createcomponenet from './components/createcomponent'
import Editform from './components/editBook'
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axiosBaseURL from './components/axiosBaseUrl'
import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/mainPage'

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
  }
}

 export default App;
