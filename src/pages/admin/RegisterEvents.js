import React, { useState } from 'react'

import Upload from '../../components/Upload'
import Input from '../../components/Input'
import InputDate from '../../components/InputDate'
import InputNumber from '../../components/InputNumber'
import InputCurrency from '../../components/InputCurrency'

import './RegisterEvents.css'
import api from '../../services/api'
import Header from '../../components/Header'

const RegisterEvents = (props) => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ ticketAmount, setTicketAmount ] = useState('');
    const [ ticketValue, setTicketValue ] = useState('');
    const [ image, setImage ] = useState('');
    const [ eventDate, setEventDate ] = useState('');

    async function save() {
        const formData = new FormData()
        const promoter_id = localStorage.getItem('promoter_id')
        const data = JSON.stringify({
            'promoter_id': promoter_id,
            name,
            description,
            'ticket_amount': ticketAmount,
            'ticket_value': ticketValue,
            'event_date': new Date(eventDate).toISOString().slice(0, 10)
        })
        formData.append('data', String(data))
        formData.append('image', image[0])
        api.post('/events', formData, {
            headers: {
              "Content-Type": "multipart/form-data",
        }}).then(() => {
            props.history.push('/')
        })
    }


    return (
        <div className="register-evente-container">
            <Header/>
            <main>
                <Upload setValue={setImage}/>
                <Input name="name" label="Nome do evento" value={name} setValue={setName}/>
                <Input name="description" label="Descrição" value={description} setValue={setDescription}/>
                <InputNumber name="ticketAmount" label="Número de ingressos" value={ticketAmount} setValue={setTicketAmount}/>
                <InputCurrency name="ticketValue" label="Valor do ingresso" value={ticketValue} setValue={setTicketValue}/>
                <InputDate name="eventDate" label="Data do evento" value={eventDate} setValue={setEventDate}/>

                <footer>
                    <button type="button" onClick={() => save()}>
                        Criar
                    </button>
                </footer>
            </main>
        </div>
    )
  }

  export default RegisterEvents