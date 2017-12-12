import React from 'react'

class TextBox extends React.Component {
  state={
    text:''
  }
  changeText=(newText)=>{
    this.setState({
      text:newText
    })
  }
  addTodo=()=>{
    this.props.addTodo(this.state.text)
    this.setState({
      text:''
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          this.addTodo()
        }}>
          <input
            type='text'
            className='add-todo-input'
            placeholder='Add Todo'
            onChange={(e)=>{
              console.log(e.target.value)
              this.changeText(e.target.value)
            }}
            value={this.state.text}
          />
        </form>
      </div>
    )
  }
}

export default TextBox
