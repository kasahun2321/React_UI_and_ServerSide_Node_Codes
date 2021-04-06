import React, { useState } from 'react';
import axios from 'axios';
import Aux from '../auxilary'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';


class Login extends React.Component {
    render() {

        return (

            <Aux>
                <h1 align='center'></h1>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h1 align='center'>Sign in
                    </h1>

                        <input type="text" placeholder="Useranme" name='useranme' className="form-control"
                            onChange={this.props.unameOnchanege} /><br />
                        <input type="text" placeholder="password" name='password' className="form-control"
                            onChange={this.props.passwordeOnchanege} /><br />
                        <input type="submit" onClick={this.props.loginuser} className="btn btn-primary btn-block" value="login" />

                        <input type="submit" className="btn btn-primary btn-block" value="register" />
                    </div>

                </div>
            </Aux>

        )
    }
}

export default Login;



