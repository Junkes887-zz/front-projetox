import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import api from '../../services/api';

import './PromoterList.css'
export default function PromoterList (props) {
    const [promoters, setPromoters] = useState([]);
    
    const loadPromoters = async () => {
        const resp = await api.get('/promoters')
        setPromoters(resp.data.data)
    }

    useEffect(() => {
        const init = async () => {
            const resp = await api.get('/promoters')
            setPromoters(resp.data.data)
        }

        init()
    }, [])

    const deletePromoter = async (id) => {
        const promoter_id = localStorage.getItem('promoter_id')
        if(id == promoter_id) {
            alert('Você não pode se deletar!')
            return
        }
        debugger
        const resp = await api.delete('/promoters/' + id)

        loadPromoters()
    }

    const addPromoter = () => {
        props.history.push('/add-promoter')
    }


    return (
        <>
            <Header/>
            <div className="promoter-list-container">
                <button className="btn-add" onClick={addPromoter}>Adicionar</button>
                {promoters.length > 0 ? (
                        <table>
                            <tr>
                                <th className="number"><p>Id</p></th>
                                <th><p>Nome</p></th>
                                <th><p>Email</p></th>
                                <th><p>Ações</p></th>
                            </tr>
                            {promoters.map(event => (
                                <tr>
                                    <td className="number"><p>{event.id}</p></td>
                                    <td><p>{event.user.name}</p></td>
                                    <td><p>{event.user.email}</p></td>
                                    <td>
                                        <button className="btn-delete" onClick={() => deletePromoter(event.id)}>Excluir</button>
                                    </td>
                                </tr>
                            ))}    
                        </table>
                    ) : (
                        null
                    )}
            </div>
        </>
    )
}