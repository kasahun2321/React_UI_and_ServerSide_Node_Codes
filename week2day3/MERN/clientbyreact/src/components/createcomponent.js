import React from 'react'
import Aux from './auxilary'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class bookscomponent extends React.Component {

    render() {
        return (
            <Aux >
                <h1 align='center'>Add Product</h1>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>ID::</label>
                            <input type="text" className="form-control" onChange={this.props.idONchangeevent} /></div>
                        <div className="form-group">
                            <label>Title::</label>{/*value={this.props.obj.title}*/}
                            <input type="text" className="form-control" onChange={this.props.titleONchangeevent1} /></div>
                        <div className="form-group">
                            <label>Author::</label>
                            <input type="text" className="form-control" onChange={this.props.authorONchangeevent2} /></div>
                        <div className="form-group">
                            <label>PDF::</label>
                            <input type="file" ref={this.props.pdf} /> </div>

                        <div className="form-group">
                            <label>Quantity::</label>
                            <input type="number" className="form-control" onChange={this.props.quantityOnchage} /></div>
                        <Button className="btn btn-success btn-block" onClick={this.props.additems} variant="contained" color="primary" >Add Item </Button>
                        <button className="btn btn-danger btn-block" onClick={this.props.deleteAll} variant="contained" color="primary" >DELETE ALL</button>

                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </Aux>
        )
    }
}