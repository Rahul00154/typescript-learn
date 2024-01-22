import './style.css'

interface Todo {
  title: string
  isCompleted: boolean
  id: string
}

const todos: Array<Todo> = []
//const todos:Todo[] =[];

const todoContainer = document.getElementsByClassName(
  'todo-container',
) as HTMLDivElement
