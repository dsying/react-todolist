import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'

import { Provider } from 'react-redux'
import store from './store/store.js'

const App =(
  //1 Provider提供器 连接了store(图书馆管理员)
    // 1.1 那么Provider里面的所有组件都有能力获取到store里的内容
  // Provider作用是将store提供给每一个内部组件
  <Provider store={store}>
      <TodoList />
  </Provider>

)

ReactDOM.render(
  App,
  document.getElementById('root')
);

