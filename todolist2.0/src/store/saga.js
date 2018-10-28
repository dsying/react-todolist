import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { INIT_TODO_ITEM } from './actionType.js'
import axios from 'axios';


function* getInitItem(){
  try {
    const res = yield axios.get('/list.json')
    const action = {
          type : INIT_TODO_ITEM,
          value: res.data
        }
    yield put(action)
  } catch(e) {
    console.log(e);
  }


  //在generator中 就不用使用Promise了
  /*axios.get('/list.json').then((res) => {
      const action = {
        type : INIT_TODO_ITEM,
        value: res.data
      }
      put(action)
  })*/
}
//saga的写法要求一个函数必须是一个 generator函数
function* mySaga() {
  yield takeEvery(INIT_TODO_ITEM, getInitItem)
}

export default mySaga;
