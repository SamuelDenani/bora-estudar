import React from 'react';

import { Container, ContentWrapper, Heading, Paragraph, Image, Button } from './styles';
import { FiArrowRight } from 'react-icons/fi';

import BooksPlaceholder from '../../images/books-placeholder.png';

const Home: React.FC = () => {
    return (
        <Container>
            <ContentWrapper>
                <Heading>Bora estudar?</Heading>
                <Paragraph>Nos diga quais assuntos você quer estudar e nós te ajudamos a montar um cronograma! Tudo pensado para você não se perder mais nos estudos e restaurar sua vontade de estudar.</Paragraph>
            </ContentWrapper>

            <Image src={BooksPlaceholder} alt="Livros empilhados"/>

            <Button
                to="login"
                tabIndex={1}
            >
                Bora!
                <FiArrowRight size={26} color="#fff" />
            </Button>
        </Container>
    );
}

export default Home;