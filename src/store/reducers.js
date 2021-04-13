import * as actionTypes from './actionTypes'

const ACTION_HANDLERS = {
  [actionTypes.SET_ACTIVE_SLIDE_INDEX]:  (state, { index }) => ({
    ...state,
    activeSlideIndex: index,
  })
};

const initialState = {
  activeSlideIndex: 0
}

export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
