import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

import imgEvent from './evento.jpeg'
import './EventDetail.css'
import api from '../services/api';

export default function EventDetail({history, id}) {
    const [event, setEvent] = useState({});

    async function back() {
        history.push('/')
    }

    useEffect(() => {
        async function loadEvent() {
            debugger
            const resp = await api.get(`/events/${id}`)
            setEvent(resp.data.data)
        }

        loadEvent()
    }, [])


    // const event = {
    //         id: 1,
    //         name: 'Evento 01',
    //         description: 'Descrição do evento 01',
    //         value: 30.00
    //     }

    return (
        <>
            <Header/>
            <div className="event-detail-container">
                <img src={imgEvent} alt={event.name}></img>
                <footer>
                    <div className="detail">
                        <strong>{event.name}</strong>
                        <p>{event.description}</p>
                        <p className="valor">Quantidade de ingressos: {event.ticket_amount}</p>
                        <p className="valor">Valor: {event.ticket_value}</p>
                    </div>
                    <div className="buttons">
                        <button className="buy">Comprar</button>
                        <button className="back" onClick={() => back()}>Voltar</button>
                    </div>
                </footer>
            </div>
        </>
    )
}