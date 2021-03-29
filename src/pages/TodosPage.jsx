import TodosList from '../components/TodosList';
import TodosInputForm from '../components/TodosInputForm';


const TodoPage = () => {
  return (
    <div className='todos'> 
    <h1>
      Todos
    </h1>
    <TodosInputForm />
    <TodosList />

  </div>
  )
}

export default TodoPage;