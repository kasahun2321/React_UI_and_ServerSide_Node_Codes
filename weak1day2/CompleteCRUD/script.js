//temporary storage 
let personArr = [{
    id: 1,
    fname: 'John',
    lname: 'Doe',
    major: 'MSD',
    email: 'johndoe@miu.edu'
}];


document.getElementById('savebtn').onclick = function () {
    let id = document.getElementById('id').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let major = document.getElementById('major').value;
    let email = document.getElementById('email').value;

    let objperson = {
        "id": `${id}`,
        "fname": `${fname}`,
        "lname": `${lname}`,
        "major": `${major}`,
        "email": `${email}`
    };
    personArr.push(objperson)
    console.log(personArr)
    // alert(id + fname + lname + major + email)

    if (personArr.length > 0) {
        let temp = "";
        let count = 1;
        personArr.forEach(kas => {

            temp += "<tr>";
            temp += "<td>" + count++ + "</td>";
            temp += "<td>" + kas.id + "</td>";
            temp += "<td>" + kas.fname + "</td>";
            temp += "<td>" + kas.lname + "</td>";
            temp += "<td>" + kas.major + "</td>";
            temp += "<td>" + kas.email + "</td>";
            temp += "<td>" + `<button class="btn btn-danger" onclick="DeleteRowFunction(${kas.id})">Delete</button>` + "</td></tr>";

        });
        document.getElementById("data").innerHTML = temp;
    }
    else { 
        alert("array is empty")
    }
}
//deleting every row by targeting event on the html table
function DeleteRowFunction(x) {
    console.log(x)
    personArr = personArr.filter(data => {
        console.log(data)
        console.log(typeof (data.ID), typeof (x))
        return parseInt(data.id) !== x;
    })
    // event.target will be the input element.
    var td = event.target.parentNode;
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}
//deleting element accepting its id from the input feld
function deletUserByID() {
    
    let id_no = document.getElementById('id_tobe_deleted').value
     personArr = personArr.filter(data => {
        return data.id !== id_no

    })

}

function listAll() {
    if (personArr.length > 0) {
        let temp = "";
        let count = 1;
        personArr.forEach(kas => {

            temp += "<tr>";
            temp += "<td>" + count++ + "</td>";
            temp += "<td>" + kas.id + "</td>";
            temp += "<td>" + kas.fname + "</td>";
            temp += "<td>" + kas.lname + "</td>";
            temp += "<td>" + kas.major + "</td>";
            temp += "<td>" + kas.email + "</td>";
            temp += "<td>" + `<button class="btn btn-danger" onclick="DeleteRowFunction()">Delete</button>` + "</td></tr>";

        });
        document.getElementById("data").innerHTML = temp;
    }
    else {
        alert("array is empty")
    }
}
