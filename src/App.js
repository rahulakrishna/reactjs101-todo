import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'

import List from './List'
import TextBox from './TextBox'

class App extends Component {
  state={
    pending:[
      {
        id:1,
        text:'Finish this App'
      },
      {
        id:2,
        text:'Drink Coffee'
      },
      {
        id:3,
        text:'Breathe'
      }
    ],
    completed:[
      {
        id:4,
        text:'Boilerplate Code'
      },
      {
        id:5,
        text:'Booting up'
      }
    ],
    currentId:5
  }
  addTodo=(text)=>{
    // Function to Add a Todo
    this.setState({
      currentId:this.state.currentId+1
    },()=>{
      this.setState({
        pending:this.state.pending.concat({id:this.state.currentId,text:text})
      })
    })
  }
  complete=(id,text)=>{
    // Function to complete a Todo
    console.log(id,text)
    this.setState({
      completed:this.state.completed.concat({id,text}),
      pending:this.state.pending.filter((todo)=>todo.id!==id)
    })
  }
  review=(id,text)=>{
    this.setState({
      pending:this.state.pending.concat({id,text}),
      completed:this.state.completed.filter((todo)=>todo.id!==id)
    })
  }
  render() {
    return (
      <div className='app'>
          <h1>Todo!</h1>
          {/* List */}
          <List
            pending={this.state.pending}
            completed={this.state.completed}
            complete={this.complete}
            review={this.review}
          />
          {/* Text Box to Add */}
          <TextBox
            addTodo={this.addTodo}
          />
      </div>
    );
  }
}

export default App;
