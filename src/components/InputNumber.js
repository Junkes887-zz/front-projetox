import React from 'react'
import './Input.css'

export default function InputNumber(props) {
    return (
        <>
            <div className="input-block">
                <label htmlFor={props.name}>{props.label}</label>
                <input 
                    type="number" 
                    id={props.name}
                    value={props.value}
                    onChange={e => props.setValue(e.target.value)} 
                />
            </div>
        </>

    )
}