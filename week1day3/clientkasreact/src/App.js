import logo from './logo.svg';
import './App.css';
import React from 'react'
import List from './list-student'
import Form from './new-student'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { username: '',age: null};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.curriculum = React.createRef()
  }
  handleChange(event) {
    event.preventDefault()
    this.setState({ value: event.target.value })
    alert(event.target.value)
  }
  handleSubmit(event) {
    // alert(this.state.username)
    alert(this.curriculum.current.files[0].name)
    event.preventDefault()
  }
 
  showHideButton() {
    // this.setState({showState: this.state.showState?false:true});
  }
  checkactionlister() {
    alert("event button")
  }
  
 
  render() {
    return (
      
      <div align="center">
        <img src="BB16ukcC.jpg" alt="companylogo" width="80%" height="50px" />

        <p>random{Math.random() * 100 + 1}</p>

        <p>{Date.now()}</p>

        <form onSubmit={this.handleSubmit}>
          
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input type="file" ref={this.curriculum} />
          <input type="submit" value="Submit" />
        </form>
        <select value="{this.state.age}" onChange="{this.handleChange}">
          <option value="teen">Less than 18</option>
          <option value="adult">18+</option>
        </select>
        <p>u are clikced the  {this.state.count} times</p>
    
        <button onClick={this.checkactionlister}>check action alert</button>
        <button onClick={this.showHideButton}>show/ hide</button>
       
        <input type="file" />

        {/* <List />*/}
        <Form />

      </div>
    )
  }
}

