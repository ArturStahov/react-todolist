import { func } from 'prop-types'
import React from 'react'

export default function({task,onRemoveTask}){
    return(
        <ul>
            {task.map(elem=>(
                <li key={elem.id}>
                    <p>{elem.text}</p>
                    <button type="button" onClick={()=>onRemoveTask(elem.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}