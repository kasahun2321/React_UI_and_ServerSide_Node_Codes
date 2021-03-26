
import React, { useState } from 'react'


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
        console.log(user);
        const url = `http://localhost:5000/users`
        fetch(url, {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
            
        })
            .then(data => console.log(data))
            .catch(error => console.log(error)) }

    return (
        <div>

            <form onSubmit={adduser}>
                <fieldset>
                    <legend>Registartion form</legend>
                    <label>ID</label>
                    <input type="text" value={id} onChange={(e) => { setid(e.target.value) }} ></input><br /><br />
                    <label>fname</label>
                    <input type="text" value={fname} onChange={(e) => { setfname(e.target.value) }}></input><br /><br />
                    <label>Lname</label>
                    <input type="text" value={lname} onChange={(e) => { setlname(e.target.value) }}></input><br /><br />
                    <label>Major</label>
                    <input type="text" value={major} onChange={(e) => { setmajor(e.target.value) }}></input><br /><br />
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }}></input><br /><br />
                    <input type="submit" value="adduser" />
                </fieldset>

            </form>
        </div>
    )
}