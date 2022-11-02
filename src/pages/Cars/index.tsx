import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CarItem from '../../components/CarItem';
import Chips from '../../components/Chips';
import Header from '../../components/Header';
import useAxios from '../../hooks/useAxios';
import carAPI from '../../utils/api';
import { AttributeProps } from '../../utils/types';

function Cars() {
  const segmentList = [
    { text: '전체', segment: 'all' },
    { text: '대형', segment: 'E' },
    { text: '중형', segment: 'D' },
    { text: '소형', segment: 'ENUMC' },
    { text: '전기', segment: 'SUV' },
  ];

  const [selectSegement, setSegement] = useState('all');
  const [carList, setCarList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getCars = useAxios(carAPI.getCars);


  useEffect(() => {
    setIsLoading(true);
    getCars(
      [],
      selectSegement !== 'all' ? { segment: selectSegement } : '',
      {
        onSuccess: (data: any) => {
          setCarList(data.payload)
          setIsLoading(false);
        },
        onError: (state: any) => {
          // navigate('/error', { state });
        },
      }
    );
  }, []);


  const setSegmentChips = (value: string) => {
    setSegement(value);
    getCars([],
      selectSegement !== 'all' ? { segment: selectSegement } : '',
      {
        onSuccess: (data: any) => {
          setCarList(data.payload)
          setIsLoading(false);
        },
        onError: (state: any) => {
          // navigate('/error', { state });
        },
      })
  };

  return (
    <>
      <Header isBackBtn={false} text='전체차량' />
      <ChipsWrapper>
        {segmentList.map((item) => <Chips key={item.segment}
          setSegmentChips={setSegmentChips} selected={selectSegement === item.segment} text={item.text} segment={item.segment} />)}
      </ChipsWrapper>

      {isLoading && (
        <LoadingContainer>
          로딩중 ...
        </LoadingContainer>
      )}

      {carList && carList.length <= 0 && !isLoading && (
        <LoadingContainer>
          차량이 없습니다.
        </LoadingContainer>
      )}

      {carList.map((catItem: AttributeProps) => <CarItem key={catItem.attribute.id} {...catItem} />)}
    </>
  );
}

export default Cars;

const ChipsWrapper = styled.div`
  display: flex;
  padding: 6px 12px;
  border-bottom: 1px solid ${props => props.theme.mainColor};
`

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
