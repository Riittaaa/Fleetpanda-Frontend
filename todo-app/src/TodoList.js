import React, { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  const addTask = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newTask, completed: false }),
        }
      );
      const data = await response.json();
      setTasks([...tasks, data]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id)); //creates a new array,  if ids not equal inserted in that array
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
    setEditingText(task.title);
  };

  const saveTask = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${editingTask.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...editingTask, title: editingText }),
        }
      );
      const data = await response.json();
      setTasks(tasks.map((task) => (task.id === editingTask.id ? data : task)));
      setEditingTask(null);
      setEditingText("");
    } catch (error) {
      console.error("Error saving task", error);
    }
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask} className="add-task">
        Add Task
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTask && editingTask.id === task.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <div className="buttons">
                  <button onClick={saveTask} className="edit">
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="task-text">{task.title}</span>
                <div className="buttons">
                  <button onClick={() => editTask(task)} className="edit">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
