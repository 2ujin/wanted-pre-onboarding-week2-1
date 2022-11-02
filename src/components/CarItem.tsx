import styled from 'styled-components';
import moment from 'moment';
import Badge from './Badge';


type AttributeProps = {
    attribute: {
        brand: string;
        name: string;
        segment: 'C' | 'D' | 'E' | 'SUV';
        fuelType: 'gasoline' | 'ev' | 'hybrid';
        imageUrl: string;
    },
    amount: number;
    createdAt: Date;
}

enum ENUM_SEGMENT {
    C = '소형',
    D = '중형',
    E = '대형',
    SUV = 'SUV'
}

enum ENUM_FUELTYPE {
    gasoline = '가솔린',
    ev = '전기',
    hybrid = '하이브리드',
}


function CarItem({ attribute: { brand, name, segment, fuelType, imageUrl }, createdAt, amount }: AttributeProps) {

    return (
        <CarItemWrapper>
            <div>
                <TitleWrapper>
                    <Title> {brand} </Title>
                    <Title> {name} </Title>
                </TitleWrapper>
                <SegmentWrapper>
                    <div>{ENUM_SEGMENT[segment]} / {ENUM_FUELTYPE[fuelType]} </div>
                    <div> 월 {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 부터</div>
                </SegmentWrapper>
            </div>
            <ImgWrapper>
                <>
                <Img src={imageUrl} />
                {
                        moment().format('YYYY-MM-DD') < moment(createdAt).add(1, 'day').format('YYYY-MM-DD') ? <BadgeWrapper> <Badge text="신상" /></BadgeWrapper> : null
                }
                </>
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