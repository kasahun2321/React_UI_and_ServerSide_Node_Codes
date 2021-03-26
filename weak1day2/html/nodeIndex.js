let div = document.getElementById('root');
const url = `http://localhost:5000/users`

function listdata() {
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
            div.innerHTML = JSON.stringify("test data" + data[0].name);
            // alert("i am list all button")
            if (data.length > 0) {
                let temp = "";
                let count = 1;
                data.forEach(kas => {
                    // console.log(kas)
                    temp += "<tr>";
                    temp += "<td>" + count++ + "</td>";
                    temp += "<td>" + kas._id + "</td>";
                    temp += "<td>" + kas.name + "</td>";
                    temp += "<td>" + kas.age + "</td>";
                    temp += "<td>" + kas.department + "</td>";
                    temp += "<td>" + kas.email + "</td>";
                    temp += "<td>" + `<button class="btn btn-danger" onclick="DeleteRowFunction(${kas.id})">Delete</button>` + "</td></tr>";

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
function DeleteRowFunction() {
    // event.target will be the input element.
    var td = event.target.parentNode;
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

function adddata() {
alert("am add adta button")
    fetch(url, {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({name:"the world class man"})

    }).then(res => {
        return res.json()

    })
  .then(data => console.log(data))
        .catch(error => console.log(error))
}
