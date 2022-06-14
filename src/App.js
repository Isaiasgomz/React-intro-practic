import React from 'react';
import { TodoCounter} from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { TodoButton } from './TodoButton'
// import './App.css';

const Todos = [
  {text : 'Ver el curso de React Intro', completed : false},
  {text : 'Ver el curso de React Hooks', completed : false},
  {text : 'Ver el curso de React Redux', completed : false}

]


function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {Todos.map( todo => (
          <TodoItem key = {todo.text} text ={todo.text} />
        ))}
      </TodoList>
      <TodoButton/>


    </React.Fragment>
    
  );
}

export default App;
