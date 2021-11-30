import React, { useState } from 'react'

import Input from '../components/Input';

import api from '../services/api'

import './Login.css'

export default function Login(props) {
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');

    async function logar() {
        const resp = await api.post('/logins', {
            email_or_name: email,
            pass
        }).then((response) => {
            localStorage.setItem('isAuthenticated', true)
            localStorage.setItem('promoter_id', response.data.data.promoter_id)
            localStorage.setItem('user', JSON.stringify(response.data.data.user))
            if (response.data.data.admin == true) {
                localStorage.setItem('isAdmin', true)
            } else {
                localStorage.setItem('isAdmin', false)                
            }
            props.history.push('/')      
        }).catch(() => {
            localStorage.setItem('isAuthenticated', false)
            localStorage.setItem('isAdmin', false)
            alert('Dados incorretos')
        })
    }

    async function back() {
        props.history.push('/')
    }


    return (
        <div id="login-form">
            <main>
                <h2>Login</h2>
                <fieldset>
                    <Input name="email" label="Email" value={email} setValue={setEmail}/>
                    <Input name="pass" label="Senha" value={pass} setValue={setPass}/>
                </fieldset>

                <footer>
                    <div className="lits-buttons">
                        <button className="logar" type="button" onClick={() => logar()}>Logar</button>
                        <button className="back" onClick={() => back()}>Voltar</button>
                    </div>
                </footer>
            </main>
        </div>

    )
}