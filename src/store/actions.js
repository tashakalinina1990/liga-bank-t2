import * as actionTypes from './actionTypes'

export const setActiveSlideIndex = (activeIndex) => {
  return ({
    type: actionTypes.SET_ACTIVE_SLIDE_INDEX,
    index: activeIndex,
  })
};
