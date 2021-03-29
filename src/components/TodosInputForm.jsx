import {useState} from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
todoInputForm: {
  display: 'flex',
  flexDirection: 'column',

},
  form: {
  display: 'flex',
  flexDirection: 'column',
},

button: {
  display: 'flex',
justifyContent: 'space-between'},
});


const TodosInputForm = ({ onSubmit }) => {
const classes = useStyles();
const [showForm, setShowForm] = useState(false);
const [value, setValue] = useState('');
const [urgency, setUrgency] = useState('low');


const toggleForm = () => setShowForm( (prevValue) => !prevValue);
const handleSubmit = e => {
  e.preventDefault();

  const newTodo = {
    id: Date.now(),
    value, 
    urgency,
    date: Date.now(),
    isDone: false,
  }
  onSubmit(newTodo);
  setValue('');
  setUrgency('low');
  setShowForm(false);
}

const handleInputChange = (e) => {
  setValue(e.target.value);
}

const handleUrgencyChange = (e) => {
  setUrgency(e.target.value);
}
  return (
   
  <div className={classes.todoInputForm}> 
  {showForm ? (
  <form className={classes.form} onSubmit={handleSubmit}>
  <input type='text' value={value} onChange={handleInputChange}/>
  <div>
    <span>urgency:</span>

    <label>
      <input type='radio' value='low' checked={urgency==='low'} onChange={handleUrgencyChange}></input>
      <span>low</span>
    </label>

    <label>
      <input type='radio' value='medium'  checked={urgency==='medium'}  onChange={handleUrgencyChange}></input>
      <span>medium</span>
    </label>

    <label>
      <input type='radio' value='high' checked={urgency==='high'} onChange={handleUrgencyChange}></input>
      <span>high</span>
    </label> 
  </div>
<div className={classes.button}>
  <button onClick={toggleForm}>
    Cancel
  </button>
  <button type='submit'>
    Add todo
  </button>
  </div>
</form>) : (
<button onClick={toggleForm}>
  +Add todos
</button>)}


  </div>)
};

export default TodosInputForm;