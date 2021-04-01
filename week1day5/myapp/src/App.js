
import './App.css';
import React, { useState } from 'react'
import StudentsApp from './component/student/studentsApp'
import Student from './component/student/student'
import RegisterForm from './component/student/RegisterForm'

function App() {

  const [myObject, setMyObject] = useState({
    student: [

      { fname: "kasahun", lname: "Shimelis" },
      { fname: "genenus", lname: "Shimelis" }
    ],

    fname: "", lname: "",
    showState: false
  });
  const eventHandler = (event) => {
    event.preventDefault();
    let name = event.target.name;
    console.log(name);
    let value = event.target.value;
    console.log(value);
    //updating the data with setstate update function 
    setMyObject(
      ({
        ...myObject,
        [name]: value
      }))
  }
  const deleteStudent = (id) => {
    alert("deleteStudent")
    let result = myObject.student.filter(element => {
      if (element.fname !== id) {
        return element;
      }


    })
    setMyObject({ student: result})
  }

  const getstudent = (event) => {
    alert("get student")
    setMyObject({ ...myObject, showState: <StudentsApp data={myObject.student} deleteStudent={deleteStudent}></StudentsApp> })

  }
  const updateStudent = (event) => {
    alert("update student")
  }

  const addStudent = () => {
    alert("yes sirr")
    const newStudent = {
      fname: myObject.fname, lname: myObject.lname
    }
    const studentcopy = [...myObject.student]
    if (myObject.fname && myObject.lname) {
      studentcopy.push(newStudent)
    }
    setMyObject({ student: studentcopy })
  }

  const hideshow = () => {

    setMyObject({ ...myObject, showState: myObject.showState ? false : true })
  }
  let show = null;
  if (myObject.showState) {
    show = <StudentsApp data={myObject.student} deleteStudent={deleteStudent} />
  }

  return (
    <>
      <div className="App">
        <h1>hello new feutures</h1>
        <button onClick={hideshow}> hide show</button>
        {show}

        <RegisterForm
          onChangeHandler={eventHandler}
          add={addStudent}

          getstudent={getstudent}
          delete={deleteStudent}
          update={updateStudent}
        />

      </div>
    </>
  );
}

export default App;
