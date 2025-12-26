
export enum DRIVING_LICENSE_CATEGORIES {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
}

export enum Size {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export enum Types {
    ID_CARD = 'id_card',
    DRIVING_LICENSE = 'driving_license',
    AUTOTRANSPORT_CARD = 'autotransport_card',
    INTERNATIONAL_PASSPORT = 'international_passport',
}


export interface CitizenDocument {
    document: string;
    type: string;
    datebegin: string;
    dateend?: string;
    status: number;
}

export interface BASE_PERSONAL_INFO {
    name: string,
    surname: string,
    patronymic: string,
    photo: string,
    gender: "F" | "M",
    passport_number: string,
    pin: string,
    date_of_birth: string,
    place_of_birth: string,
    country_of_birth: string,
    date_of_issue: string,
    date_of_expiry: string,
}


export interface ID_CARD_PERSONAL_INFO extends BASE_PERSONAL_INFO {
    place_of_issue: string,
    citizenship: string,
    nationality: string,
    photo: string,
}

export interface MILITRY_ID_CARD_INFO extends BASE_PERSONAL_INFO {
    place_of_issue: string,
    nationality: string,
    photo: string,
    /**
    * 0 — Reserved
    * 1 — Active service
    */
    status: 0 | 1 // 0 reserved,
    id_number: string,
    militry_series: string,
    personal_number: string,
    main_civilian_specialty: string,
    martial_status: string,
    /**  
    * (Attitude towards military service)
    */
    atms: string
    militry_rank: string,
    hhom: string,
    
    /**  
    * Name Department of Defense Affairs
    */
    dda: string,
    registred_date: string,
    /**  
    * Head of the Department of Defense Affairs
    */
    head_of_dda: string
}


export interface DRIVING_LICENSE_CATEGORY {
    category: DRIVING_LICENSE_CATEGORIES,
    expiration_date: string,
    issue_date: string,
}

export interface DRIVING_LICENSE_PERSONAL_INFO extends BASE_PERSONAL_INFO {
    license_number: string,
    expiration_date: string,
    issue_date: string,
    categories: DRIVING_LICENSE_CATEGORY[],
}

export interface INTERNATIONAL_PASSPORT_PERSONAL_INFO extends BASE_PERSONAL_INFO {
    place_of_issue: string,
    citizenship: string,
    nationality: string,
    photo: string
}

export interface AUTOTRANSPORT_CARD_PERSONAL_INFO extends BASE_PERSONAL_INFO {
}


export type PersonalInfoMap = {
    [Types.ID_CARD]: ID_CARD_PERSONAL_INFO
    [Types.DRIVING_LICENSE]: DRIVING_LICENSE_PERSONAL_INFO
    [Types.AUTOTRANSPORT_CARD]: AUTOTRANSPORT_CARD_PERSONAL_INFO
    [Types.INTERNATIONAL_PASSPORT]: INTERNATIONAL_PASSPORT_PERSONAL_INFO
}

export type Options<T extends Types = Types> = {
    element_id: string
    size: Size
    type: T
    personal_info: PersonalInfoMap[T]
}

