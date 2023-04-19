import { useAppDispatch, useAppSelector } from '../app/hooks';
import { incremented, decrement } from '../features/counter/counter-slice';
import TasksItem from './TasksItem';

function TasksToDo() {
  const tasks = useAppSelector((state) => state.counter.tasksToDo)

  return (
    <div style={{ textAlign: 'center'}}>
      <h3>Tasks To Do</h3>
      <ul>
        {tasks.map((e, i) => (
          <TasksItem key={i} task={e} part={e.parts} />
        ))}
      </ul>
    </div>
  )
}

export default TasksToDo;