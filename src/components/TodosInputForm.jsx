const TodosInputForm = () => {
  return <div className='todos-input-form'>
<button>
  +Add todos
</button>
<form>
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