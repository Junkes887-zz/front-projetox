import React from 'react'
import CurrencyInput from 'react-currency-input-field';
import './Input.css'

export default function InputCurrency(props) {
    return (
        <>
            <div className="input-block">
                <label htmlFor={props.name}>{props.label}</label>
                <CurrencyInput 
                    prefix="$ "
                    decimalsLimit={2}
                    defaultValue={0}
                    value={props.value}
                    id={props.name}
                    onValueChange={(value, name) => props.setValue(value)} 
                />
            </div>
        </>

    )
}