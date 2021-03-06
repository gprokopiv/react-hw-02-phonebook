import { useState} from 'react';
import TodosList from '../components/TodosList';
import TodosInputForm from '../components/TodosInputForm';


const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  
  const handleSubmit = (todo) => {
    if (todos.find(({value}) => value === todo.value)) return;
    
    setTodos((prevState) => [todo, ...prevState])
  }

  const handleDeleteTodo = (id) => setTodos(
    (prevState) => prevState.filter((todo) => todo.id !==id))

   const handleToggleTodo = (id) => {
    setTodos(prevState => prevState.map(todo=> todo.id=== id ? {...todo, isDone: !todo.isDone} : todo))
   };
    
  return (
    <div className='todos'> 
    <h1>
      Todos
    </h1>
    <TodosInputForm onSubmit={handleSubmit}/>
    <TodosList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo}/>

  </div>
  )
}

export default TodoPage;