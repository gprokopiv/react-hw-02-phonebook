import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const TodoItem = ({todo: {id, value, urgency, date, isDone}, onToggle, onDelete}) => {
  const formattedDate = moment(date).format('YYYY/MM/DD hh:mm:ss');
  const handleDelete =() => onDelete(id);
  const handleToggle =() => onToggle(id);

  return (
    <div>
      <p>{value}</p>
      <p>{urgency}</p>
      <p>{formattedDate}</p>
<input type='checkbox' checked={isDone} onChange={handleToggle}/>
<button onClick={handleDelete}>X</button>
    </div>
  );
};

TodoItem.propTypes = {
  
};

export default TodoItem;