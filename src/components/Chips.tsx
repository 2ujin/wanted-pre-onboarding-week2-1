import styled from 'styled-components';

type ColorProps = {
    type: 'all' | 'one';
    text: string;
};

function Chips({ type, text }: ColorProps) {
    return (
        <ChipsWrapper color={type}>
            {text}
        </ChipsWrapper>
    );
}

export default Chips;

const ChipsWrapper = styled.div`
    border-radius: 24px;
    padding: 8px 18px;
    background-color: ${props => props.color === 'all' ? props.theme.mainColor : props.theme.secondaryColor};
    color: ${props => props.color === 'all' ? props.theme.whiteColor : props.theme.mainColor};
    font-weight: bold;
`;