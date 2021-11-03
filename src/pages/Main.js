import React, { useEffect, useState } from 'react';
import './Main.css';
import Header from '../components/Header';

import imgEvent from './evento.jpeg'
import api from '../services/api';

export default function Main({history}) {
    const [events, setEvents] = useState([]);

    async function showEventDetail(id) {
        history.push(`/event/${id}`)
    }

    useEffect(() => {
        async function loadEvents() {
            const resp = await api.get('/events')
            setEvents(resp.data.data)
        }

        loadEvents()
    }, [])


    // const events = [
    //     {
    //         id: 1,
    //         name: 'Evento 01',
    //         description: 'Descrição do evento 01'
    //     },
    //     {
    //         id: 2,
    //         name: 'Evento 02',
    //         description: 'Descrição do evento 02'
    //     },
    //     {
    //         id: 3,
    //         name: 'Evento 03',
    //         description: 'Descrição do evento 03'
    //     },
    //     {
    //         id: 4,
    //         name: 'Evento 04',
    //         description: 'Descrição do evento 04'
    //     },
    //     {
    //         id: 5,
    //         name: 'Evento 05',
    //         description: 'Descrição do evento 05'
    //     },
    //     {
    //         id: 6,
    //         name: 'Evento 06',
    //         description: 'Descrição do evento 06'
    //     },
    //     {
    //         id: 7,
    //         name: 'Evento 07',
    //         description: 'Descrição do evento 07'
    //     },
    //     {
    //         id: 8,
    //         name: 'Evento 08',
    //         description: 'Descrição do evento 08'
    //     }
    // ]

    return (
        <>
            <Header/>
            <div className="main-container">
                {events.length > 0 ? (
                    <ul>
                        {events.map(event => (
                            <li key={event.id}>
                                <img src={imgEvent} alt={event.name}></img>
                                <footer>
                                    <strong>{event.name}</strong>
                                    <p>{event.description}</p>
                                </footer>

                                <button onClick={() => showEventDetail(event.id)}>
                                    Ver evento
                                </button>
                            </li>
                        ))}    
                    </ul>
                ) : (
                    null
                )}
            </div>
        </>
    )
}