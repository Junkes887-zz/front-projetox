import React, { useState } from 'react'

import Upload from '../../components/Upload'
import Input from '../../components/Input'

import './RegisterEvents.css'
import api from '../../services/api'
import Header from '../../components/Header'

const RegisterEvents = (props) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ image, setImage ] = useState('');

    async function save() {
        const formData = new FormData()
        const data = JSON.stringify({
            user: {
                email,
                name,
                pass
            }
        })
        formData.append('data', String(data))
        formData.append('photo', image[0])
        api.post('/promoters', formData, {
            headers: {
              "Content-Type": "multipart/form-data",
        }}).then(() => {
            props.history.push('/promoter')
        })
    }


    return (
        <div className="register-evente-container">
            <Header/>
            <main>
                <Upload setValue={setImage}/>
                <Input name="email" label="Email" value={email} setValue={setEmail}/>
                <Input name="name" label="Nome" value={name} setValue={setName}/>
                <Input name="pass" label="Senha" value={pass} setValue={setPass}/>

                <footer>
                    <button type="button" onClick={() => save()}>
                        Criar
                    </button>
                </footer>
            </main>
        </div>
    )
  }

  export default RegisterEvents