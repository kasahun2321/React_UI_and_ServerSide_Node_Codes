import React from "react";

export default class ListStudent extends React.Component {
  state = {
    student: [{ fname: "adaa", lname: "lovlies", major: "Embeded programing", email: "ada@gmal.com" }],
    fname: "",
    lname: "",
    major: "",
    email: ""
  };
  listStudent() {
    let result = (
      <table border="1" cellpadding="0" width='80%'>
        <thead><th>Fname</th><th>Lname</th><th>Major</th><th>Email</th></thead>
        <tbody>
          {
            this.state.student.map((student) => {
              return (
                <tr>
                  {["fname", "lname", "major", 'email'].map((n) => 
                    (<td>{student[n]}</td>)
                   
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    );
    console.log(result);
    this.setState({ showStudent: result });
  }
  register = () => {
    let newstudent = {
      fname: this.state.fname,
      lname: this.state.lname,
      major: this.state.major,
      email: this.state.email,
    }

    if (newstudent.fname == "" || newstudent.lname == "" || newstudent.major == "" || newstudent.email == "") {
      alert("requiered filled are missing ")
    }
    else {
      this.setState({
        student: [...this.state.student,newstudent]
      })
    }

  }
  delete = () => {
    const result = this.state.student.filter((item, index) => { return index !== 0 })
    this.setState({ student: result })
  }
  updatefname(event) {
    this.setState({ fname: event.target.value });
  }
  updatelname(event) {
    this.setState({ lname: event.target.value });
  }
  updatemajorInput(event) {
    this.setState({ major: event.target.value });
  }
  updateemail(event) {
    this.setState({ email: event.target.value });
  }
  updateMajor() {
    let result = this.state.student.map((item, index) => {
      return {
        fname: item.fname,
        lname: item.lname,
        major: "computer science",
        email: item.email
      }
    })
    this.setState({student: result})
  }
  //every function inside class call's the render when it is Triggered
  render() {
    return (
      <div align='center' width='80%'>
        <legend><h1>Registartion form</h1></legend>
        <label>Fname</label><br />
        <input type="text" value={this.state.fname} onChange={(event) => { this.updatefname(event) }} /><br />
        <label>Lname</label> <br />
        <input type="text" value={this.state.lname} onChange={(event) => { this.updatelname(event) }} /><br />
        <label>Major</label> <br />
        <input type="text" value={this.state.major} onChange={(event) => { this.updatemajorInput(event) }} /><br />
        <label>Email</label><br />
        <input type="text" value={this.state.email} onChange={(event) => { this.updateemail(event) }} /><br />
        <h1>{this.state.showStudent}</h1>
        <button onClick={() => this.updateMajor()}>update</button>
        <button onClick={this.register}>Register</button>
        <button onClick={this.delete}>Delete</button>
        <button onClick={() => this.listStudent()}>List students</button>

      </div>
    );
  }
}






































// import React from 'react'
// export default class AddStu extends React.Component {
// state={
//   students:[]
// }

//  submit = (e) =>{
//   e.preventDefault()
//   console.log([document.getElementById("fname").value])
//   this.setState({students:this.state.students.concat([document.getElementById("fname").value,
//   document.getElementById("lname").value,
//   document.getElementById("major").value,

// ])})
// }

//   render(){
//     console.log(this.state)
//   return (
//     <div>
//       <form className="saveButton" onSubmit={this.submit}>
//         fname;<input type="text" id="fname"></input><br/>
//         lname;<input type="text" id="lname"></input><br/>
//         major;<input type="text" id="major"></input><br/>
//         <button>save</button>
//         </form>
//     </div>
//   );
// }
// }

/////how to use style