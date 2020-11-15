import React, { Component } from 'react';
import Counter from './components/Counter';
import TaskList from './components/TaskList/TaskList';
import TaskEditor from './components/TaskEditor/TaskEditor';
import Filter from './components/Filter/Filter'
import uniqid from 'uniqid'

export default class App extends Component {
  state = {
    task: [],
    filter:''
  };

  chengeFilter=(filter)=>{
 this.setState({filter:filter})
  }
  getVisibleTasks=()=>{
    return this.state.task.filter(item=>
      item.text.toLowerCase().includes(this.state.filter.toLowerCase())
    )
  }

  addTask = (text) => {
    const newtask={
      id:uniqid(),
      text:text,
      completed:false
    }

    this.setState(prevState => {
      return {
        task: [...prevState.task, newtask],
      };
    });
  };

  updateSelect=(taskId)=>{
    this.setState(prevState=>{
      return{
        task:prevState.task.map(elem=>{
          if(elem.id===taskId){
            return{
              ...elem,
               completed:!elem.completed,
            }
          }
          return elem
        })
      }
    })
  }

  deleteTask=(taskId)=>{
    this.setState(prevState=>{
        return{
            task:prevState.task.filter(elem=>elem.id!==taskId)
        }
    })
  }

  render() {
    const { filter } = this.state;
    const visibleTask=this.getVisibleTasks();
 
    return (
      <>
        <Counter initialValue={5} step={3}></Counter>

        <TaskEditor onAddTask={this.addTask}></TaskEditor>
        <Filter value={filter} onChengeFilter={this.chengeFilter}></Filter>
        {visibleTask.length > 0 && <TaskList task={visibleTask} onSelect={this.updateSelect} onRemoveTask={this.deleteTask}></TaskList>}
      </>
    );
  }
}
