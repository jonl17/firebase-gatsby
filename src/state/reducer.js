import { SET_DEVICE, LOAD_MOVIES } from "./action"

const initialState = {
  device: undefined,
  movies: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 750) {
        device = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        device = `tablet`
      }
      if (action.width > 1050) {
        device = `browser`
      }
      return { ...state, device: device }
    case LOAD_MOVIES:
      return { ...state, movies: action.movies }
    default:
      return state
  }
}
