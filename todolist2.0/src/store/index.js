import {createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer.js'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'




const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

//创建saga中间件
const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  //使用saga中间件
  applyMiddleware(sagaMiddleware)
  // applyMiddleware(thunk),
  // other store enhancers if any
);


//创建唯一store
const store = createStore(reducer, enhancer);

//运行saga
sagaMiddleware.run(mySaga)


export default store