
import React from 'react'

export default function Form() {

    return (
        <div>

            <form>
                <fieldset>
                    <legend>Registartion form</legend>
                    <label>ID</label>
                    <input type="text"></input><br/><br/>
                    <label>fname</label>
                    <input type="text"></input><br/><br/>
                    <label>Lname</label>
                    <input type="text"></input><br/><br/>
                    <label>Major</label>
                    <input type="text"></input><br/><br/>
                    <label>Email</label>
                    <input type="email"></input><br/><br/>
                    <button type="button" id='savebtn'>save</button>
                </fieldset>

            </form>
        </div>
    )
}