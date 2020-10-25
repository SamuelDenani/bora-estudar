import React, { useState, FormEvent } from 'react';
import InputField from '../../components/InputField';
import { useHistory } from 'react-router-dom';
import { FiCheck, FiArrowLeft } from 'react-icons/fi';

import { Container, GoBack, Heading, Form, Submit, Subscribe } from './styles';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleGoToHome = () => {
        history.push('/');
    };

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();

        console.log({
            email,
            password
        });

        history.push('study');
    };

    return (
        <Container>
            <GoBack>
                <FiArrowLeft size={32} color="#fadcac" onClick={handleGoToHome} />
            </GoBack>
            <Heading>Antes, faça seu login</Heading>
            <Form onSubmit={handleSubmit}>
                <InputField type="email" placeholder="Email" id="email" onChange={setEmail} value={email} />
                <InputField type="password" placeholder="Senha" id="password" onChange={setPassword} value={password} />
                <Submit>
                    <FiCheck size={32} color="#fadcac" />
                </Submit>
                <Subscribe to="subscribe">Cadastre-se aqui</Subscribe>
            </Form>
        </Container>
    );
}

export default Login;