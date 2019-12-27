import React from 'react'
import "./search-box.styles.css"

export default function SearchBox ({placeholderText, onChangeListener}){
    return <input className = "search" type = "search" placeholder = {placeholderText} onChange = {onChangeListener}/>
}