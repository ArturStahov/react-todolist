import { func } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const TaskList=styled.ul `
max-width:500px;
margin:0 auto;
`
const TaskItem=styled.li `
padding:10px 10px 10px 10px;
width:100%;
display:flex;
justify-content:space-between;
background-color:${props=>props.bgColor?'green':'yellow'};
border:2px solid grey;
border-radius:0.5rem;
margin-bottom:10px;
`

export default function({task,onRemoveTask,onSelect}){
    return(
        <TaskList>
            {task.map(elem=>(
                <TaskItem key={elem.id} bgColor={elem.completed}>
                    <p>{elem.text}</p>
                    <button type="button" onClick={()=>onRemoveTask(elem.id)}>Delete</button>
                    <label>
                        select
                    <input type="checkbox" checked={elem.completed} onChange={()=>onSelect(elem.id)}></input>
                    </label>
                    
                </TaskItem>
            ))}
        </TaskList>
    )
}