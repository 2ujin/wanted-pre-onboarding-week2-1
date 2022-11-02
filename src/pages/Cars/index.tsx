import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CarItem from '../../components/CarItem';
import Chips from '../../components/Chips';
import Header from '../../components/Header';
import useAxios from '../../hooks/useAxios';
import carAPI from '../../utils/api';

type AttributeProps = {
  attribute: {
    brand: string;
    name: string;
    segment: 'ENUMC' | 'D' | 'E' | 'SUV';
    fuelType: 'ENUMgasoline' | 'ev' | 'hybrid';
    imageUrl: string;
  },
  createdAt: Date;
  amount: number
}

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
          console.log(carList)
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
        {segmentList.map((item) => <Chips
          setSegmentChips={setSegmentChips} selected={selectSegement === item.segment} text={item.text} segment={item.segment} />)}
      </ChipsWrapper>

      {carList.map((catItem: AttributeProps) => <CarItem {...catItem} />)}
    </>
  );
}

export default Cars;

const ChipsWrapper = styled.div`
  display: flex;
  padding: 6px 12px;
  border-bottom: 1px solid ${props => props.theme.mainColor};
`

