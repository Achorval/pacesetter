import * as types from '../constants/UserConstants';
import axios from '../../core/helpers/Axios';

//= ====================================
//  GIFTCARDS ACTIONS
//--------------------------------------
export function login(username, password) {
  return axios.post(`/login`, { username, password });
}

export function logout() {
  return dispatch => {
    dispatch({
      type: types.LOGOUT_REQUEST
    });
  }
};

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email) {
    // return axios.post(REQUEST_PASSWORD_URL, {email})
}

export const fulfillToken = (token) => dispatch => {
  dispatch({
    type: types.AUTH_TOKEN,
    data: token
  });
}

export function fetchUserByToken() {
    return axios.get(`/user`)
}

export const fulfillUser = (user) => dispatch => {
  dispatch({
    type: types.FETCH_USER_DATA,
    data: user
  });
}

export const register = (firstname, lastname, email, password, phone, referral) => {
  return axios.post(`/register`, {
    firstname,
    lastname,
    email,
    password,
    phone,
    referral
  })
};

export function passwordForget(payload, callback) {
  return dispatch => {
    axios.post(`/forgotpassword`, payload).then((response) => {
      if (response.data.status === "success") {
        dispatch({
            type: types.PASSWORD_FORGET_REQUEST
        });
        return callback(response.data);
      }
    });
  }
};

export function forgotPwdReset(payload, callback) {
  return dispatch => {
    axios.post(`/forgotpassword/reset`, payload).then((response) => {
      if (response.data.status === "success") {
        dispatch({
            type: types.PASSWORD_FORGET_COMPLETE
        });
        return callback(response.data);
      }
    });
  }
};

export function resendVerifyEmail(callback) {
  return dispatch => {
    axios.post(`/resend/email`).then((response) => {
      if (response.data.status === "success") {
        dispatch({
            type: types.RESEND_VERIFY_EMAIL
        });
        return callback(response.data);
      }
    });
  }
};

export function verifyEmail(token, callback) {
  return dispatch => {
    axios.get(`/verify/email/`+token).then((response) => {
      if (response.data.status === "success") {
        dispatch({
          type: types.VERIFY_EMAIL
        });
        return callback(response.data);
      }
    });
  }
};

export const toggleBalance = (payload, callback) => dispatch => {
  axios.post(`/toggle/balance`, payload).then(response => {
    dispatch({
      type: types.TOGGLE_BALANCE,
      data: response.data.data
    });
    return callback(response.data);
  });
};

//BILLS
//= ====================================
//  NETWORK ACTIONS
//--------------------------------------
export const verifyNetwork = (payload) => dispatch => {
  axios.post(`/verify/network`, { payload }).then(response => {
    dispatch({
      type: types.VERIFY_NETWORK,
      data: response.data
    });
  });
};

//= ====================================
//  AIRTIME ACTIONS
//--------------------------------------
export const fetchAirtimeNetworks = () => dispatch => {
  axios.get(`/airtime/networks`).then(response => {
    dispatch({
      type: types.FETCH_NETWORKS,
      data: response.data.data
    });
  });
};

export const buyAirtime = (payload) => {
  return axios.post(`/airtime/buy`, payload);
};
  
//= ====================================
//  DATABUNDLE ACTIONS
//--------------------------------------
export const fetchDatabundleNetworks = () => dispatch => {
  axios.get(`/databundle/networks`).then(response => {
    dispatch({
      type: types.DATABUNDLE_NETWORK_PROVIDERS,
      data: response.data.data
    });
  });
};
  
export const databundles = (id) => dispatch => {
  axios.get(`/databundles/`+id).then(response => {
    dispatch({
      type: types.DATABUNDLES,
      data: response.data.data
    });
  });
};
  
export function buyDatabundle(payload) {
  return axios.post(`/databundle/buy`, payload);
};
    
//= ====================================
//  CABLE TV ACTIONS
//--------------------------------------
export const fetchCables = () => dispatch => {
  axios.get(`/bill/cables`).then(response => {
    dispatch({
      type: types.DECODER_BRANDS,
      data: response.data.data
    });
  });
};

export function verifySmartCard(payload) {
  return axios.post(`/verify/smartcard`, payload);
};
  
export function fetchCablePlans(id, callback) {
  return dispatch => {
    dispatch({
        type: types.CABLE_PACKAGES
    });
    axios.get(`/cable/packages/`+id)
    .then((response) => {
        if (response.data.status === "success") {
            dispatch({
                type: types.CABLE_PACKAGES,
                data: response.data.data
            });
            return callback(response.data)
        }
    })
    .catch((error) => {
        dispatch({
            type: types.CABLE_PACKAGES,
            error: error.response
        });
    });
  }
};
  
export function buyCable(payload) {
  return axios.post(`/cable/buy`, payload);
};
    
//= ====================================
//  ELECTRICITY ACTIONS
//--------------------------------------
export const fetchDiscos = () => dispatch => {
  axios.get(`/bill/discos`).then(response => {
    dispatch({
      type: types.DISCOS,
      data: response.data.data
    });
  });
};
  
export function verifyMeterNumber(payload) {
  return axios.post(`/verify/meternumber`, payload);
};

export function buyElectricity(payload) {
  return axios.post(`/electricity/buy`, payload);
};
  
//= ====================================
//  GIFTCARDS ACTIONS
//--------------------------------------
export const fetchSellGiftcards = () => dispatch => {
  axios.get(`/giftcards/sell`).then(response => {
    dispatch({
      type: types.SELL_GIFTCARDS,
      data: response.data.data
    });
  });
};
export const fetchSellGiftcard = (id) => dispatch => {
  axios.get(`/giftcards/sell/`+id).then(response => {
    dispatch({
      type: types.SELL_GIFTCARD,
      data: response.data.data
    });
  });
};

export const fetchBuyGiftcards = () => dispatch => {
  axios.get(`/giftcards/buy`).then(response => {
    dispatch({
      type: types.BUY_GIFTCARDS,
      data: response.data.data
    });
  });
};
export const fetchBuyGiftcard = (id) => dispatch => {
  axios.get(`/giftcards/buy/`+id).then(response => {
    dispatch({
      type: types.BUY_GIFTCARD,
      data: response.data.data
    });
  });
};

//HISTORY
export const fetchWallets = () => dispatch => {
  axios.get(`/wallets`).then(response => {
    dispatch({
      type: types.WALLETS,
      data: response.data.data
    });
  });
};

export function setDefaultWallet(id) {
  return dispatch => {
    axios.post(`/wallets/default`, {id}).then((response) => {
      if (response.data.status === "success") {
        dispatch(fetchWallets());
      }
    });
  }
};

export const fetchTransactions = () => dispatch => {
  axios.get(`/transactions`).then(response => {
    dispatch({
      type: types.TRANSACTIONS,
      data: response.data.data
    });
  });
};
 

export function invoice() {
  return dispatch => {
    axios.get(`/transactions/invoice`).then((response) => {
      if (response.data.status === "success") {
        dispatch({
          type: types.INVOICE_REQUEST,
          data: response.data
        });
      }
    });
  }
};

export const fetchPaymentMethods = () => dispatch => {
  axios.get("/payment/methods").then(response => {
    dispatch({
      type: types.PAYMENT_METHODS,
      data: response.data.data
    });
  });
};
  
export function verifyPayment(payload, callback) {
  return dispatch => {
    axios.post(`/verify/payment`, payload).then((response) => {
      if (response.data.status === "success") {
        dispatch({
            type: types.VERIFY_PAYMENT
        });
        // dispatch(getUserData());
        return callback(response.data);
      }
    });
  }
};
    
//= ====================================
//  SETTINGS ACTIONS
//--------------------------------------
export const fetchDashboard = () => dispatch => {
  axios.get(`/dashboard`).then(response => {
      dispatch({
          type: types.DASHBOARD,
          data: response.data.data
      });
  });
};
  
export const updateProfile = (payload, callback) => dispatch => {
  axios.post(`/profile/update`, payload).then(response => {
    dispatch({
      type: types.UPDATE_PROFILE,
      data: response.data.data
    });
    return callback(response.data);
  });
};

export const listBank = () => dispatch => {
  axios.get(`/bank/list`).then(response => {
    dispatch({
      type: types.LIST_BANKS,
      data: response.data.data
    });
  });
};

export const fetchBankAccounts = () => dispatch => {
  axios.get(`/bank/accounts`).then(response => {
    dispatch({
      type: types.BANK_ACCOUNTS,
      data: response.data.data
    });
  });
};

export const verifyAccountNumber = (payload, callback) => dispatch => {
  axios.post(`/bank/account/verify`, payload).then(response => {
    dispatch({
      type: types.VERIFY_ACCOUNT_NUMBER,
      data: response.data.data
    });
    return callback(response.data);
  });
};

export const createBankAccount = (bankName, bankCode, accountNumber, accountName, accountType) => {
  return axios.post(`/bank/account/create`, {
    bankName, 
    bankCode, 
    accountNumber, 
    accountName, 
    accountType
  });
}

export function editBankAccount (id) {
  return dispatch => {
    axios.get(`/bank/account/edit/`+id).then((response) => {
      if (response.data.status === "success") {
        dispatch({
          type: types.EDIT_BANK_ACCOUNT,
          data: response.data.data
        });
      }
    });
  }
}

export function updateBankAccount (payload, callback) {
  return dispatch => {
    const {
      id,
      bankName,
      bankCode,
      accountNumber,
      accountName,
      accountType
    } = payload;
    axios.put(`/bank/account/update/`+id, {
      bankName,
      bankCode,
      accountNumber,
      accountName,
      accountType
    })
    .then((response) => {
      if (response.data.status === "success") {
        dispatch({
            type: types.UPDATE_BANK_ACCOUNT,
            data: response.data
        });
        dispatch(fetchBankAccounts());
        return callback(response.data);
      }
    })
  }
}

export function deleteBankAccount (id) {
  return axios.delete(`/bank/accounts/delete/`+id);
}

export const changePassword = (payload) => {
  return axios.post(`/settings/change-password`, payload)
}

export function withdrawFunds (payload, callback) {
  return dispatch => {
    axios.post(`/earnings/withdraw`, payload).then((response) => {
      if (response.data.status === "success") {
        dispatch({
          type: types.WITHDRAW_FUNDS
        });
        return callback(response.data)
      }
    });
  }
}

export function countReferrals () {
  return dispatch => {
    axios.get(`/referrals`).then((response) => {
      if (response.data.status === "success") {
        dispatch({
            type: types.REFERRALS,
            data: response.data.data
        });
      }
    });
  }
}

//= ====================================
//  PREFERENCE ACTIONS
//--------------------------------------
export const fetchPreferences = () => dispatch => {
  axios.get(`/preferences`).then(response => {
    dispatch({
      type: types.PREFERENCES,
      data: response.data.data.notify
    });
  });
};

export function setPreference (payload, callback) {
  return dispatch => {
    axios.post(`/preferences/set`, payload, callback)
    .then((response) => {
      dispatch({
        type: types.PREFERENCES,
        data: response.data.data.notify
      });
      return callback(response.data);
    });
  }
};

export const getMessages = () => dispatch => {
  axios.get(`/messages`).then(response => {
    dispatch({
      type: types.MESSAGES,
      data: response.data.data
    });
  });
};

export const deleteAllMessages = () => dispatch => {
  axios.get(`/messages/delete-all`).then(response => {
    dispatch({
      type: types.DELETE_ALL_MESSAGES,
      data: response.data.data
    });
  });
};

export const fetchDeveloperKeys = () => dispatch => {
  axios.get(`/developer/keys`).then(response => {
    dispatch({
      type: types.DEVELOPER_KEYS,
      data: response.data.data
    });
  });
};
  
export const fetchServices = () => dispatch => {
  axios.get(`/services`).then(response => {
    dispatch({
      type: types.FETCH_SERVICES,
      data: response.data.data
    });
  });
};

export const fetchStatusTypes = () => dispatch => {
  axios.get(`/status/types`).then(response => {
    dispatch({
      type: types.FETCH_STATUS_TYPES,
      data: response.data.data
    });
  });
};


//= ====================================
//  CRYPTOCURRENCY ACTIONS
//--------------------------------------
export function sellCrypto (payload, callback) {
  return axios.post(`/sell/crypto`, payload, callback);
};