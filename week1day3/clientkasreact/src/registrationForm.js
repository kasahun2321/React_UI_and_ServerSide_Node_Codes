import React from 'react'

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', age: null, };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        let name = this.state.username;
        if (!Number(age) && name === "") {
            alert("Your age must be a number and value must be filled");
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                    placeholder="Enter name"
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                    placeholder="enter age" />
                <br />
                <br />
                <input type='submit' />
            </form>
        );
    }
}