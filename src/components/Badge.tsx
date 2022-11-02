import styled from 'styled-components';
import { TextProps } from '../utils/types';

function Badge({ text }: TextProps) {
    return (
        <BadgeWrapper>
            {text}
        </BadgeWrapper>
    );
}

export default Badge;

const BadgeWrapper = styled.div`
    border-radius: 24px;
    padding: 5px 18px;
    background-color:${props => props.theme.teriaryColor};
    color: ${props => props.theme.whiteColor};
    box-shadow: 0 5px 18px -7px rgba(0,0,0,1);
`;