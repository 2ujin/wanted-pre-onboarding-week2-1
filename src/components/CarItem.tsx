import styled from 'styled-components';
import Badge from './Badge';

type AttributeProps = {
    attribute: {
        brand: string;
        name: string;
        segment: 'ENUMC' | 'D' | 'E' | 'SUV';
        fuelType: 'ENUMgasoline' | 'ev' | 'hybrid';
        imageUrl: string;
    },
    isNew: boolean,
    amount: number
}

function CarItem({ attribute: { brand, name, segment, fuelType, imageUrl }, isNew, amount }: AttributeProps) {
    return (
        <CarItemWrapper>
            <div>
                <TitleWrapper>
                    <Title> {brand} </Title>
                    <Title> {name} </Title>
                </TitleWrapper>
                <SegmentWrapper>
                    <div>{segment} / {fuelType} </div>
                    <div> 월 {amount}원 부터</div>
                </SegmentWrapper>
            </div>
            <ImgWrapper>
                <Img src={imageUrl} />
                {
                    isNew ? null : <BadgeWrapper>
                        <Badge text="신상" />
                    </BadgeWrapper>
                }
            </ImgWrapper>
        </CarItemWrapper>
    );
}

export default CarItem;

const CarItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 25px;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.mainColor};
`;

const TitleWrapper = styled.div`
    margin-bottom: 8px;
`;

const Title = styled.div`
    font-weight: bold;
`;

const ImgWrapper = styled.div`
    position: relative;
`;

const Img = styled.img`
    max-width: 200px;
`;

const SegmentWrapper = styled.div`
    line-height: 22px;
`;


const BadgeWrapper = styled.div`
    position: absolute;
    top: -15px;
    right: -15px;
`