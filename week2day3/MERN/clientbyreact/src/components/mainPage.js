
import React from 'react'
import Books from './books'
import Login from './loginRegister/login'
import Register from './loginRegister/register'
import Aux from './auxilary'
import Createcomponenet from './createcomponent'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';

import {
    Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

export default class MainPage extends React.Component {
    render() {

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        }
        const container = {
            width:'80%'
        }

        return (
            <Aux style={this.container}>
                <br/>
                <table width='80%' align='center'>
                    <tr>
                        
                        <td><Link className='btn btn-info btn-block' to="/" style={this.mystyle}>Home</Link></td>
                        <td><Link className='btn btn-info btn-block' to="/login" style={this.mystyle}>login</Link></td>
                        <td><Link className='btn btn-info btn-block' to="/register" style={this.mystyle}>register</Link></td>
                        <td><Link className='btn btn-info btn-block' to="/addbook" style={this.mystyle}>addbook</Link></td>
                        <td><Link className='btn btn-info btn-block' to="/listbook" style={this.mystyle}>listbook</Link></td>
                        <td><div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <div className="input-group-btn">
                                    <button className="btn btn-danger" type="submit">
                                        <i className="glyphicon glyphicon-search">search</i>
                                    </button>
                                </div>
                            </div>
                        </div></td>
                    </tr>
                </table>
                <Route path='/' exact component={App} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/listbook' exact component={App} />
                <Route path='/addbook' exact component={Createcomponenet} />
            </Aux>
        );
    }
}
