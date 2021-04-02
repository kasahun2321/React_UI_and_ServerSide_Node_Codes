import React from 'react'
import Aux from './auxilary'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class bookscomponent extends React.Component {

    render() {
        return (

            <Aux >
                <h1 align='center'>Edit Product</h1>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>ID::</label>
                            <input type="text" value={this.props.obj.id} className="form-control" onChange={this.props.titleONchangeevent1}/></div>
                        <div className="form-group">
                            <label>Title::</label>{/*value={this.props.obj.title}*/}
                            <input type="text" value={this.props.obj.title} className="form-control" onChange={this.props.titleONchangeevent1} /></div>
                        <div className="form-group">
                            <label>Author::</label>
                            <input type="text" value={this.props.obj.author} className="form-control" onChange={(e)=>this.props.authorONchangeevent2(e)} /></div>
                        <div className="form-group">
                            <label>Quantity::</label>
                            <input type="number" value={this.props.obj.quantity} className="form-control" onChange={(e)=>this.props.quantityOnchage(e)} /></div>
                        <Button className="btn btn-success btn-block" onClick={this.props.save} variant="contained" color="primary" >Save </Button>
                    </div>
                   
                </div>



            </Aux>
        )
    }
}