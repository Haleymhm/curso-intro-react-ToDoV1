import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

const defaultTodos = [
  { text: 'Tender la cama', completed: false },
  { text: 'Asearme', completed: false },
  { text: 'Tomar el Desayuno', completed: false },
  { text: 'Leer Noticias', completed: false },
  { text: 'Hacer ejercicios', completed: false },];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos = []; // defaultTodos;

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!localStorageTodos) {
    // * Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
    parsedTodos = [];
  } else {
    // * Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedTodos = JSON.parse(localStorageTodos);
  }

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
     // * Convertimos a string nuestros TODOs
    const stringifiedTodos = JSON.stringify(newTodos);
     //* Los guardamos en el localStorage
    localStorage.setItem('TODOS_V1', stringifiedTodos);
     //? Actualizamos nuestro estado
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
     //* Convertimos a string nuestros TODOs
    const stringifiedTodos = JSON.stringify(newTodos);
     //* Los guardamos en el localStorage
    localStorage.setItem('TODOS_V1', stringifiedTodos);
     //? Actualizamos nuestro estado
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;