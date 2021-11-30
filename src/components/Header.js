import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') == 'true');
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') == 'true');
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

    const exit = () => {
        setIsAuthenticated(false)
        setIsAdmin(false)
        setUser(null)

        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('isAdmin')
        localStorage.removeItem('user')
        localStorage.removeItem('promoter_id')
        
        localStorage.setItem('isAuthenticated', false)
        localStorage.setItem('isAdmin', false)
        localStorage.setItem('user', null)
        localStorage.setItem('promoter_id', null)
    }

    return (
        <div className="page-header">
            <Link className="home" to="/" >Blablabla Eventos</Link>
            <div className="space"></div>

            <h2 className="name-header">{user ? 'Olá, ' + user.name : ''}</h2>
            { !isAuthenticated ?
                (<Link className="header-links" to="/login" >Logar</Link>) : null
            }

            { !isAuthenticated ?
                (<Link className="header-links" to="/register" >Cadastrar-se</Link>) : null
            }

            { isAdmin ?
                (<Link className="header-links" to="/event" >Cadastrar eventos</Link>) : null
            }

            { isAdmin ?
                (<Link className="header-links" to="/promoter" >Promoters</Link>) : null
            }

            { isAuthenticated ?
                (<Link className="header-links" to="/" onClick={() => exit()}>Sair</Link>) : null
            }
        </div>
    )
}