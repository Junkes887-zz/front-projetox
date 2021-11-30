import React, { useState } from 'react'

import Header from '../components/Header';
import Input from '../components/Input';

import api from '../services/api'

import './Login.css'

export default function Register(props) {
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ pass, setPass ] = useState('');

    async function criar() {
        const resp = await api.post('/users', {
            email,
            name,
            pass
        }).then(() => {
            props.history.push('/login')
        }).catch(() => {
            alert(resp.data.error)
        })
    }

    async function back() {
        props.history.push('/')
    }


    return (
        <div id="login-form">
            <main>
                <h2>Cadastro</h2>
                <fieldset>
                    <Input name="email" label="Email" value={email} setValue={setEmail}/>
                    <Input name="name" label="Nome" value={name} setValue={setName}/>
                    <Input name="pass" label="Senha" value={pass} setValue={setPass}/>
                </fieldset>

                <footer>
                    <div className="buttons">
                        <button className="logar" type="button" onClick={() => criar()}>Criar</button>
                        <button className="back" onClick={() => back()}>Voltar</button>
                    </div>
                </footer>
            </main>
        </div>

    )
}