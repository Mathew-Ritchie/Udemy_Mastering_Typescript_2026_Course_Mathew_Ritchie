import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    LogTodo(id, title, completed)
});

const LogTodo  = (id: number, title: string, completed: Boolean) => {
    console.log(`
        The todo with ID: ${id}
        Has a title of: ${title}
        is it finished? ${completed}
        `);
}