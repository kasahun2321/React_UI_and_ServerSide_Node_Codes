
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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.obj = { id: '', title: "", author: "", quantity: "0" }
    this.idONchangeevent = this.idONchangeevent.bind(this)
    this.titleONchangeevent1 = this.titleONchangeevent1.bind(this)
    this.authorONchangeevent2 = this.authorONchangeevent2.bind(this)
    this.addproduct = this.addproduct.bind(this)
    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)
    this.deleteAll = this.deleteAll.bind(this)
    this.quantityOnchage = this.quantityOnchage.bind(this)
  }
  state = {
    bookstore: [],
    selectedBookID: '',
    onoff: false
  }
  componentDidMount(prevProps, prevState) {
    this.fetchdata();
  }
  componentDidUpdate(prevProps, prevState) {


    this.fetchdata();
  }
  shouldComponentUpdate(prevProps, prevState) {

    if (prevProps.bookstore !== this.state.bookstore) {
      return true;
    }
    return false;
  }
  // when ever called fetch the data into state
  fetchdata = () => {
    axiosBaseURL.get('/students')
      .then(result => {
        console.log("my axios data", result.data)
        this.setState({ bookstore: result.data })
      }).catch(err => {
        console.log('error')
      })
  }
  //find by id and edit
  edit(id) {

    const tempbookstore = this.state.bookstore;
    axios.get('http://localhost:5000/students/' + id)
      .then(res => {
        console.log(res);
        console.log("result from edit", res.data);
        this.obj.id = res.data.id
        this.obj.title = res.data.title
        this.obj.author = res.data.author
        this.obj.quantity = res.data.quantity
        this.state.onoff = this.state.onoff ? false : true;
        alert("want to update id=" + id + "and the data from db " + res.data)
      })
    this.fetchdata()
  }
  delete(id) {

    console.log("test delete")
    //implementing axios by creating another .js file and imporing it with name  axiosBaseURL
    axiosBaseURL.delete('/students/' + id)
      .then(res => {
        console.log("delete console", res);
        console.log(res.data);
      })
    this.fetchdata();
  }
  deleteAll() {
    console.log("test all delete")
    //direct use of axios
    axios.delete('http://localhost:5000/students/')
      .then(res => {
        console.log("delete console", res);
        console.log(res.data);
      })
    this.fetchdata();
  }
  updatesave = () => {
    console.log(this.obj)
    let updateBook = this.obj
    alert(updateBook.id)
    axios.put('http://localhost:5000/students/' + updateBook.id, updateBook)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Book added succesfully")
        this.state.onoff = false;
        this.obj.id = ""
        this.obj.title = ""
        this.obj.author = ""
        this.obj.quantity = ""
      })
    this.fetchdata()

  }
  idONchangeevent(event) {
    this.obj.id = event.target.value;
  }
  titleONchangeevent1(event) {
    this.obj.title = event.target.value;
  }
  authorONchangeevent2(event) {
    this.obj.author = event.target.value;
  }
  quantityOnchage(event) {
    this.obj.quantity = event.target.value;
  }
  idONchangeeventp(event) {
    this.obj.id = event.target.value;
  }
  titleONchangeevent1p(event) {
    this.obj.title = event.target.value;
  }
  authorONchangeevent2p(event) {
    this.obj.author = event.target.value;
  }
  quantityOnchagep(event) {
    this.obj.quantity = event.target.value;
  }
  addproduct(e) {

    console.log(this.obj)
    let newBook = this.obj

    axios.post('http://localhost:5000/students', newBook)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.fetchdata()
        alert("Book added succesfully")
      })
  }
  showdetails = (id) => {
    alert('am the detail' + id)
    this.setState({ selectedBookID: id })
  }

  render() {
    let editform = null;
    if (this.state.onoff) {
      editform = <Editform
        obj={this.obj}
        save={this.updatesave}
        idONchangeevent={(event) => { this.idONchangeeventp(event) }}
        titleONchangeevent1={(event) => { this.titleONchangeevent1p(event) }}
        authorONchangeevent2={(event) => { this.authorONchangeevent2p(event) }}
        quantityOnchage={(event) => { this.quantityOnchagep(event) }}
      />
    }
    return (
      <Aux >
        <Createcomponenet
          obj={this.obj}
          additems={this.addproduct}
          deleteAll={this.deleteAll}
          idONchangeevent={(event) => { this.idONchangeevent(event) }}
          titleONchangeevent1={(event) => { this.titleONchangeevent1(event) }}
          authorONchangeevent2={(event) => { this.authorONchangeevent2(event) }}
          quantityOnchage={(event) => { this.quantityOnchage(event) }}
        />
        <hr />
        {editform}
        <hr />
        <h1 align='center'><b>Simple Book Managment System</b></h1>
        <Books
          books={this.state.bookstore}
          edit={this.edit}
          delete={this.delete}
          showdetails={this.showdetails}

        />

      </Aux>
    );
  }
}

export class MainPageApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
  }
}

export default App;
