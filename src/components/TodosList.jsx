import TodoItem from './TodoItem';

const TodoList = ({todos, onDelete}) => {
  return <div className='todos-list'>
{todos.map((todo) => (
  <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
)

)}

  </div>
};

export default TodoList;