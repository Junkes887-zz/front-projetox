import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {

    return (
        <div className="page-header">
            <Link className="home" to="/" >Blablabla Eventos</Link>
            <div className="space"></div>

            {props.showLogin !== "false" ?
                (<Link className="login" to="/login" >Logar</Link>) : null
            }
        </div>
    )
}