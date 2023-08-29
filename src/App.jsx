import { useState } from 'react';
import './App.css';
import CustomForm from './components/CustomForm';
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';

function App() {
	const [tasks, setTasks] = useState([]);
	const [editedTask, setEditedTask] = useState(null);
	const [isEditing, setIsEditing] = useState(false);

	// Add task function
	const addTask = task => {
		setTasks(prevState => [...prevState, task]);
	};

	// Delete task function
	const deleteTask = id => {
		setTasks(prevState => prevState.filter(t => t.id !== id));
	};

	// Update task function
	const toggleTask = id => {
		setTasks(prevState =>
			prevState.map(t => (t.id === id ? { ...t, checked: !t.checked } : t))
		);
	};

	const updateTask = task => {
		setTasks(prevState =>
			prevState.map(t => (t.id === task.id ? { ...t, name: task.name } : t))
		);
		closeEditMode();
	};

	const closeEditMode = () => {
		setIsEditing(false);
	};

	const enterEditMode = task => {
		setEditedTask(task);
		setIsEditing(true);
	};

	const front = isEditing ? 'front' : 'back';

	return (
		<>
			<div className='popup'>
				{isEditing && (
					<EditForm
						updateTask={updateTask}
						editedTask={editedTask}
						closeEditMode={closeEditMode}
					/>
				)}
			</div>
			<div id='container' className={front}>
				<header>
					<h1>My Task List</h1>
				</header>

				<CustomForm addTask={addTask} />
				{tasks && (
					<TaskList
						tasks={tasks}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
						enterEditMode={enterEditMode}
					/>
				)}
			</div>
		</>
	);
}

export default App;
