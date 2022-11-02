import styled from 'styled-components';

type ColorProps = {
    selected: boolean;
    text: string;
    segment: string;
    setSegmentChips: (params: string) => void
};

function Chips({ selected, text, setSegmentChips, segment }: ColorProps) {
    const sendViewStatus = (params: string) => {
        console.log(params)
        setSegmentChips(params);
    };

    return (
        <ChipsWrapper className={selected ? 'selected' : 'nonselected'} onClick={(e) => {
            sendViewStatus(segment);
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