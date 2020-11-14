import React, { Component } from 'react';
import Counter from './components/Counter';
import TaskList from './components/TaskList/TaskList';
import TaskEditor from './components/TaskEditor/TaskEditor';
import CreateTaskUtils from './utils/create-task';

export default class App extends Component {
  state = {
    task: [],
  };

  addTask = () => {
    const newtask = CreateTaskUtils();

    this.setState(prevState => {
      return {
        task: [...prevState.task, newtask],
      };
    });
  };

  deleteTask=(taskId)=>{
    this.setState(prevState=>{
        return{
            task:prevState.task.filter(elem=>elem.id!==taskId)
        }
    })
  }

  render() {
    const { task } = this.state;

    return (
      <>
        <Counter initialValue={5} step={3}></Counter>

        <TaskEditor onAddTask={this.addTask}></TaskEditor>
        {task.length > 0 && <TaskList task={task} onRemoveTask={this.deleteTask}></TaskList>}
      </>
    );
  }
}
