import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
    
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.test)) {
            return
        }
        const newTodos = [todo, ...todos] 
        newTodos.reverse();
        setTodos(newTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.test)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

  return (
    <div>
        <h1>To Do for Today</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>
  )
}

export default TodoList