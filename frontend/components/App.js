import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: true
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }
  render() {

    return (
      <div>
        Todo App
        <ul>
          {
            todos.map(todo=> {
              return (<li>{todo.task} { todo.completed?<span>-completed</span> : <span></span>}</li>)
            })
          }
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
