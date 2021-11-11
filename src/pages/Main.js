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

    return (
        <>
            <Header/>
            <div className="main-container">
                {events.length > 0 ? (
                    <ul>
                        {events.map(event => (
                            <li key={event.id}>
                                <img src={`data:image/jpeg;base64,${event.image}`} alt={event.name}></img>
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