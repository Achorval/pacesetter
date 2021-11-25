import * as types from '../constants/UserConstants';
  
export const UserState = {
    token: undefined,
    user: {},
    bankAccounts: [],
    bankAccount: {},
    banks: [], 
    referrals: {},
    preferences: {},
    messages: [],
    dashboard: {},
    networks: [],
    network: {},
    databundles: [],
    blocking: false,
    cables: [],
    plans: [],
    customer: {},
    discos: [],
    sellGiftcards: [],
    sellGiftcard: {},
    buyGiftcards: [],
    buyGiftcard: {},
    transactions: [],
    balance: {},
    wallets: [],
    message: '',
    paymentMethods: [],
    services: [],
    types: []
};

export default function UserReducer(state = UserState, action = {}) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                token: action.data || undefined
            };
            
        case types.LOGOUT_REQUEST:
            return {
                ...state,
                token: undefined,
                user: undefined
            };

        case types.AUTH_TOKEN:
            return {
                ...state,
                token: action.data || undefined
            };

        case types.FETCH_USER_DATA:
            return {
                ...state,
                user: action.data || {}
            };

        case types.FETCH_SERVICES:
            return {
                ...state,
                services: action.data
            };

        case types.FETCH_STATUS_TYPES:
            return {
                ...state,
                types: action.data
            };

        case types.TOGGLE_BALANCE:
            return {
                ...state,
                user: action.data
            };

        case types.VERIFY_NETWORK:
            return {
                ...state,
                network: action.data,
                blocking: false,
            };

        case types.FETCH_NETWORKS:
            return {
                ...state,
                networks: action.data,
            };

        case types.DATABUNDLE_NETWORK_PROVIDERS:
            return {
                ...state,
                networks: action.data,
            };

        case types.DATABUNDLES:
            return {
                ...state,
                databundles: action.data,
            };

        case types.DECODER_BRANDS:
            return {
                ...state,
                cables: action.data,
            };

        case types.CABLE_PACKAGES:
            return {
                ...state,
                plans: action.data,
            };

        case types.DISCOS:
            return {
                ...state,
                discos: action.data,
            }; 

        case types.SELL_GIFTCARDS:
            return {
                ...state,
                sellGiftcards: action.data
            };
        case types.SELL_GIFTCARD:
            return {
                ...state,
                sellGiftcard: action.data
            }

        case types.BUY_GIFTCARDS:
            return {
                ...state,
                buyGiftcards: action.data
            };
        case types.BUY_GIFTCARD:
            return {
                ...state,
                buyGiftcard: action.data
            }

        case types.SET_DEFAULT_WALLET:
            return {
                ...state,
                wallets: action.data
            };

        case types.WALLETS:
            return {
                ...state,
                wallets: action.data
            };

        case types.TRANSACTIONS:
            return {
                ...state,
                transactions: action.data
            };

        case types.INVOICE_REQUEST:
            return {
                ...state,
            };

        case types.PAYMENT_METHODS:
                return {
                    ...state,
                    paymentMethods: action.data
                };

        case types.VERIFY_PAYMENT:
                return {
                    ...state,
                };
        case types.DASHBOARD:
            return {
                ...state,
                dashboard: action.data
            }
        
        case types.BANK_ACCOUNTS:
            return {
                ...state,
                bankAccounts: action.data,
            };

        case types.VERIFY_ACCOUNT_NUMBER:
            return {
                ...state,
            };

        case types.CREATE_BANK_ACCOUNT:
            return {
                ...state,
                bankAccounts: [...state.bankAccounts, action.data]
            };

        case types.EDIT_BANK_ACCOUNT:
            return {
                ...state,
                bankAccount: action.data
            };

        case types.UPDATE_BANK_ACCOUNT:
            return { 
                ...state, 
                bankAccounts: state.bankAccounts.filter(item => item.id != action.id), 
            };

        case types.WITHDRAW_FUNDS:
            return {
                ...state,
            };

        case types.LIST_BANKS:
            return {
                ...state,
                banks: action.data,
            };

        case types.REFERRALS:
            return {
                ...state,
                referrals: action.data
            };

        case types.PREFERENCES:
            return {
                ...state,
                preferences: action.data
            };
        
        case types.SET_PREFERENCES:
            console.log(action.data);
            return {
                ...state,
                preferences: action.data
            };
        
        case types.MESSAGES:
            return {
                ...state,
                messages: action.data
            };

        case types.DELETE_ALL_MESSAGES:
            return {
                ...state,
                messages: []
            };      
        default:
        return state;
    }
}
    





