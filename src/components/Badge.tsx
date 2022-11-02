import styled from 'styled-components';

type BadgeProps = {
    text: string;
};

function Badge({ text }: BadgeProps) {
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