import {RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants';
import axios from "axios"
import {convertAlbums, convertAlbum} from "../utils"

export const setAlbums = (albums) => ({type: RECEIVE_ALBUMS, albums: albums})

export const setCurrentAlbum = (album) => ({type: RECEIVE_ALBUM, album: album})

export const fetchAlbums = function () {
  return function (dispatch, getState) {
    axios.get('/api/albums')
    .then(res => {
      dispatch(setAlbums(convertAlbums(res.data)))
    })
  }
}

export const fetchCurrentAlbum = function (albumId) {
  return function (dispatch, getState) {
    axios.get(`/api/albums/${albumId}`)
    .then(res => {
      dispatch(setCurrentAlbum(convertAlbum(res.data)))
    })
  }
}
