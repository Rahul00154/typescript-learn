import './style.css';

interface Todo {
  title: string;
  isCompleted: boolean;
  id: string;
}

const todos: Array<Todo> = [];
//const todos:Todo[] =[];

const todoContainer = document.querySelector(
  '.todo-container',
) as HTMLDivElement;

const todoInput = document.querySelector('#myForm > input') as HTMLInputElement;

const myForm = document.getElementById('myForm') as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  };

  todos.push(todo);
  todoInput.value = ''; //after setting the input value we clear the input field
  console.log(todos);
  //render todos item to show on the screen
  renderTodo(todos);
};

const getTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement('div');
  todo.className = 'todo';

  //creating checkbox
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.className = 'isCompleted';

  checkBox.checked = isCompleted;

  checkBox.onchange = () => {
    todos.find((item) => {
      if (item.id === id) {
        item.isCompleted = checkBox.checked;
      }
    });
    paraGraph.className = checkBox.checked ? 'textCut' : '';
  };

  // creating p tag for element
  const paraGraph: HTMLParagraphElement = document.createElement('p');
  paraGraph.innerText = title;
  paraGraph.className = checkBox.checked ? 'textCut' : '';
  //creating button for deleting
  const button: HTMLButtonElement = document.createElement('button');
  button.innerText = 'Delete';
  button.className = 'deleteBtn';

  button.onclick = () => {
    deleteTodo(id);
  };

  //appending all element in div

  todo.append(checkBox, paraGraph, button);

  todoContainer.append(todo);
};

const deleteTodo = (id: string) => {
  const idx = todos.findIndex((item) => item.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);
};

const renderTodo = (todos: Todo[]) => {
  todoContainer.innerText = '';
  todos.forEach((item) => {
    getTodoItem(item.title, item.isCompleted, item.id);
  });
};
