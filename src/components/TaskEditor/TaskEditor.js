import React from 'react'


export default function TaskEditor({onAddTask}){
    return(
        <div>
            <button type='button' onClick={onAddTask}>Add Task</button>
        </div>
    )
}