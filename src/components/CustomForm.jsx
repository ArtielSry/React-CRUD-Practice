import { useState } from 'react';
import styles from './CustomForm.module.css';
import AddIcon from '@mui/icons-material/Add';

// eslint-disable-next-line react/prop-types
const CustomForm = ({ addTask }) => {
	const [task, setTask] = useState('');

	// Form function to handle event
	const handleFormSubmit = e => {
		e.preventDefault();
		addTask({
			name: task,
			checked: false,
			id: Date.now()
		});
		console.log(task);
		setTask('');
	};

	return (
		<form className={styles.todo} onSubmit={handleFormSubmit}>
			<div className={styles.container}>
				<input
					autoComplete='off'
					type='text'
					id='task'
					className={styles.input}
					value={task}
					onInput={e => setTask(e.target.value)}
					required
					autoFocus
					maxLength={50}
					placeholder='Enter task'
				/>
				<label className={styles.label} htmlFor='task'>
					<p className={styles.p}>Enter Task</p>
				</label>
			</div>
			<button type='submit' className={styles.btn} aria-label='Add Task'>
				<AddIcon />
			</button>
		</form>
	);
};

export default CustomForm;
