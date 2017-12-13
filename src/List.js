import React from 'react'

class List extends React.Component {
  render(){
    // We map through the completed and pending array and render a series of components and store it to a variable.
    const completed=this.props.completed.map((todo)=>(
      <div key={todo.id} className='todo completed' onClick={()=>{this.props.review(todo.id,todo.text)}}>
        {todo.id}. {todo.text}
      </div>
    ))
    const pending=this.props.pending.map((todo)=>(
      <div key={todo.id} className='todo' onClick={()=>{this.props.complete(todo.id,todo.text)}}>
        {todo.id}. {todo.text}
      </div>
    ))
    return(
      <div>
        <h4>Completed</h4>
        {/* variable completed that we defined before. */}
        {completed}
        <h4>Pending</h4>
        {pending}
      </div>
    )
  }
}

export default List
