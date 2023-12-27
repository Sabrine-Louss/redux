// AddTask.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, setFilter } from '../redux/actions';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      dispatch(setFilter('all'));
      setTask('');
    }
  };

  return (
    <div className="task">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task description"
      />
      <button className="button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
