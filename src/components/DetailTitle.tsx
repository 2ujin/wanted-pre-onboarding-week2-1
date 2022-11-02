import styled from 'styled-components';
import { TextProps } from '../utils/types';

function DetailTitle({ text }: TextProps) {
    return (
        <DetailTitleWrapper>
            {text}
        </DetailTitleWrapper>
    );
}

export default DetailTitle;

const DetailTitleWrapper = styled.div`
    padding: 14px 20px;
    background-color:${props => props.theme.teriaryColor};
    color: ${props => props.theme.whiteColor};
    font-weight: 700;
    font-size: 17px;
    display: flex;
    align-items:center;
`
