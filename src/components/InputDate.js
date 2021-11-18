import React from 'react'
import InputMask from 'react-input-mask' 
import './Input.css'

export default function InputDate(props) {

    return (
        <>
            <div className="input-block">
                <label htmlFor={props.name}>{props.label}</label>
                <InputMask 
                    mask="99/99/9999"
                    id={props.name}
                    value={props.value}
                    onChange={e => props.setValue(e.target.value)}
                />
            </div>
        </>

    )
}