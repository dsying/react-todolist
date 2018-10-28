import { CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_TODO_ITEM, INIT_TODO_ITEM } from './actionType'

const defaultStore = {
  inputVal: 'hello react',
  list: [

  ]
}

//在redux中 reducer需要返回一个函数
  //state:笔记本里的数据
// reducer可以接受一个state,但是绝对不可以修改state
export default (state = defaultStore, action)=>{
  console.log(state, action)
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = action.value
    return newState
  }else if (action.type === SUBMIT_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value)
    return newState
  }else if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value,1)
    return newState
  }else if (action.type === INIT_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }


  return state
}