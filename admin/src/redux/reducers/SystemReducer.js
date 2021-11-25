import * as types from '../constants/SystemConstants'; 

export const PrefixState = {
    products: [],
    product: {},
    prefixes: [],
    prefix: {},
    billers: [],
    biller: {},
    services: [],
    service: {},
    networks: [],
    network: {},
    documents: [],
    document: {},
    giftcards: [],
    giftcard: {},
    giftcardTypes: [],
    giftcardType: {},
    giftcardValues: [],
    giftcardValue: {},
    giftcardRates: [],
    giftcardRate: {},
    countries: [],
    country: {},
    currencies: [],
    currency: {}
};

export default function PrefixReducer(state = PrefixState, action = {}) {
    switch (action.type) {    
        case types.PRODUCTS:
            return {
                ...state,
                products: action.data,
            }; 
        
        case types.EDIT_PRODUCT:
            return {
                ...state,
                product: action.data
            };

        case types.PREFIXES:
            return {
                ...state,
                prefixes: action.data,
            };
        case types.EDIT_PREFIX:
            return {
                ...state,
                prefix: action.data
            };
        
        case types.BILLERS:
            return {
                ...state,
                billers: action.data,
            };    
        case types.EDIT_BILLER:
            return {
                ...state,
                biller: action.data
            };
        
        case types.SERVICES:
            return {
                ...state,
                services: action.data,
            };
        case types.EDIT_SERVICE:
            return {
                ...state,
                service: action.data
            }; 

        case types.NETWORKS:
            return {
                ...state,
                networks: action.data
            };    
        case types.EDIT_NETWORK:
            return {
                ...state,
                network: action.data
            };

        case types.DOCUMENTS:
            return {
                ...state,
                documents: action.data,
            };
        case types.EDIT_DOCUMENT:
            return {
                ...state,
                document: action.data,
            }; 
        
        case types.GIFTCARDS:
            return {
                ...state,
                giftcards: action.data,
            };
        case types.EDIT_GIFTCARD:
            return {
                ...state,
                loading: false,
                giftcard: action.data,
            };

        case types.GIFTCARD_TYPES:
            return {
                ...state,
                giftcardTypes: action.data,
            };
        case types.EDIT_GIFTCARD_TYPE:
            return {
                ...state,
                giftcardType: action.data,
            };

        case types.GIFTCARD_VALUES:
            return {
                ...state,
                giftcardValues: action.data,
            };
        case types.EDIT_GIFTCARD_VALUE:
            return {
                ...state,
                giftcardValue: action.data,
            };

        case types.GIFTCARD_RATES:
            return {
                ...state,
                giftcardRates: action.data,
            };
        case types.EDIT_GIFTCARD_RATE:
            return {
                ...state,
                giftcardRate: action.data,
            };

        case types.COUNTRIES:
            return {
                ...state,
                countries: action.data,
            };
        case types.EDIT_COUNTRY:
            return {
                ...state,
                country: action.data,
            };

        case types.CURRENCIES:
            return {
                ...state,
                currencies: action.data,
            };
        case types.EDIT_CURRENCY:
            return {
                ...state,
                currency: action.data,
            };
        default:
            return state;
    }
}

