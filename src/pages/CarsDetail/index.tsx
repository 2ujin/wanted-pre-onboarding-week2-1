import styled from 'styled-components';

function CarsDetail() {
  return (
    <div>cars-detail</div>
  );
}

export default CarsDetail;

const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;
`;

