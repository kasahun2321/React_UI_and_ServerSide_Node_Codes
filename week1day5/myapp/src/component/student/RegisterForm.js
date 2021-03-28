
import React from 'react'


export default function Form(props) {

    return (
        <div>
            <input type="text" name="fname" placeholder="Enter your fname" onChange={props.onChangeHandler} />
            <input type="text" name="lname" placeholder="Enter your lname" onChange={props.onChangeHandler} />
            <button onClick={props.add}> AddStudent </button>
            <button onClick={props.getstudent}> getStudent </button>
            <button onClick={props.update}> updateStudent </button>
            
        </div>
    )
}
