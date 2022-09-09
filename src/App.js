import React from 'react'; 
import { TodoCounter } from './TodoCounter'; 
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem'; 
import { CreateTodoButton } from './CreateTodoButton'; 

const todos = [
  { text: 'Tender la cama', completed: true }, 
  { text: 'Asearme', completed: false }, 
  { text: 'Tomar el Desayuno', completed: false }, 
  { text: 'Leer Noticias', completed: false },]; 

  function App() {
    return (
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>{todos.map(todo => (<TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed} />))}
        </TodoList>
        <CreateTodoButton />
      </React.Fragment>
    );
}
export default App;