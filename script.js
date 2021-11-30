//logout api call
function logout() {
    let url = ' https://unvcbtiihieuqvojaqos.supabase.co/auth/v1/user';
    // let token = localStorage.getItem('Acess_Token', JSON.parse(tok));
    // console.log(tok);
    fetch(url, {
        method: 'POST',
        headers: {
            'content-Type': "application/json",
            'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTM5NTU2MywiZXhwIjoxOTUwOTcxNTYzfQ.OmGhNW11V2cwQerXEY8eIlxsCVjRrKYeDF7Qki3g2b4",
            'Auhtorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM1NDE2NzA5LCJzdWIiOiJjMmMyOWVkNS0xMDg1LTQ1MjQtYjIyMi0xZWQxNTBhYWRmNDMiLCJlbWFpbCI6ImNvZGFrdWNvZGVzMzIxQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.sCq7xooTRWDz60yXJmKytE1CDLOIzu1uyN3g7w8YvJk',
        },
        body: {}

    })

    location.replace("login.html");

}

display()

function Createpost() {
    event.preventDefault();
    let url = 'https://unvcbtiihieuqvojaqos.supabase.co/rest/v1/post';

    let Name = document.getElementById('name');
    let Description = document.getElementById('description');
    let Positionn = document.getElementById('position');
    let Image = document.getElementById('image_url');

    fetch(url, {
        method: 'POST',
        headers: {
            'content-Type': "application/json",
            'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTM5NTU2MywiZXhwIjoxOTUwOTcxNTYzfQ.OmGhNW11V2cwQerXEY8eIlxsCVjRrKYeDF7Qki3g2b4",
            'Auhtorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM1NDIyMTA5LCJzdWIiOiJjMmMyOWVkNS0xMDg1LTQ1MjQtYjIyMi0xZWQxNTBhYWRmNDMiLCJlbWFpbCI6ImNvZGFrdWNvZGVzMzIxQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.SQtivs10abYrRLHqXPcb0acRuE053lIfJrEzBDvV8Ys'
        },
        body: JSON.stringify({
            name: Name.value,
            description: Description.value,
            position: Positionn.value,
            image_url: Image.value
        })

    })
    Name.value = "";
    Description.value = "";
    Positionn.value = "";
    Image.value = "";

    display()

}

function display() {
    let table = document.getElementById('tablelist')
    table.innerHTML = ""
    let url = 'https://unvcbtiihieuqvojaqos.supabase.co/rest/v1/post';
    fetch(url, {
            method: 'GET',
            headers: {
                'content-Type': "application/json",
                'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTM5NTU2MywiZXhwIjoxOTUwOTcxNTYzfQ.OmGhNW11V2cwQerXEY8eIlxsCVjRrKYeDF7Qki3g2b4",
                'Auhtorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM1NDIyMTA5LCJzdWIiOiJjMmMyOWVkNS0xMDg1LTQ1MjQtYjIyMi0xZWQxNTBhYWRmNDMiLCJlbWFpbCI6ImNvZGFrdWNvZGVzMzIxQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.SQtivs10abYrRLHqXPcb0acRuE053lIfJrEzBDvV8Ys'
            },

        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            //console.log(data[0].name)

            for (let k in data) {
                let row = `<tr><td>${data[k].name}</td>
                <td> ${data[k].description}</td>
                 <td>${data[k].position}</td>
                 <td > <img id ="image_size" src ="${data[k].image_url}" > </td>
                 <td>
                 <a onClick = "editpost(${data[k].id})">Edit</a>
                  <a onClick = "deletepost(${data[k].id}})">Delete</a></td>
                 </tr>`

                table.innerHTML += row;


            }
        })

}

function deletepost(id) {
    // alert('helllo')
    //  console.log(eid)


    let url = ' https://unvcbtiihieuqvojaqos.supabase.co/rest/v1/post?id=eq.'
    fetch(url + eid, {
            method: 'DELETE',
            headers: {
                'content-Type': "application/json",
                'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTM5NTU2MywiZXhwIjoxOTUwOTcxNTYzfQ.OmGhNW11V2cwQerXEY8eIlxsCVjRrKYeDF7Qki3g2b4",
                'Auhtorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM1NDIyMTA5LCJzdWIiOiJjMmMyOWVkNS0xMDg1LTQ1MjQtYjIyMi0xZWQxNTBhYWRmNDMiLCJlbWFpbCI6ImNvZGFrdWNvZGVzMzIxQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.SQtivs10abYrRLHqXPcb0acRuE053lIfJrEzBDvV8Ys'
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.splice(eid, 1)
        })

    display();

}

function editpost() {
    let url = 'https://unvcbtiihieuqvojaqos.supabase.co/rest/v1/post?id=eq.';
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-Type': "application/json",
            'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTM5NTU2MywiZXhwIjoxOTUwOTcxNTYzfQ.OmGhNW11V2cwQerXEY8eIlxsCVjRrKYeDF7Qki3g2b4",
            'Auhtorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM1NDIyMTA5LCJzdWIiOiJjMmMyOWVkNS0xMDg1LTQ1MjQtYjIyMi0xZWQxNTBhYWRmNDMiLCJlbWFpbCI6ImNvZGFrdWNvZGVzMzIxQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.SQtivs10abYrRLHqXPcb0acRuE053lIfJrEzBDvV8Ys'
        },
        body: {}

    })
}

function sortData() {
    // alert("hello")
    let arr = [];
    let url = 'https://unvcbtiihieuqvojaqos.supabase.co/rest/v1/post';
    fetch(url, {
            method: 'GET',
            headers: {
                'content-Type': "application/json",
                'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTM5NTU2MywiZXhwIjoxOTUwOTcxNTYzfQ.OmGhNW11V2cwQerXEY8eIlxsCVjRrKYeDF7Qki3g2b4",
                'Auhtorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM1NDIyMTA5LCJzdWIiOiJjMmMyOWVkNS0xMDg1LTQ1MjQtYjIyMi0xZWQxNTBhYWRmNDMiLCJlbWFpbCI6ImNvZGFrdWNvZGVzMzIxQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwifSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIn0.SQtivs10abYrRLHqXPcb0acRuE053lIfJrEzBDvV8Ys'
            },

        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //console.log(data[0].name)

            arr = data;


        })

}

function sorted(data1) {
    console.log(data1);
    let data = data1.sort(function(a, b) {
        return b - a;
    })

    let table = document.getElementById('tablelist')
    table.innerHTML = ""
    for (let k in data) {
        let row = `<tr><td>${data[k].name}</td>
        <td> ${data[k].description}</td>
         <td>${data[k].position}</td>
         <td > <img id ="image_size" src ="${data[k].image_url}" > </td>
         <td>
         <a onClick = "editpost(${data[k].id})">Edit</a>
          <a onClick = "deletepost(${data[k].id}})">Delete</a></td>
         </tr>`

        table.innerHTML += row;


    }

}