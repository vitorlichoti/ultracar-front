// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { priceService, tasks } from '../../mocks/mocktasks';

export type PartsType = {
  name: string;
  price: number;
  labor: number;
}

export type TasksType = {
  done: boolean,
  technicalName: string,
  clientName: string,
  vehicle: string,
  plate: string;
  parts: PartsType;
  dateStart: string;
  dateEnd: string;
}

export type ServiceType = {
  name: string;
  price: number;
  labor: number;
}

interface CounterState {
  value: number;
  tasksDone: TasksType[];
  tasksToDo: TasksType[];
  services: ServiceType[];
  employees: string[]
}

const initialState: CounterState = {
  value: 0,
  tasksDone: [
    {
      done: true,
      technicalName: 'Joana',
      clientName: 'Alan',
      vehicle: 'Corolla 2.0 2023',
      plate: 'KAJ9283',
      parts: {
        name: 'escapamento',
        price: 45.00,
        labor: 58.00
      },
      dateStart: '18/04/2023',
      dateEnd: '18/04/2023',
    }
  ],
  tasksToDo: [
    {
      done: false,
      technicalName: 'Joana',
      clientName: 'José Roberto',
      vehicle: 'Voyage 1.6 2014',
      plate: 'NZQ6712',
      parts: { name: 'bomba injetora', price: 445.00, labor: 138.00},
      dateStart: '18/04/2023',
      dateEnd: '',
    },
    {
      done: false,
      technicalName: 'Joana',
      clientName: 'Patrícia',
      vehicle: 'Hilux flex 2021',
      plate: 'FSE8123',
      parts: { name: 'cubo de roda', price: 95.00, labor: 58.00},
      dateStart: '18/04/2023',
      dateEnd: '',
    },
    {
      done: false,
      technicalName: 'Mário',
      clientName: 'Levy',
      vehicle: 'Saveiro 1.6 1997',
      plate: 'LGK8273',
      parts: { name: 'escapamento', price: 45.00, labor: 78.00},
      dateStart: '18/04/2023',
      dateEnd: '',
    },
    {
      done: false,
      technicalName: 'Alfredo',
      clientName: 'Jorge',
      vehicle: 'Onix 1.0 turbo 2022',
      plate: 'KAJ9283',
      parts: { name: 'escapamento', price: 45.00, labor: 78.00 },
      dateStart: '18/04/2023',
      dateEnd: '',
    },
  ],
  services: priceService,
  employees: ['Alfredo', 'Mário', 'Joana']
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state, action: PayloadAction<TasksType>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.tasksToDo.push(action.payload);
    },
    addEmployee(state, action: PayloadAction<string>) {
      state.employees.push(action.payload)
    },
    refreshList(state, action: PayloadAction<TasksType>) {
      state.tasksToDo = state.tasksToDo.filter((e) => e.plate !== action.payload.plate)
    },
    decrement(state, action: PayloadAction<TasksType>) {
      state.tasksDone = [
        ...state.tasksDone,
        action.payload,
      ]
    },
  },
});

export const { incremented, addEmployee, refreshList, decrement } = counterSlice.actions;
export default counterSlice.reducer;