export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const LOAD_MOVIES = "LOAD_MOVIES"
export const loadMovies = movies => ({
  type: LOAD_MOVIES,
  movies,
})
