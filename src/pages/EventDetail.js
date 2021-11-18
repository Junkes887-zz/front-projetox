import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

import imgEvent from './evento.jpeg'
import './EventDetail.css'
import api from '../services/api';

export default function EventDetail(props) {
    const [event, setEvent] = useState({});

    async function back() {
        props.history.push('/')
    }

    useEffect(() => {
        async function loadEvent() {
            const id = props.location.id
            const resp = await api.get(`/events/${id}`)
            setEvent(resp.data.data)
        }

        loadEvent()
    }, [])

    return (
        <>
            <Header/>
            <div className="event-detail-container">
                <img src={`data:image/jpeg;base64,${event.image}`} alt={event.name}></img>
                <footer>
                    <div className="detail">
                        <strong>{event.name}</strong>
                        <p className="description">{event.description}</p>
                        <br></br>
                        <p className="quantidade-valor">Quantidade de ingressos: {event.ticket_amount}</p>
                        <p className="quantidade-valor">Valor: R$ {event.ticket_value}</p>
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