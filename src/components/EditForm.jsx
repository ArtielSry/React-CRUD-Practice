import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import styles from './EditForm.module.css';
import { useState } from 'react';

const EditForm = ({ editedTask, updateTask }) => {
	const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

	// Form function to handle event
	const handleFormSubmit = e => {
		e.preventDefault();
		updateTask({ ...editedTask, name: updatedTaskName });
	};

	return (
		<div
			className={styles.containerUpdate}
			role='dialog'
			aria-labelledby='editTask'
			onClick={() => console.log('hola')}
		>
			<form className={styles.todo} onSubmit={handleFormSubmit}>
				<div className={styles.container}>
					<input
						autoComplete='off'
						type='text'
						id='editTask'
						className={styles.input}
						value={updatedTaskName}
						onInput={e => setUpdatedTaskName(e.target.value)}
						required
						autoFocus
						maxLength={50}
						placeholder='Update Task'
					/>
					<label className={styles.label} htmlFor='editTask'>
						<p className={styles.p}>Update Task</p>
					</label>
				</div>
				<button type='submit' className={styles.btn} aria-label='Update Task'>
					<DoneOutlinedIcon />
				</button>
			</form>
		</div>
	);
};

export default EditForm;
