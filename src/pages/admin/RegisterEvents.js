import React, { useState } from 'react'

import Upload from '../../components/Upload'
import Input from '../../components/Input'

import './RegisterEvents.css'
import api from '../../services/api'

const RegisterEvents = () => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ ticketAmount, setTicketAmount ] = useState('');
    const [ ticketValue, setTicketValue ] = useState('');
    const [ image, setImage ] = useState('');
    const [ eventDate, setEventDate ] = useState('');

    async function save() {
        const formData = new FormData()
        const data = JSON.stringify({
            name,
            description,
            ticketAmount,
            ticketValue,
            eventDate
        })
        formData.append('data', String(data))
        formData.append('image', image)
        api.post('/events', formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }}).then(console.log)
    }


    return (
        <div className="register-evente-container">
            <Upload setValue={setImage}/>
            <Input name="name" label="Name" value={name} setValue={setName}/>
            <Input name="description" label="Description" value={description} setValue={setDescription}/>
            <Input name="ticketAmount" label="Ticket Amount" value={ticketAmount} setValue={setTicketAmount}/>
            <Input name="ticketValue" label="Ticket Value" value={ticketValue} setValue={setTicketValue}/>
            <Input name="eventDate" label="Data" value={eventDate} setValue={setEventDate}/>

            <footer>
                <button type="button" onClick={() => save()}>
                    Salvar
                </button>
            </footer>
        </div>
    )
  }

  export default RegisterEvents