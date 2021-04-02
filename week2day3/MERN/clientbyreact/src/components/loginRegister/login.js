import React, { useState } from 'react';
import axios from 'axios';
import Aux from '../auxilary'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    function loginuser(event) {
        event.preventDefault()
        // alert('this is login butto')

        let user = {
            username: username,
            password: password
        }
        http://localhost:5000/loginregister
        axios.post('http://localhost:5000/loginregister/login', user)
            .then(function (response) {
                console.log(response)
                if (response.data.result) {
                    alert("succesfully loged in")
                    console.log(response.data.result)
                }
                else {
                    alert("invlaid user")
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (

        <Aux>
            <h1 align='center'></h1>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <h1 align='center'>Sign in</h1>
                    <form onSubmit={loginuser}>
                        <input type="text" placeholder="Useranme" className="form-control" value={username}
                            onChange={(e) => { setusername(e.target.value); }} /><br/>
                        <input type="text" placeholder="password" className="form-control" value={password}
                            onChange={(e) => { setpassword(e.target.value) }} /><br/>
                        <input type="submit" className="btn btn-primary btn-block" value="login" />
                    </form>
                </div>

            </div>
        </Aux>

    )
}

export default Login;