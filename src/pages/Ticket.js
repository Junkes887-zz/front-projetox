import { useEffect, useState } from "react";
import Header from "../components/Header";
import api from "../services/api";
import barCode from "../images/barCode.png"
import './Ticket.css'

export default function Ticket(props) {
    const [ticket, setTicket] = useState({});
    useEffect(() => {
        debugger
        async function loadEvent() {
            const id = props.location.id
            const resp = await api.get(`/tickets/${id}`)
            setTicket(resp.data.data)
        }

        loadEvent()
    }, [])

    return (
        <>
            <Header/>
            <div className="ticket-container">
                <img src={barCode} />
                <footer>
                    <p>{ticket.event.name}</p>
                    <p>{ticket.event.event_date}</p>
                </footer>
            </div>
        </>
    )
}