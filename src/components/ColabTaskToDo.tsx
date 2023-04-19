import { FunctionComponent } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import TasksItem from './TasksItem';

interface TasksDoneProps {
  employee: string;
}

const ColabTaskToDo: FunctionComponent<TasksDoneProps> = ({employee}) => {
  const tasks = useAppSelector((state) => state.counter.tasksToDo)
  const taskByEmployee = tasks.filter((e) => e.technicalName === employee)
  return (
    <div style={{ textAlign: 'center'}}>
      <h3>Tasks To Do</h3>
      <ul>
        {taskByEmployee.map((e, i) => (
          <TasksItem key={i} task={e} />
        ))}
      </ul>
    </div>
  )
}

export default ColabTaskToDo