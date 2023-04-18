type tasks = {
  id: number;
  done: boolean,
  technicalName: string;
  clientName: string;
  vehicle: string;
  plate: string;
  parts: [string];
}

function TasksToDo() {
  return (
    <div>
      <h3>Tasks To Do</h3>
      <ul>
      </ul>
    </div>
  )
}

export default TasksToDo;