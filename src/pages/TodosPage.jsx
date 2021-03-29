import { useState} from 'react';
import TodosList from '../components/TodosList';
import TodosInputForm from '../components/TodosInputForm';


const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  
  const handleSubmit = (todo) => {
    setTodos((prevState) => [todo, ...prevState])
  }
  return (
    <div className='todos'> 
    <h1>
      Todos
    </h1>
    <TodosInputForm onSubmit={handleSubmit}/>
    <TodosList todos={todos} />

  </div>
  )
}

export default TodoPage;