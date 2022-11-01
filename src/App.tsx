import { Routes } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox, responsive } from './styles/mixin';

const Container = styled.div`
  width: 100vw;
  ${flexBox()};
  padding: 30px;

  ${responsive('phone')} {
    padding: 0;
  }
`;

function App() {
  return (
    <Container>
      <div>test~</div>
      <Routes />
    </Container>
  );
}

export default App;


