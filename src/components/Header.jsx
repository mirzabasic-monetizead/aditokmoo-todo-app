import { useEffect, useRef, useState } from "react"
// Components
import { TodoForm } from "./TodoForm"
import { TodoFilter } from "./TodoFilter"
import { TodoList } from "./TodoList"
// CSS
import './css/header.css'

export const Header = () => {
    const [ todos, setTodos ] = useState([]);
    const [ isChecked, setIsChecked ] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        // Fetch todos from localStorage
        const todosFromLocalStorage = localStorage.getItem('todos');

        // Check if todos exist in localStorage
        if(todosFromLocalStorage) {
            setTodos(JSON.parse(todosFromLocalStorage))
        }
    }, [])

    // Add Todo Function
    const addTodo = (e) => {
        e.preventDefault();

        // New todo object
        const newTodo = {
            task: inputRef.current.value,
            isChecked: false
        }

        if(inputRef.current.value !== '') {
            // Add todo to todos state
            setTodos(prevState => [...prevState, newTodo]);

            // Save todos to localStorage
            const localStorageTodos = [];
            localStorageTodos.push(...todos, newTodo);
            localStorage.setItem('todos', JSON.stringify(localStorageTodos))

            // Clear input
            inputRef.current.value = ''
        } else {
            alert('Please add task')
        }
    }

    // Delete todo function
    const deleteTodo = (id) => {
        // New array with deleted todo
        const newArr = todos.filter((_, index) => index !== id);
        
        // Update state with deleted todo array
        setTodos(newArr)

        // Update localStorage with new array that has removed todo
        localStorage.setItem('todos' , JSON.stringify(newArr))
    };
    
    // Handle Check Function
    const handleCheck = (e, id) => {
        const newArr = todos.map((item, index) => {
            if(index === id) {
                return {
                    ...item,
                    isChecked: e.target.checked
                }
            }
            return item
        })

        // Save checked todos in state
        setTodos(newArr)

        // Save checked todos in localStorage
        localStorage.setItem('todos', JSON.stringify(newArr))
    }

    // If checked show checked todos if not show all todos
    const filterTodos = isChecked ? todos.filter(todo => todo.isChecked) : todos;

    return (
        <header className="header">
            <div className="container">
                <div className="header-section">
                    <h1>Todo App</h1>
                    <TodoForm addTodo={addTodo} inputRef={inputRef} />
                    <TodoList filterTodos={filterTodos} handleCheck={handleCheck} deleteTodo={deleteTodo} />
                    <TodoFilter setIsChecked={setIsChecked} isChecked={isChecked} />
                </div>
            </div>
        </header>
    )
}