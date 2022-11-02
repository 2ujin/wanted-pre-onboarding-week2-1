import styled from 'styled-components';
import { ColorProps } from '../utils/types';

function Chips({ selected, text, setSegmentChips, segment }: ColorProps) {
    const sendSegmentStatus = (params: string) => {
        setSegmentChips(params);
    };

    return (
        <ChipsWrapper className={selected ? 'selected' : 'nonselected'} onClick={() => {
            sendSegmentStatus(segment);
        }}>
            {text}
        </ChipsWrapper>
    );
}

export default Chips;

const ChipsWrapper = styled.div`
    border-radius: 62px;
    padding: 5px 18px;
    font-weight: bold;
    margin-right: 7px;
    font-size: 14px;

    &.selected{
        background-color: ${props => props.theme.mainColor};
        color: ${props => props.theme.whiteColor};
    }

    &.nonselected{
        background-color: ${props => props.theme.secondaryColor};
        color: ${props => props.theme.mainColor};
    }
`;