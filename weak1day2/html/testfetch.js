
window.onload = function () {// const fetch = require("node-fetch");
    //alert("the delete button" + bookId)    
    const url = `http://localhost:5000/users`
    // Awaiting fetch which contains  
    // method, headers and content-type 
    fetch(url, {

        method: 'get',
        headers: {
            'content-type': 'application/json'
        }

    }).then(res => {
        return res.json()

    })
        .then(data => console.log(data))
        .catch(error => console.log(error))

}
