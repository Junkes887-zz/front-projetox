import React, { useState } from 'react'

import Header from '../components/Header';
import Input from '../components/Input';

import api from '../services/api'

import './Login.css'

export default function Login() {
    const [ emailOrName, setEmailOrName ] = useState('');
    const [ pass, setPass ] = useState('');

    async function logar() {
        const resp = await api.post('/logins/users', {
            emailOrName,
            pass
        })
        console.log(resp.status)
    }


    return (
        <div id="login-form">
            <Header showLogin="false"/>
            <main>
                <fieldset>
                    <Input name="emailOrName" label="Email ou nome" value={emailOrName} setValue={setEmailOrName}/>
                    <Input name="pass" label="Senha" value={pass} setValue={setPass}/>
                </fieldset>

                <footer>
                    <button type="button" onClick={() => logar()}>
                        Logar
                    </button>
                </footer>
            </main>
        </div>

    )
}