import { SET_DEVICE, LOAD_MOVIE_COLLECTION } from "./action"

const initialState = {
  device: undefined,
  movieCollection: undefined,
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
    case LOAD_MOVIE_COLLECTION:
      return { ...state, movieCollection: action.collection }
    default:
      return state
  }
}
