const defaultState = {
  inputVal: '',
  list: ['丁大圣','刘凤英','丁多多']
}

export default (prevState = defaultState, action) => {
  if(action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.inputVal = action.value
    return newState
  }else if(action.type === 'add_todo_item'){
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.list.push(newState.inputVal)
    newState.inputVal = ''
    return newState
  }
  return prevState
}