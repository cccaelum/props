function Task({ id, text, completed, deleteTask, completeTask }) { //props que vienen del padre App.jsx
    return (
      <li className='task' style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <p onClick={() => completeTask(id)}>{text}</p>
        <button onClick={() => deleteTask(id)}>Eliminar</button>
      </li>
    );
  }
  
  export default Task;