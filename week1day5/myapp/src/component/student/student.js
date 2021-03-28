import React from 'react'

export default function Student(props) {
    
    return (
        <div> 
            <table border="1" width="100%">
                <thead></thead>
                <tbody>
                    <tr>
                        
                        <td> {props.fname}</td>
                        <td> {props.lname}</td>
                        <td> <button onClick={props.deletebutton}>delete</button></td>
                    
                    </tr></tbody>
            </table>
          
        
        </div>
    )
    
}
