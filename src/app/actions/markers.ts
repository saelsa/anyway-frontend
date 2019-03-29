import { createAction } from 'redux-actions';

export namespace MarkerActions {
  export enum Type {
    GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION',
    GET_MARKERS = 'GET_MARKERS', 
  }

  export const getCurrentLocation = createAction(Type.GET_CURRENT_LOCATION)
  export const getMarkers = createAction(Type.GET_MARKERS)
}

export type MarkerActions = Omit<typeof MarkerActions, 'Type'>;
