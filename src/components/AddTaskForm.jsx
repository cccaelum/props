import { useState } from 'react';

function AddTaskForm({ addTask }) { //prop: pasamos la funcion para agregar tarea desde App
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText) {  
          addTask(taskText);
          setTaskText('');
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Agregar nueva tarea"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button type="submit">Agregar</button>
        </form>
      );
    }

export default AddTaskForm;