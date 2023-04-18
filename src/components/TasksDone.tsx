type tasks = {
  id: number;
  done: boolean,
  technicalName: string;
  clientName: string;
  vehicle: string;
  plate: string;
  parts: [string];
}

function TasksDone() {
  return (
    <div>
      <h3>Tasks Done</h3>
      <ul>
      </ul>
    </div>
  )
}

export default TasksDone