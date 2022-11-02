import CarItem from '../../components/CarItem';
import Header from '../../components/Header';

type AttributeProps = {
  attribute: {
    brand: string;
    name: string;
    segment: 'ENUMC' | 'D' | 'E' | 'SUV';
    fuelType: 'ENUMgasoline' | 'ev' | 'hybrid';
    imageUrl: string;
  },
  isNew?: boolean,
  amount: number
}

function Cars() {
  const dd: AttributeProps = {
    attribute: { brand: '기아', name: 'EV6', segment: 'ENUMC', fuelType: 'ENUMgasoline', imageUrl: 'https://velog.velcdn.com/images/velopert/post/043d71d9-5a66-4795-b960-ba7ff9384947/image.png' },
    isNew: false,
    amount: 2000
  }
  return (
    <>
      <Header isBackBtn={false} text='전체차량' />
      {/* <Chips type="one" text="테스트버튼" />
      <Badge text="신규" /> */}
      {/* <CarItem isNew={false} {...dd} /> */}
    </>
  );
}

export default Cars;

