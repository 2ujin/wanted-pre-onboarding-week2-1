import styled from 'styled-components';
import { DetailTitleProps } from '../utils/types';

function DetailContent({ subTitle, content }: DetailTitleProps) {
    return (
        <DetailTitleWrapper>
            <SubTitle>{subTitle}</SubTitle>
            <Content>{content}</Content>
        </DetailTitleWrapper>
    );
}

export default DetailContent;

const DetailTitleWrapper = styled.div`
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
`

const SubTitle = styled.div`
    font-weight: 700;
    font-size: 17px;
`
const Content = styled.div`
    font-weight: 400;
    font-size: 17px;
`


