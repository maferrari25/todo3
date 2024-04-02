import { useState } from 'react';
import './App.css'

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Pesquisar from './components/Pesquisar';
import Filter from './components/Filter';



function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar Funcionalidade X no Sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudo',
      isCompleted: false,
    }
  ]
  )

  const [pesquisar, setPesquisar] = useState('');

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState('Asc')

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
    ];
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const fielteredTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null);
    setTodos(fielteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Pesquisar pesquisar={pesquisar} setPesquisar={setPesquisar} />
      <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <div className='todo-list'>
        {todos
          .filter((todo) => filter === "All"
            ? true
            : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted)
          .filter((todo) =>
            todo.text.toLowerCase().includes(pesquisar.toLowerCase())
          )
          .sort((a, b) => sort === "Asc" 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
