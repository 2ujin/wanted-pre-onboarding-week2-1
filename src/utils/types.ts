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

