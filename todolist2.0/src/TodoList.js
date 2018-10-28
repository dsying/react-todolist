import React,{ Component } from 'react'
import store from './store';
import { CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_TODO_ITEM, INIT_TODO_ITEM } from './store/actionType';
import TodoListUI from './todoListUI';
import axios from 'axios';

class TodoList extends Component{
  constructor(props){
    super(props)
    // 从store中获取数据
    this.state = store.getState()

    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    // 订阅store, 当store改变时，回调函数执行
    //  切记放在 band(this) 之后
    store.subscribe(this.handleStoreChange)
  }
  render(){
    return <TodoListUI inputVal={this.state.inputVal}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            list={this.state.list}
            handleItemClick={this.handleItemClick}
            />
  }

  componentDidMount(){
    /*axios.get('/list.json').then((res) => {
        const action = {
          type : INIT_TODO_ITEM,
          value: res.data
        }
        store.dispatch(action)
    })*/
  }
/* 使用 Redux-thunk中间件去处理 异步
  componentDidMount(){
    const action = this.getInitList()
    store.dispatch(action)
  }
  getInitList(){
    return (dispatch) => {
      axios.get('/list.json').then((res) => {
        const action = {
          type : INIT_TODO_ITEM,
          value: res.data
        }
        dispatch(action)
      }).catch((res) => {

      })
    }
  }*/

  handleInputChange(e){
    const action = {
      type: CHANGE_INPUT_VALUE,
      value : e.target.value
    }
    store.dispatch(action)
  }

  handleBtnClick(e){
    const action = {
      type: SUBMIT_INPUT_VALUE,
      value : this.state.inputVal
    }
    // store 向 reducer 分发 action
    // reducer 向 store 返回新的 state
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(() => (store.getState()))
  }

  handleItemClick(index){
    console.log(index)
    const action = {
      type: DELETE_TODO_ITEM,
      value: index
    }
    store.dispatch(action)
  }
}

export default TodoList