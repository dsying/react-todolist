import React,{ Component,Fragment } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // 一个组件要从父组件接收参数
    // 只要父组件的render函数被重新执行了，子组件的这个钩子函数就会被执行
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件之前已经存在于父组件中，才会被执行
    componentWillReceiveProps(){
      console.log(' child component will receive props')
    }


    // 当这个组件即将被从这个页面中 剔除的时候 被执行
    componentWillUnmount(){
      console.log('child component will unmount')
    }


    componentWillMount(){
      console.log('child component will mount')
    }
    shouldComponentUpdate(nextProps, nextState){
      if(Object.is(this.props.content, nextProps.content)){
        return false
      }else{
        return true
      }
    }


    render(){
        console.log('child render')
        const { content } = this.props
        return(
            // JSX -> creatElement -> JS对象 -> 真实的DOM
            //<li onClick={this.handleClick}>{ content }</li>
            // createElement语法可以和JSX模板互换
            React.createElement('li',{'onClick':this.handleClick},content)
        )
    }

    componentDidMount(){
      console.log('child component did mount')
    }

    handleClick(){
      const { deleteItem,index } = this.props
      deleteItem(index)
    }
}

//类型检查
TodoItem.propTypes={
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

//设置默认值
TodoItem.defaultProps={
  content: 'hello world'
}
export default TodoItem