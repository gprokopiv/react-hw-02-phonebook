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
justifyContent: 'space-between '},
});


const TodosInputForm = () => {
const classes = useStyles();

  return <div className='todos-input-form'>
<button>
  +Add todos
</button>
<form className={classes.form}>
  <input type='text'></input>
  <div>
    <span>urgency:</span>

    <label>
      <input type='radio'></input>
      <span>low</span>
    </label>

    <label>
      <input type='radio'></input>
      <span>medium</span>
    </label>

    <label>
      <input type='radio'></input>
      <span>high</span>
    </label> 
  </div>

  <button>
    Cancel
  </button>
  <button>
    Add todo
  </button>
</form>
  </div>
};

export default TodosInputForm;