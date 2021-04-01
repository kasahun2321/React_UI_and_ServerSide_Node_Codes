
// import './App.css';
import React from 'react'
import Books from './components/books'
import Aux from './components/auxilary'
import Createcomponenet from './components/createcomponent'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.obj = { id: '', title: "", author: "", quantity: "" }
    this.idONchangeevent = this.idONchangeevent.bind(this)
    this.titleONchangeevent1 = this.titleONchangeevent1.bind(this)
    this.authorONchangeevent2 = this.authorONchangeevent2.bind(this)
    this.addproduct = this.addproduct.bind(this)
    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)
    this.quantityOnchage=this.quantityOnchage.bind(this)
  }

  state = {
    bookstore: []

  }
  componentDidMount() {
    this.fetchdata()
  }
  componentDidUpdate(nextprops)
  {

    this.fetchdata();

  }
  //when ever called fetch the data into state
  fetchdata = () => {
    axios.get('http://localhost:5000/students')
      .then(result => {
        console.log("my axios data", result.data)
        this.setState({ bookstore: result.data })
      })
  }
  //find by id and edit
  edit(id) {

    const tempbookstore = this.state.bookstore;
    const ix = tempbookstore.indexOf(this.getItem(id));
    const editItem = tempbookstore[ix]
    // this.obj.id = editItem.id;
    // this.obj.title = editItem.title;
    // this.obj.author = editItem.author;
    // this.obj.quantity = editItem.quantity;
  //   axios.put('http://localhost:5000/students'+id, this.obj)
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })
  // this.fetchdata()


  }
  getItem(id) {
    const result = this.state.bookstore.find(item => {
      return item.id === id
    })
    return result;
  }
  delete(id) {

    console.log("test delete")
    axios.delete('http://localhost:5000/students/' + id)
      .then(res => {
        console.log("delete console", res);
        console.log(res.data);
      })
    this.fetchdata();


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
  addproduct(e) {
    // e.preventDefault();
    console.log(this.obj)
    let newBook = this.obj

    axios.post('http://localhost:5000/students', newBook)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    this.fetchdata()


  }

  render() {
    return (
      <Aux >

        <Createcomponenet
          additems={this.addproduct}
          idONchangeevent={(event) => { this.idONchangeevent(event) }}
          titleONchangeevent1={(event) => { this.titleONchangeevent1(event) }}
          authorONchangeevent2={(event) => { this.authorONchangeevent2(event) }}
          quantityOnchage={(event) => { this.quantityOnchage(event) }}
        />
        <hr /><hr />
        <h1 align='center'><b>Simple Book Managment System</b></h1>
        <Books
          books={this.state.bookstore}
          edit={this.edit}
          delete={this.delete}
        />

      </Aux>
    );
  }
}

export default App;