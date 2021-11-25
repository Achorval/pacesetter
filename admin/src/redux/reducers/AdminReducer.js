import * as types from '../constants/AdminConstants';

export const initialAuthState = {
    token: undefined,
    admin: {},
    dashboard: {},
    customers: [],
    customer: {},
    withdraws: [],
    status: '',
    roles: [],
    role: {},
    type: [],
    wallets: [],
    wallet: {},
    gateways: [],  
    gateway: {},
    transactions: [],
    userActionTypes: [],
    adminActionTypes: [],
    userFilter: [],
    adminFilter: []
};

export default function AuthReducer(state = initialAuthState, action = {}) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
        return {
            ...state,
            token: action.data || undefined
        };

    case types.FULFILL_TOKEN:  
        return {
            ...state,
            token: action.data
        };  

    case types.FULFILL_ADMIN: 
        return {
            ...state,
            admin: action.data
        };  

    case types.LOGOUT_REQUEST:
        return {
            ...state,
            token: undefined,
            admin: undefined,
        }; 
    
    case types.FETCH_ADMIN_DATA:
        return {
            ...state,
            admin: action.data || undefined
        };

    case types.DASHBOARD:
        return {
            ...state,
            dashboard: action.data,
        }; 

    case types.ROLES:
        return {
            ...state,
            roles: action.data,
        };
     
    case types.EDIT_ROLE:
        return {
            ...state,
            role: action.data
        };  
        
    case types.CUSTOMERS:
        return {
            ...state,
            customers: action.data,
        }; 
    case types.CUSTOMER_PROFILE:
        return {
            ...state,
            customer: action.data,
        }; 
        
    case types.WITHDRAW:
        return {
            ...state,
            withdraws: action.data,
        };
    
    case types.PAYMENT_GATEWAY:
        return {
            ...state,
            gateways: action.data,
        };
    case types.EDIT_PAYMENT_GATEWAY:
        return {
            ...state,
            gateway: action.data
        };
        
    case types.WALLETS:
        return {
            ...state,
            wallets: action.data,
        };
    case types.EDIT_WALLET:
        return {
            ...state,
            wallet: action.data
        };

    case types.TRANSACTIONS:
        return {
            ...state,
            transactions: action.data,
        }; 
        
    case types.USER_AUDIT_ACTION_TYPES:
        return {
            ...state,
            userActionTypes: action.data,
        };
    case types.FILTER_USER_AUDIT:
        return {
            ...state,
            userFilter: action.data
        };
    case types.ADMIN_AUDIT_ACTION_TYPES:
        return {
            ...state,
            adminActionTypes: action.data,
        };
    case types.FILTER_ADMIN_AUDIT:
        return {
            ...state,
            adminFilter: action.data
        };
    default:
        return state;
    }
}
