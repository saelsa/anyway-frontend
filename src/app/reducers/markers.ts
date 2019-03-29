import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { MarkerActions } from 'app/actions/markers';
import { MarkerModel } from 'app/models';

const initialState: RootState.MarkerState = [
  {
    lat: 32.4,
    lng: 34.5,
  }
];

export const markerReducer = handleActions<RootState.MarkerState, MarkerModel>(
  {
    [MarkerActions.Type.GET_CURRENT_LOCATION]: (state, action) => {
      return state.filter((marker: any) => marker.lng === 45);
    }
  },
  initialState
);
