import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return <div className='todos-list'>
{todos.map((todo) => (
  <TodoItem />
)

)}

  </div>
};

export default TodoList;