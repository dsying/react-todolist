import React,{ Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  render(){
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          appear={true}
          onEntered ={(el) => {el.style.color = 'blue'}}>
            <div>hello</div>

        </CSSTransition>

        <TransitionGroup>
            {
              this.state.list.map((el,index) => {
                return (
                  <CSSTransition
                    timeout={1000}
                    classNames="fade"
                    appear={true}
                    key={ index }>
                    <div>{ el }</div>
                  </CSSTransition>
                )
              })
            }
        </TransitionGroup>



        <button onClick={this.handleBtnClick}>toggle</button>
      </Fragment>
    )
  }

  handleBtnClick(){
    this.setState((prevState)=>({
      show: !prevState.show,
      list: [...prevState.list,'item']
    }))
  }

  handleItemClick(){

  }
}

export default App