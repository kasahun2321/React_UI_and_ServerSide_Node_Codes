
// mY server end point to fetch the data
const url = `http://localhost:5000/students`

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
    console.log(objperson)
    fetch(url, {

        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(objperson)
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            alert("inserted successfully")
        })
        .catch(error => console.log(error))
}


//List the data from the server by accesing endpoint 
//http://localhost:5000/students/:id  method :get
function listAll() {
    let cc = confirm("are u want to list all from the database")
    if (cc) {
        fetch(url, {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
        })
            .then(data => {
                console.log(data[0].name)

                if (data.length > 0) {
                    let temp = "";
                    let count = 1;
                    data.forEach(kas => {
                        // console.log(kas)
                        temp += "<tr>";
                        temp += "<td>" + count++ + "</td>";
                        temp += "<td>" + kas.id + "</td>";
                        temp += "<td>" + kas.fname + "</td>";
                        temp += "<td>" + kas.lname + "</td>";
                        temp += "<td>" + kas.major + "</td>";
                        temp += "<td>" + kas.email + "</td>";
                        temp += "<td>" + `<button class="btn btn-danger" onclick="DeleteRowFunction(${kas.id})">Delete</button>` + "</td>";
                        temp += "<td>" + `<button class="btn btn-success" onclick="EditRowFunction(${kas.id})">Edit</button>` + "</td></tr > ";

                    }

                    );


                    document.getElementById("data").innerHTML = temp

                }
                else {
                    alert("array is empty")
                }
            })
            .catch(error => console.log(error))

    }
    else {
        alert("diplay data failed ")
    }

}

function DeleteRowFunction(id) {
    let uri = `http://localhost:5000/students/${id}`
    console.log(uri)
    fetch(uri, {
        method: 'delete'


    })
        .then(data => {
            return data.json();
        })
        .then(response => {
            console.log(response)
            alert(response)

        })
    // event.target will be the input element.
    var td = event.target.parentNode;
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}
function EditRowFunction(id) {
//not completed but the concept is first fetch from the database by using ID 
// and populate the data into form then click save then update done
    const url = `http://localhost:5000/students/${id}`
    fetch(url ,{
        method: 'put',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        return res.json()
    })
        .then(data => {
            console.log(data)
        })
    // let id = document.getElementById('id').value;
    // let fname = document.getElementById('fname').value;
    // let lname = document.getElementById('lname').value;
    // let major = document.getElementById('major').value;
    // let email = document.getElementById('email').value;

    // let objperson = {
    //     "id": `${id}`,
    //     "fname": `${fname}`,
    //     "lname": `${lname}`,
    //     "major": `${major}`,
    //     "email": `${email}`
    // };
    // console.log(objperson)
    // fetch(url, {

    //     method: 'post',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(objperson)
    // })
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         alert("inserted successfully")
    //     })
    //     .catch(error => console.log(error))



}