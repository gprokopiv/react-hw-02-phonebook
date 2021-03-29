import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({todo: {id, value, urgency, date, isDone}, onToggle, onDelete}) => {
  return (
    <div>
      <p>{value}</p>
      <p>{urgency}</p>
      <p>{date}</p>
<input type='checkbox' checked={isDone} onChange={onToggle}/>
<button onClick={() => onDelete(id)}>X</button>
    </div>
  );
};

TodoItem.propTypes = {
  
};

export default TodoItem;