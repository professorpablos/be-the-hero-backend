import React, {useState} from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function Newincident() {

    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');        
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title, 
            description, 
            value, 
        }        
        try {
            await api.post('/incidents', data, {headers: {Authorization: ongId}});
            alert('Incident cadastrado');
            history.push('/profile');
        } catch (error) {
            alert('Erro na inclusão do incidente, tente novamente.')
        }
    }

    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="logo"/>
                    <h1>Cadastrar Novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolvê-lo.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="e02041"/>
                        Voltar para home
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso" value = {title} onChange={e => setTitle(e.target.value)}/>
                    <input placeholder="Descrição" value = {description} onChange={e => setDescription(e.target.value)}/>
                    <input type="number" placeholder="Valor em Reais" value = {value} onChange={e => setValue(e.target.value)}/>
                    <div className="button-group">
                        <button className="cancel-button" type="reset">Cancelar</button>
                        <button className="button" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>

        )
}