import React, { useState } from 'react'

let array = [];
let listdata;
export default function Form() {
    const [id, setid] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [major, setmajor] = useState('');
    const [email, setemail] = useState('');

    function adduser(event) {
        //to avoid form auto referesh
        event.preventDefault();
        alert("this is add user button");
        let user = {
            id: id,
            fname: fname,
            lname: lname,
            major: major,
            email: email
        }
        array.push(user);
        console.log("kas array:", array);
        listdata = array.map(obj => {
            {
                return <tr>
                    <td>{obj.id}</td>
                    <td>{obj.fname}</td>
                    <td>{obj.lname}</td>
                    <td>{obj.major}</td>
                    <td>{obj.email}</td>
                </tr>
            }
        })
        
    }

    return (
        <div>
            <form onSubmit={adduser}>
                <fieldset>
                    <legend>Registartion form</legend>
                    <label>ID</label>
                    <input type="text"
                        value={id}
                        onChange={(e) => { setid(e.target.value) }}
                    /><br /><br />
                    <label>Fname</label>
                    <input type="text"
                        value={fname}
                        onChange={(e) => { setfname(e.target.value) }}></input><br /><br />
                    <label>Lname</label>
                    <input type="text"
                        value={lname}
                        onChange={(e) => { setlname(e.target.value) }}></input><br /><br />
                    <label>Major</label>
                    <input type="text"
                        value={major}
                        onChange={(e) => { setmajor(e.target.value) }}></input><br /><br />
                    <label>Email</label>
                    <input type="email"
                        value={email} onChange={(e) => { setemail(e.target.value) }}></input><br /><br />
                    <input type="submit" value="adduser" />

                </fieldset>

            </form>
            <div>
                <table border='1px' width='100%'>
                    <thead><th>Fname</th><th>Lname</th><th>Major</th><th>Email</th></thead>
                    <tbody>
                       {listdata}
                    </tbody>
                </table>
            </div>

        </div>
    )
}