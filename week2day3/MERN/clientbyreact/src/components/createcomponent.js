import React from 'react'
import Aux from './auxilary'
export default class bookscomponent extends React.Component {

    render() {
        return (

            <div>
                <h1 align='center'>Add product</h1>
                <table width="80%" align="center">
                    <tr>
                        <td>
                            <label>ID::</label>

                            <input type="text" onChange={this.props.idONchangeevent} />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label>Title::</label>

                            <input type="text" onChange={this.props.titleONchangeevent1} />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label>Author::</label>

                            <input type="text" onChange={this.props.authorNchangeevent2} />
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <label>Quantity::</label>

                            <input type="text"  onChange={this.props.quantityOnchage} />
                        </td>

                    </tr>
                    
                    <tr><button onClick={this.props.additems} align='center'>Add Item</button>
                    </tr>
                </table>





            </div>
        )
    }
}