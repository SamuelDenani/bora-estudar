import React, { useState, FormEvent } from 'react';
import InputField from '../../components/InputField';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Heading, Form, Submit } from './styles';

const Subscribe: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const history = useHistory();

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault();

        const data = {
            name,
            last_name: lastName,
            email,
            password
        }

        const request = await api.post('/users', data);

        console.log(request);

        if (request.status === 201) {
            history.push('login');
        } else {
            alert('Ocoreu um erro durante seu cadastro D= Tente novamente.');
        }

    };

    return (
        <Container>
            <Heading>Nos conte mais sobre você!</Heading>
            <Form onSubmit={handleSubmit}>
                <InputField type="text" placeholder="Nome" id="name" onChange={setName} value={name} />
                <InputField type="text" placeholder="Sobrenome" id="last-name" onChange={setLastName} value={lastName} />
                <InputField type="email" placeholder="Email" id="email" onChange={setEmail} value={email} />
                <InputField type="password" placeholder="Senha" id="password" onChange={setPassword} value={password} />
                <Submit>
                    Cadastrar
                </Submit>
            </Form>
        </Container>
    );
}

export default Subscribe;