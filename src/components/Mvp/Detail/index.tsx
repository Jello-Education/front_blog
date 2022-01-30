import { Container, Text } from './styles';

const Detail: React.FC = () => {
  return (
    <Container>
      <img src="/mvp-money-saving.svg" alt="money saving image"/>

      <Text>
        <h1>Diversas opções acessíveis</h1>
        
        <p>
          Nossa missão é facilitar a aprendizagem. Entendendo
          a importancia da educação, possuimos vários cursos gratuitos!   
        </p>  

        <a href="google">Saiba mais</a>
      </Text>
    </Container>
  );
}

export default Detail;