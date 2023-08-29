import styles from './TaskItem.module.css';
import TaskItem from './TaskItem';

// eslint-disable-next-line react/prop-types
const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
	return (
		<ul className={styles.ul}>
			{tasks
				.sort((a, b) => b.id - a.id)
				.map(task => (
					<TaskItem
						key={task.id}
						task={task}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
						enterEditMode={enterEditMode}
					/>
				))}
		</ul>
	);
};

export default TaskList;
