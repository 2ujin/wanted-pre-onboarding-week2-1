# wanted-pre-onboarding-week2-1
두번째 주 과제

# 파일구조
![1](https://user-images.githubusercontent.com/42020919/199672366-1cc22250-2811-4582-84c5-0d101fd5637b.png)

# 전체차량 (/pages/Cars)
![2](https://user-images.githubusercontent.com/42020919/199672357-918ec2a9-7c6f-404b-97d5-4bee8532339d.png)


## 컴포넌트

- 상단 헤더 (Header.tsx)
    
    ```tsx
    function Header({ isBackBtn, text }: headerProps) {
    	<HeaderWrapper>
    	    {isBackBtn ? <BackBtn src="/icon/i_back.svg" onClick={onClick} /> : <div> </div>}
    	    <Text>{text}</Text>
    	    <div> </div>
    	</HeaderWrapper>
    }
    ```
    
    - isBackBtn(백버튼)과 text(헤더의 타이틀)을 받아서 동적으로 사용가능, props는 타입으로 관리

- 세그먼트 chips (Chips.tsx)
    
    ```tsx
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
    
    ...
    
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
    ```
    
    - selected: 선택된 chips와 선택되지 않은 chips를 구분하여 백그라운드색상과 컬러색상이 다르게 보이도록 구현
    - chips 클릭시 부모 컴포넌트한테 선택된 인자 넘겨줌

- 자동차 아이템들 (CarItem.tsx)
    
    ```tsx
    function CarItem({ attribute: { brand, name, segment, fuelType, imageUrl }, createdAt, amount }: AttributeProps) {
        const navigate = useNavigate();
        const onClickItem = () => navigate(`/detail/${fuelType}/${segment}`);
    
        return (
            <CarItemWrapper onClick={onClickItem}>
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
    ```
    
    - 데이터 받아와서 넣어주고, 신상뱃지는 생성일 + 1 < 오늘 일 경우에 보여지도록, 원 단위 콤마처리
    - segment와 fuelType 같은 경우 데이터가 영어로 되어있는데
    
    ```tsx
    export enum ENUM_SEGMENT {
      C = '소형',
      D = '중형',
      E = '대형',
      SUV = 'SUV',
    }
    
    export enum ENUM_FUELTYPE {
      gasoline = '가솔린',
      ev = '전기',
      hybrid = '하이브리드',
    }
    ```
    
    - enum값으로 타입에 미리 선언을 해줘서 보여지는 데이터는 한글로 보여지도록 수정

## 페이지

```tsx
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
```

로딩중, 데이터 없을 경우 처리,

```tsx
const segmentList = [
    { text: '전체', segment: 'all' },
    { text: '대형', segment: 'E' },
    { text: '중형', segment: 'D' },
    { text: '소형', segment: 'ENUMC' },
    { text: '전기', segment: 'SUV' },
  ];
```

고정값 segement들은 list로 선언 후 사용

```tsx
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
```

axios를 통해 api 받아오는 방식

잘불러는 오는데 .. 이상하게 api가 두번요청을 해야 불러지는 원인 파악 … ⇒ 수정예정입니다 ㅠㅠㅠㅠㅠㅠㅠ

# 차량상세 (/detail/:fuelType/:segment)

![3](https://user-images.githubusercontent.com/42020919/199672342-1e60fc93-7213-4e81-b3c6-6c04c782e863.png)

## 컴포넌트

- 상단 헤더 (Header.tsx)
    - 위와 동일, backbutton = true
- 차랑 상세 타이틀 (차량 비용, 보험, 추가상품) **DetailTitle**
    
    ```tsx
    function DetailTitle({ text }: TextProps) {
        return (
            <DetailTitleWrapper>
                {text}
            </DetailTitleWrapper>
        );
    }
    ```
    
    - 공통으로 사용되는 컴포넌트, text를 통해 타이틀 값 받음
- 차량 상세 내용 **DetailContent**
    
    ```tsx
    function DetailContent({ subTitle, content }: DetailTitleProps) {
        return (
            <DetailTitleWrapper>
                <SubTitle>{subTitle}</SubTitle>
                <Content>{content}</Content>
            </DetailTitleWrapper>
        );
    }
    ```
    
    - 공통으로 사용되는 컴포넌트, subTitle, content를 통해 타이틀 값 받음

## 페이지

```tsx
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
```

- 상세내용 뿌려주기
- 차종이나 연료 같은 경우엔 `ENUM_SEGMENT[carItem?.attribute.segment]` enum으로 선언해둔 한글로 변환

```tsx
<DetailTitle text="보험" />
	{carItem?.insurance.map((item: Insurance) =>
	<DetailContent subTitle={item.name} content={item.description} />
)}

<DetailTitle text="추가상품" />
  {carItem?.additionalProducts.map((item: AdditionalProducts) =>
    <DetailContent subTitle={item.name} content={`월 ${item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`} />
)}
```

- 보험과 추가상품 같이 [] array 값들은 map으로 변환 후 출력

## 타입

```tsx
export type AttributeProps = {
    attribute: Attribute,
    insurance: [Insurance];
    additionalProducts: [AdditionalProducts];
    amount: number;
    createdAt: Date;
    startDate: Date;
}

export type Attribute = {
    id: number;
    brand: string;
    name: string;
    segment: 'C' | 'D' | 'E' | 'SUV';
    fuelType: 'gasoline' | 'ev' | 'hybrid';
    imageUrl: string;
}

export type Insurance = {
    name: string;
    description: string;
}

export type AdditionalProducts = {
    name: string;
    amount: number;
}

export enum ENUM_SEGMENT {
    C = '소형',
    D = '중형',
    E = '대형',
    SUV = 'SUV'
}

export enum WEEK_DAY {
    MONDAY = '월',
    TUESDAY = '화',
    WEDNESDAY = '수',
    THURSDAY = '목',
    FRIDAY = '금',
    SATURDAY = '토',
    SUNDAY = '요',
}

export enum ENUM_FUELTYPE {
    gasoline = '가솔린',
    ev = '전기',
    hybrid = '하이브리드',
}

export type ColorProps = {
    selected: boolean;
    text: string;
    segment: string;
    setSegmentChips: (params: string) => void
};

export type TextProps = {
    text: string;
};

export type DetailTitleProps = {
    subTitle: string;
    content: string | undefined;
    type?: 'segment' | 'fuel';
};

export type headerProps = {
    isBackBtn: boolean;
    text: string;
};
```
