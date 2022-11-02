import styled from 'styled-components';

function Cars() {
  return (
    <div>cars</div>
  );
}

export default Cars;

const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;
`;

