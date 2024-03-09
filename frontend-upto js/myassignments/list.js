let tableBody = document.querySelector('.body');

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(users => {
            for (let user of users) {
                console.log(user);
                tableBody.innerHTML += `
                <tr>
                    <td>${user.userId}</td>
                    <td>${user.id}</td>
                    <td>${user.title}</td>
                    <td style="text-align:center;">${user.completed}</td>
                </tr>
                `;
            }
        })
        .catch(error => console.log(error));
}

fetchUsers();
