import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setAllFilter, setFilter } from '../redux/actions';

const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.filter === 'all') {
      return state.tasks;
    } else if (state.filter === 'done') {
      return state.tasks.filter((task) => task.isDone);
    } else {
      return state.tasks.filter((task) => !task.isDone);
    }
  });

  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleShowAll = () => {
    dispatch(setAllFilter());
  };

  return (
    <div className="task-container">
      <div className="filter-buttons">
        <button onClick={() => handleFilter('all')}>All Tasks</button>
        <button onClick={() => handleFilter('done')}>Done</button>
        <button onClick={() => handleFilter('undone')}>Undone</button>
        <button onClick={handleShowAll}>Show All</button>
      </div>

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
