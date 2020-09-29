import React from 'react';
import './App.css';
import TimeLine from './timeLine'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      person:{
        name:{
          firstName:'王雅斌',
          lastName:'1'
        },
        age:'16',
        aaa:'23456'
      }
    }
  }
  render(){
    return (
      <div className="App">
        <TimeLine onRef={this.onRef}></TimeLine>
      </div>
    )
  }
}

export default App;
