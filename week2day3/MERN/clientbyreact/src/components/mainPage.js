
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
        return (
            <Aux>
                <header>

                    <nav className='navbar navbar-inverse'>
                        <ul className="nav navbar-nav">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                            <li><Link to='/addbook'>Add booK</Link></li>
                            <li><Link to='/listbook'>List book</Link></li>
                            
                        </ul>
                        <div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="glyphicon glyphicon-search">search</i>
                                        </button>
                                    </div>                               
                            </div>
                        </div>
                    </nav>
                </header>
                <Route path='/' exact component={App} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/listbook' exact component={App} />
                <Route path='/addbook' exact component={Createcomponenet} />
            </Aux>
        );
    }
}
