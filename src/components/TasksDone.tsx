import { useAppSelector } from '../app/hooks';
import TasksItem from './TasksItem';

const TasksDone = () => {
  const tasks = useAppSelector((state) => state.counter.tasksDone)
  
  return (
    <div style={{ textAlign: 'center'}}>
      <h3>Tasks Done</h3>
      <ul>
        {tasks.map((e, i) => (
          <TasksItem key={i} task={e} part={e.parts} />
        ))}
      </ul>
    </div>
  )
}

export default TasksDone