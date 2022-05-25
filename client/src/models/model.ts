export interface ResponseItems{
    author: {name: string, lastname: string}
    filters: any[];
    items: Item[];
}
export interface Item{
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: prices;
    sale_price: number;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments: Installments;
    address: Address;
    shipping: Shipping;
    seller_address: SellerAddress;
    attributes: Attribute[];
    original_price: number;
    category_id: string;
    official_store_id: any;
    domain_id: string;
    catalog_product_id: any;
    tags: string[];
    order_backend: number;
    use_thumbnail_id: boolean;
    offer_score: any;
    offer_share: any;
    match_score: any;
    winner_item_id: any;
    melicoin: any;
    discounts: any;
}

export interface Seller{
    id: number;
    permalink: string;
    registration_date: Date;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags: string[];
    seller_reputation: SellerReputation;
}

export interface SellerReputation {
    power_seller_status: any;
    level_id: any;
    metrics: Metrics;
    transactions: Transactions;
}

export interface Metrics{
    cancellations: {
        period: string,
        rate: number,
        value: number
    };
    claims: {
        period: string,
        rate: number,
        value: number
    };
    delayed_handling_time: {
        period: string,
        rate: number,
        value: number
    };
    sales: {
        period: string,
        completed: number
    };
}

export interface Transactions{
    canceled: number;
    period: string;
    total: number;
    ratings: {
        negative: number,
        neutral: number,
        positive: number
    };
    completed: number;
}

export interface Installments{
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}

export interface Address{
    state_id: string;
    state_name: string;
    city_id: any;
    city_name: string;
}

export interface Shipping{
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
    store_pick_up: boolean;
}

export interface SellerAddress{
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: {
        id: string,
        name: string
    };
    state: {
        id: string,
        name: string
    };
    city: {
        id: string,
        name: string
    };
    latitude: string;
    longitude: string;
}

export interface Attribute{
    values: AttributeValue[];
    attribute_group_name: string;
    source: number;
    id: string;
    value_name: string;
    value_struct: any;
    name: string;
    value_id: any;
    attribute_group_id: string;
}

export interface AttributeValue{
    id: any;
    name: string;
    struct: any;
    source: number;
}

export interface prices{
    id: string;
    prices: Price[];
    presentation: {
        display_currency: string
    };
    payment_method_prices: any[];
    reference_prices: any[];
    purchase_discounts: any[];
}

export interface Price{
    id: string;
    type: string;
    amount: number;
    regular_amount: number;
    currency_id: string;
    last_updated: Date;
    conditions: {
        context_restrictions: any[],
        start_time: any,
        end_time: any,
        eligible: boolean
    };
    exchange_rate_context: string;
    metadata: any;
}
