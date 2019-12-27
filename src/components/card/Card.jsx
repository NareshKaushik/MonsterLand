import React from 'react'
import './card.styles.css'
export const Card = props => {
const {monster:{email,name,id} = {}} = props
 return(
    <div className = 'card-container'>
        <img alt = "Monster" src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>{name}</h2>
        <div>{email}</div>
    </div>
 );
}