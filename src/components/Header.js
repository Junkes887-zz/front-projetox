import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {

    return (
        <div className="page-header">
            <Link className="home" to="/" >Blablabla Eventos</Link>
            <div className="space"></div>

            {props.showLogin !== "false" ?
                (<Link className="header-links" to="/login" >Logar</Link>) : null
            }


            {props.isAdmin !== "false" ?
                (<Link className="header-links" to="/event" >Cadastrar eventos</Link>) : null
            }
        </div>
    )
}