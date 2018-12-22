function TodoList({ todos, render }) {
    return (
      <section className='main-section'>
        <ul className='todo-list'>{
          todos.map((todo, i) => (
            <li key={ i }>{ render(todo) }</li>
          ))
        }</ul>
      </section>
    );
  }
  

  function App() {
    const todos = [
      { label: 'Write tests', status: 'done' },
      { label: 'Sent report', status: 'progress' },
      { label: 'Answer emails', status: 'done' }
    ];
    const isCompleted = todo => todo.status === 'done';
  
  return (
    <TodoList
      todos={ todos }
      render={
        todo => isCompleted(todo) ?
          <b>{ todo.label }</b> : todo.label
      } />
  );
}