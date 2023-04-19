import { FunctionComponent } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import TasksItem from './TasksItem';

interface TasksDoneProps {
  employee: string;
}

const ColabTaskDone: FunctionComponent<TasksDoneProps> = ({employee}) => {
  const tasks = useAppSelector((state) => state.counter.tasksDone)
  const taskByEmployee = tasks.filter((e) => e.technicalName === employee)

  return (
    <div style={{ textAlign: 'center'}}>
      <h3>Tasks Done</h3>
      <ul>
        {taskByEmployee.map((e, i) => (
          <TasksItem key={i} task={e} />
        ))}
      </ul>
    </div>
  )
}

export default ColabTaskDone