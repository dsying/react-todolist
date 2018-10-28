import React,{ Fragment } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';


const TodoListUI = (props) => {
  return(
      <Fragment>
       <div style={{margin:'10px'}}>
         <Input placeholder={props.inputVal} style = {{width:300,marginRight:'10px'}}
                onChange={props.handleInputChange} />
         <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
       </div>
        <List
          style={{marginTop:'10px',marginLeft:'10px',width:'300px'}}
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (
            <List.Item onClick={(index) => {props.handleItemClick(index)}}>{item}</List.Item>
          )}
        />
      </Fragment>
    )
}

export default TodoListUI