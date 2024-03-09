const box = document.querySelector('.box');

function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            let i = 1;
            for (let todo of todos) {
                box.innerHTML += `<div class="main">
                    <h3>${i++}</h3>
                    <p>UserId: ${todo.userId}</p>
                    <p>Id: ${todo.id}</p>
                    <p>Title: ${todo.title}</p>
                    <p>Completed: ${todo.completed}</p>
                </div>`;
            }
        })
        .catch(error => console.log(error));
}

getData();
