import React from "react";

/**
 * Task Component
 * @function Task
 * @param {Object} props - Contains the task object, onToggleTask, and onDeleteTask handlers
 * @returns {React.Component} A <li> containing the task description, a checkbox to toggle completion, and a delete button
 */
export default function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)} 
        className="task-checkbox" 
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#aaa" : "#333", 
        }}
      >
        {task.description}
      </span>
      <button onClick={() => onDeleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
}