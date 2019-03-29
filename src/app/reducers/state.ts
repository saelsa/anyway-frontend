import { TodoModel, MarkerModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  markers: RootState.MarkerState; 
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type MarkerState = MarkerModel[];
}


