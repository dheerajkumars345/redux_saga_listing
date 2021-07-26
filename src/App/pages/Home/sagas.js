/* eslint-disable import/no-anonymous-default-export */
import { call, put, takeLatest } from 'redux-saga/effects'

import {
   GET_COUNTRIES_REQUESTED,
    GET_COUNTRIES_START,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_FAIL
} from './dux'

export function* fetchCountriesData(action) {
  try {
    yield put({ type: GET_COUNTRIES_START })
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/posts?_start=${action.payload.page}`)
    const data = yield response.json()
    yield put({ type: GET_COUNTRIES_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: GET_COUNTRIES_FAIL, payload: error })
  }
}

export default [takeLatest(GET_COUNTRIES_REQUESTED, fetchCountriesData)]