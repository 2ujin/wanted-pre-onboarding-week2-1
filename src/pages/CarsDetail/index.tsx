import moment from 'moment';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailContent from '../../components/DetailContent';
import DetailTitle from '../../components/DetailTitle';
import Header from '../../components/Header';
import useAxios from '../../hooks/useAxios';
import carAPI from '../../utils/api';
import 'moment/locale/ko';
import { AdditionalProducts, AttributeProps, ENUM_FUELTYPE, ENUM_SEGMENT, Insurance } from '../../utils/types';

function CarsDetail() {
  const [carItem, setCarItem] = useState<AttributeProps>();
  const getCars = useAxios(carAPI.getCarsDetail);
  const { segment, fuelType } = useParams();

  useEffect(() => {
    getCars(
      [],
      { segment, fuelType },
      {
        onSuccess: (data: any) => {
          setCarItem(data.payload[0])
        },
        onError: (state: any) => {
          // navigate('/error', { state });
        },
      }
    );
  }, []);



  return (
    <>
      <Header isBackBtn text='차량상세' />
      <MainImg src={carItem?.attribute?.imageUrl} />

      <BrandWrapper>
        <Brand>{carItem?.attribute?.brand}</Brand>
        <Menu>{carItem?.attribute?.name}</Menu>


        <Price>월 {carItem?.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Price>

      </BrandWrapper>

      <DetailTitle text="차량 비용" />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <DetailContent subTitle="차종" content={ENUM_SEGMENT[carItem?.attribute.segment]} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <DetailContent subTitle="연료" content={ENUM_FUELTYPE[carItem?.attribute.fuelType]} />
      <DetailContent subTitle="이용 가능일" content={moment(carItem?.startDate).format('MM월 DD일 (dd) 부터').toString()} />


      <DetailTitle text="보험" />
      {carItem?.insurance.map((item: Insurance) =>
        <DetailContent subTitle={item.name} content={item.description} />
      )}

      <DetailTitle text="추가상품" />
      {carItem?.additionalProducts.map((item: AdditionalProducts) =>
        <DetailContent subTitle={item.name} content={`월 ${item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`} />
      )}
    </>
  );
}

export default CarsDetail;

const MainImg = styled.img`
  width: 100%;
`;

const BrandWrapper = styled.div`
  padding: 20px 20px 22px;
  line-height: 28px;
`

const Brand = styled.div`
  font-size: 20px;
  font-weight: 700;
`

const Menu = styled.div`
  font-size: 24px;
  font-weight: 700;
`

const Price = styled.div`
  font-size: 17px;
  text-align: right;
`
