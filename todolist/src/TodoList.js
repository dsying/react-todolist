import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import TodoItem from './TodoItem'
import App from './App'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            inputVal: ''
        }
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    //在组件即将被挂载到页面的时刻自动执行 render() 之前
    componentWillMount(){
      console.log('will mount')
    }

    // 当组件的 state和props发生改变的时候，render函数就会重新执行
        //当父组件的Render函数被运行时，它的子组件的render函数都将被运行
    render() {
      console.log('render')
        return (
          <Fragment>
            <div>
              <label>
                输入内容
                <input id="insertArea" className="input" value={ this.state.inputVal } onChange={ this.handleInputChange}/>
              </label>
              <button onClick={this.handleBtnClick}>add</button>
            </div>
            <div>
              <ul ref={(ul) => {this.ul = ul}}>
                { this.getTodoList() }
              </ul>
              <App />
            </div>

          </Fragment>
        )
    }

    //组件被挂载之后执行  render()之后
    componentDidMount(){
     /* axios.get('/api/todolist')
        .then((res)=>{
          this.setState(()=>{
            return {
              list: res.data
            }
          })
        })
        .catch((res)=>{
          alert('error')
        })*/
    }

    //组件被更新之前 它会被自行执行
    shouldComponentUpdate(){
      console.log('should component update')
      return true
    }
    //组件被更新之前 它会自动执行，但是它在 shouldComponentUpdte 之后
    //如果 shouldComponentUpdate 返回false 这个函数就不会执行
    componentWillUpdate(){
      console.log('component will update')
    }

    //组件更新完成之后 它会被执行
    componentDidUpdate(){
      console.log('component did update')
    }


    getTodoList() {
      return this.state.list.map((item, index) => {
          return (
                <TodoItem content={item} key={index} index={index} deleteItem={this.handleItemClick}/>
            )
        })
    }

    handleBtnClick() {
        const list = [...this.state.list, this.state.inputVal]

        //setState()是异步的
        this.setState(()=>({
          list,
          inputVal: ''
        }), () => {
          console.log(this.ul.querySelectorAll('li').length)
        });

    }

    handleInputChange(e) {
        const val = e.target.value
        this.setState(()=>({
          inputVal: val
        }))
    }

    handleItemClick(index) {
        this.setState((prevState)=>{
          //debugger
          const list = [...prevState.list]
          list.splice(index,1)
          return {list}
        })
    }
}

export default TodoList