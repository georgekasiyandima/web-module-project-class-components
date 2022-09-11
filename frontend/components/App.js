import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        Todo App
        <ul>
          <li>Walk the dog</li>
          <li>Take out trash</li>
          <li>Buy groceries</li>
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
