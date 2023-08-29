import { useState } from 'react';
import styles from './TaskItem.module.css';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
	// if some task is checked or not
	const [isChecked, setIsChecked] = useState(task.checked);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);

		toggleTask(task.id);
	};

	// change de style depending of the state
	const checkedClass = isChecked ? styles.checked : styles.noChecked;

	return (
		<li className={styles.list}>
			<div className={styles.item}>
				<input
					className={styles.input}
					type='checkbox'
					checked={isChecked}
					name={task.name}
					id={task.id}
					onChange={handleCheckboxChange}
				/>
				<label htmlFor={task.id} className={checkedClass}>
					{task.name}
				</label>
			</div>
			<div className={styles.btns}>
				<button
					className={styles.btnUpdate}
					aria-label='Update task'
					onClick={() => enterEditMode(task)}
				>
					<DriveFileRenameOutlineOutlinedIcon />
				</button>
				<button
					className={styles.btnDelete}
					aria-label='Delete task'
					onClick={() => deleteTask(task.id)}
				>
					<DeleteForeverOutlinedIcon />
				</button>
			</div>
		</li>
	);
};

export default TaskItem;
