import { func } from 'prop-types'
import React from 'react'
import styled from "styled-components"


const FilterBlock=styled.div `
max-width:400px;
margin:0 auto;
`


const InputFilter=styled.input `
height:30px ;
width:100%;
margin-bottom:20px;
border-radius:0.5rem;
`

export default function Filter({value,onChengeFilter}){
    return(
        <FilterBlock>
            <InputFilter type="text" placeholder="введите фильтр" value={value} onChange={event=>onChengeFilter(event.target.value)}></InputFilter>
        </FilterBlock>
    )
}