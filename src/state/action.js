export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const LOAD_MOVIE_COLLECTION = "LOAD_MOVIE_COLLECTION"
export const loadMovieCollection = collection => ({
  type: LOAD_MOVIE_COLLECTION,
  collection,
})
