import React, { useState } from 'react';
import axios from 'axios';
import Aux from '../auxilary'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Register() {

    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    function addUser(event) {
        event.preventDefault()
        // alert('this is registration button')
        let user = {
            name: name,
            username: username,
            password: password
        }
        console.log(user)
        axios.post('http://localhost:5000/loginregister/signup', user).
            then((response) => {
                console.log(response.data);
                alert("registered succcefully")
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <Aux>
            <h1 align='center'></h1>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <h1 align='center'>Signup</h1>

                        <form onSubmit={addUser}>
                            <input type="text" placeholder="Name" className="form-control" value={name}
                                onChange={(e) => { setname(e.target.value); }} /><br />
                            <input type="text" placeholder="Useranme" className="form-control" value={username}

                                onChange={(e) => { setusername(e.target.value); }} /><br />
                            <input type="text" placeholder="password" className="form-control" value={password}
                                onChange={(e) => { setpassword(e.target.value) }} /><br />
                            <input type="submit" className="btn btn-primary btn-block" value="register" />
                        </form>
                    </div>
                </div>
            </div>
        </Aux>

    )
}

export default Register;