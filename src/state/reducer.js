import { SET_DEVICE, PULL_TRIGGER, SET_USER } from "./action"

const initialState = {
  device: undefined,
  trigger: false,
  user: undefined,
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
    case PULL_TRIGGER:
      return { ...state, trigger: !state.trigger }
    case SET_USER:
      return { ...state, user: action.user }
    default:
      return state
  }
}
