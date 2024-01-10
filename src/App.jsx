import React, { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import Status from './components/Status';
import ListGroup from './components/ListGroup';




const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, job: 'Complete homework', isDone: false },
    { id: 2, job: 'Go to the gym', isDone: true },
    { id: 3, job: 'Read a book', isDone: false },
    { id: 4, job: 'Buy groceries', isDone: false },
    { id: 5, job: 'Write a blog post', isDone: true }
  ]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((element) => element.id != id));
  };
  const checkTask = (id) => {
    setTasks(tasks.map((element) => element.id === id ? {...element,isDone:!element.isDone} : element));
  };
  const updateTask = (id,newJob) =>{
    setTasks(tasks.map((element) =>element.id === id ? {...element,job: newJob } : element))
  }
  return (
    <div className='w-full h-screen flex justify-center font-mono px-5'>
      <div className='mt-20 sm:mt-24 md:mt-28 lg:mt-32'>
        <Heading />
        <Form addTask={ addTask } />
        <Status tasks={ tasks } />
        <ListGroup tasks={ tasks } deleteTask={ deleteTask } checkTask={checkTask} updateTask={updateTask}/>
      </div>
    </div>
  );
};

export default App;
