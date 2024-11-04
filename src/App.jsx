import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (taskText) => { // cogemos taskText desde AddTaskForm 
    const newTask = {
      id: tasks.length + 1, 
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]); // Añadimos la nueva tarea manteniendo las anteriores
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <>
    <h1>Lista de Tareas</h1>
    <AddTaskForm  addTask={addTask} /> 
    <ul>
    {tasks.map(task => (
          <Task //a continuacion pasamos los props al componente Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
    </ul>
    </>
  );
};

export default App;
