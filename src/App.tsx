import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Cars from './pages/Cars';
import CarsDetail from './pages/CarsDetail';
import { flexBox, responsive } from './styles/mixin';

const Container = styled.div`
  width: 100vw;
  ${flexBox()};
  margin: 0 auto;
  overflow: scroll;
  height: 100vh;
  max-width: 480px;
  -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);

  ${responsive('phone')} {
    padding: 0;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    overflow: scroll;
  }
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/cars" element={<Cars />} />
        <Route path="/detail/:fuelType/:segment" element={<CarsDetail />} />
      </Routes>
    </Container>
  );
}

export default App;


