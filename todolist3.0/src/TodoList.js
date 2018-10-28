import React, { Component } from 'react'
import store from './store/store.js'
import { connect } from 'react-redux'



const TodoList = (props) => {
    const { inputVal, list, changeInputVal, btnClick } = props;
    return (
        <div>
      <div>
        <input type="text" value={inputVal} onChange={changeInputVal}/>
        <button onClick={btnClick}>提交</button>
      </div>
      <ul>
        {
          list.map((e,i,arr) => {
            return <li key={i}>{e}</li>
          })
        }
      </ul>
    </div>
    )
}

/*
  class TodoList extends React.Component{


    组件单独使用redux时 从store中获取数据 的方法
    constructor(props){
      super(props)
      this.state = store.getState()
    }

  render(){
    const { inputVal, list, changeInputVal, btnClick } = this.props;
    return (
      <div>
        <div>
          <input type="text" value={inputVal} onChange={changeInputVal}/>
          <button onClick={btnClick}>提交</button>
        </div>
        <ul>
          {
            list.map((e,i,arr) => {
              return <li key={i}>{e}</li>
            })
          }
        </ul>
      </div>
    )
  }


}
 */

//export default TodoList




/*
        通过connect 方法与 store进行连接

        1 将TodoList组件与store(数据仓库)进行连接
        2 如何连接？即连接规则
 */


// 2.1 通过mapStateToProps函数，
//     将store中保管的state映射到组件的props上
const mapStateToProps = (state) => {
    //该函数的参数state指的是store中的state
    return {
        inputVal: state.inputVal,
        list: state.list
    }
}
// 2.2 通过mapDispatchToProps函数
//     将store中的dispatch方法映射到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputVal(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }

            dispatch(action)
        },
        btnClick() {
            const action = {
                type: 'add_todo_item'
            }

            dispatch(action)
        }
    }
}

//TodoList是一个UI组件
//通过mapStateToProps和mapDispatchToProps方法处理逻辑
//然后返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)