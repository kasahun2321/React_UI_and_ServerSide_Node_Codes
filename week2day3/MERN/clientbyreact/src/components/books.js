import React from 'react';
import Aux from './auxilary';
import Book from './book';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
export default class books extends React.Component {
    render() {
        return (
            <Aux>
                <table border='1px' width="80%" align='center'>
                    <thead>
                        
                        <th>ID</th><th>Title</th><th>Author</th><th>Quantity</th><th colSpan='2'>CRUD</th>
                    </thead>
                    {
                        this.props.books.map((elem,index) => {
                            return (
                                <Book
                                    id={elem.id}
                                    title={elem.title}
                                    author={elem.author}
                                    quantity={elem.quantity}
                                    edit={(id)=>{this.props.edit(elem.id)}}
                                    delete={()=>{this.props.delete(elem.id)}}
                                />)
                        })
                    }
                </table>
                
            </Aux>


        )

    }
}
