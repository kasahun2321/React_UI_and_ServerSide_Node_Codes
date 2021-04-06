
import React from 'react'
import Login from './loginRegister/login'
import Register from './loginRegister/register'
import Aux from './auxilary'
import Createcomponenet from './createcomponent'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksApp from '../booksApp';
import axios from 'axios';

import {
    Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter,
    history
} from 'react-router-dom';

class MainPage extends React.Component {

    constructor(props)
    {
        super(props)
        
    }
    state = {
        searchby:{ id: '' } ,
        isauthonticated: { tt: true },
        
        user: { username: '', password: '' }
    }

    unameOnchanege = (event) => {
        let result = this.state.user
        result.username = event.target.value;
        this.setState({ user: result })
    }
    passwordeOnchanege = (event) => {
        let result = this.state.user
        result.password = event.target.value;
        this.setState({ user: result })
    }

    loginuser = (e) => {


        if ((this.state.user.username) && (this.state.user.password)) {
            console.log("temportary ", this.state.user)
            axios.post('http://localhost:5000/loginregister/login', this.state.user)
                .then((response) => {
                    // this.setState({ isauthonticated: true })
                    console.log(response)
                    if (response.data.status === "success") {
                        alert("succesfully loged in")
                        console.log(response.data.result)
                        console.log("insied loxin funkas:", this.props)
                        // localStorage.setItem({ token: response.data.result });
                        let result = this.state.isauthonticated
                        result.tt = true
                        this.setState({ isauthonticated: result })
                    }
                    else {
                        alert("invlaid user")
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
        else {
            alert("you have to insert username and password")
        }
    }
    Logout = () => {
        alert("am logout")
        let result = this.state.isauthonticated
        result.tt = false
        this.setState({ isauthonticated: result })
       
    }
    searchOnchange = (event) => {
        let result =this.state.searchby 
        result.id=event.target.value
        this.setState({id:result})

        
        
    }
    search = ()=>
    {
        alert("hello seratch"+this.state.searchby.id)
        console.log("hhhh===",this.state.searchby.id)
        
    // axios.get('http://localhost:5000/students/' + this.state.searchid)
    //   .then(res => {
    //     console.log(res);
    //     console.log("result from edit", res.data);
    //   })

    }

    ///implement here stat and authenticater
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        }
        const container = {
            width: '80%'
        }

        if (!(this.state.isauthonticated.tt)) {
            return (<div>
                <Login
                    obj={this.state.user}
                    unameOnchanege={(e) => {
                        this.unameOnchanege(e)
                    }}
                    passwordeOnchanege={(e) => {
                        this.passwordeOnchanege(e)
                    }}
                    loginuser={this.loginuser}
                    // Logout={this.Logout}

                />
               
            </div>

            )
        }
        else {
            return (
                <Aux style={this.container}>
                    <br />

                    <table width='80%' align='center'>
                        <tbody>

                            <tr>

                                <td><Link className='btn btn-info btn-block' to="/" style={this.mystyle}>Home</Link></td>
                                <td><Link className='btn btn-info btn-block' to="/register" style={this.mystyle}>register</Link></td>
                                <td><Link className='btn btn-info btn-block' to="/addbook" style={this.mystyle}>addbook</Link></td>
                                <td><Link className='btn btn-info btn-block' to="/listbook" style={this.mystyle}>listbook</Link></td>
                                <td><Link className='btn btn-info btn-block' to="/listbook/" style={this.mystyle}>listbook</Link></td>
                                <td><div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" onChange={this.searchOnchage} />
                                        <div className="input-group-btn">
                                            <button className="btn btn-danger" type="submit" onClick={this.search}>
                                              search
                                            </button>
                                        </div>
                                    </div>
                                </div></td>
                                <td><Link className='btn btn-info btn-block' to="/" style={this.mystyle} onClick={this.Logout}>logout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    <Switch>
                        <Route path='/' exact component={BooksApp} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/listbook' exact component={BooksApp} />
                        <Route path='/listbook/:id' exact component={BooksApp} />
                        <Route path='/addbook' exact component={Createcomponenet} />
                        <Route path='/' exact component={Login}/>

                    </Switch>
                </Aux>
            );
        }
    }
}


export default withRouter(MainPage)
