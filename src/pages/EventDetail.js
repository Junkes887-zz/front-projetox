import React from 'react'
import Header from '../components/Header'

import imgEvent from './evento.jpeg'
import './EventDetail.css'

export default function EventDetail({history, data}) {
    async function back() {
        history.push(`/`)
    }

    const event = {
            id: 1,
            name: 'Evento 01',
            description: 'Descrição do evento 01',
            value: 30.00
        }

    return (
        <>
            <Header />
            <div className="event-detail-container">
                <img src={imgEvent} alt={event.name}></img>
                <footer>
                    <div className="detail">
                        <strong>{event.name}</strong>
                        <p>{event.description}</p>
                        <p className="valor">Valor: {event.value}</p>
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