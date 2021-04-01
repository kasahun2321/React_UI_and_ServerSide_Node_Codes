import React from 'react'
import Aux from './auxilary'

export default class Book extends React.Component {
    render() {
        return (
            <Aux>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.title}</td>
                    <td>{this.props.author}</td>
                    <td>{this.props.quantity}</td>
                    <td><button onClick={this.props.edit}>Edit</button>
                    <button onClick={this.props.delete}>Delete</button></td>

                </tr>
            </Aux>
        )
    }
}
