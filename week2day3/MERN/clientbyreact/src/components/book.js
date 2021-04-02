import React from 'react'
import Aux from './auxilary'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
export default class Book extends React.Component {
    render() {
        return (
            <Aux>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.title}</td>
                    <td>{this.props.author}</td>
                    <td>{this.props.quantity}</td>
                    <td><button onClick={this.props.edit} className="btn btn-info">Edit</button>
                    <button onClick={this.props.delete} className="btn btn-danger">Delete</button></td>
                    <td><button onClick={this.props.showdetails} className="btn btn-danger">show details</button></td>

                </tr>
            </Aux>
        )
    }
}
