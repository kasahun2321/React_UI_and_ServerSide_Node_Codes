
import React from 'react'
import Student from './student'

export default function StudentsApp(props) {

    return (
        <>
            {props.data.map(element => {
                return (
                    <Student
                        key={element.fname}
                        fname={element.fname}
                        lname={element.lname}
                        deletebutton={()=>{props.deleteStudent(element.fname)}}
                    />
                )

            })}

        </>
    )
}