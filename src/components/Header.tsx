import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { headerProps } from '../utils/types';

function Header({ isBackBtn, text }: headerProps) {
    const navigate = useNavigate();
    const onClick = () => navigate(-1);

    return (
        <HeaderWrapper>
            {isBackBtn ? <BackBtn src="/icon/i_back.svg" onClick={onClick} /> : <div> </div>}
            <Text>{text}</Text>
            <div> </div>
        </HeaderWrapper>
    );
}

export default Header;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.mainColor};
`;

const BackBtn = styled.img`
    width: 24px;
`;

const Text = styled.div`
    font-weight: bold;
    font-size: 18px;
`;