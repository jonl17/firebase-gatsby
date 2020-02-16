export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const PULL_TRIGGER = "PULL_TRIGGER"
export const pullTrigger = () => ({
  type: PULL_TRIGGER,
})
export const SET_USER = "SET_USER"
export const setUser = user => ({
  type: SET_USER,
  user,
})
