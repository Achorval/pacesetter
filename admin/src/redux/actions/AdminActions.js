import * as types from '../constants/AdminConstants';
import axios from '../../core/helpers/Axios';

//= ====================================
//  AUTHENTICATION ACTIONS
//--------------------------------------
export function login(username, password) {
  return axios.post(`/admin/login`, { username,  password });
}

export const fulfillToken = (token) => dispatch => {
  dispatch({
    type: types.FULFILL_TOKEN,
    data: token
  });
};

export function getAdminByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.get(`/admin`);
}

export const fulfillAdmin = (token) => dispatch => {
  dispatch({
    type: types.FULFILL_ADMIN,
    data: token
  });
};

export function logout() {
  return dispatch => {
    dispatch({
      type: types.LOGOUT_REQUEST
    });
  }
};

export const fetchAdminData = () => dispatch => {
  axios.get(`/admin`).then(response => {
      if (response.data.status === "success") {
          dispatch({
              type: types.FETCH_ADMIN_DATA,
              data: response.data.data
          });
      }
  });
};
//= ====================================
//  DASHBOARD ACTIONS
//--------------------------------------
export function fetchDashboard() {
  return dispatch => {
    axios.get(`/admin/dashboard`)
    .then((response) => { 
      if(response.data.status === 'success')  {
        dispatch({
          type: types.DASHBOARD,
          data: response.data.data
        });
      } 
    });
  }
}

//= ====================================
//  ROLES ACTIONS
//--------------------------------------
export const fetchRoles = () => dispatch => {
  axios.get(`/admin/roles`).then(response => {
      dispatch({
          type: types.ROLES,
          data: response.data.data
      });
  });
};
export const createRole = (payload) => {
  return axios.post(`/admin/roles/create`, payload);
};
export const editRole = id => dispatch => {
  axios.get(`/admin/roles/edit/`+id).then(response => {
      dispatch({
          type: types.EDIT_ROLE,
          data: response.data.data
      });
  });
};
export const updateRole = (payload) => {
  const { 
      id,
  } = payload;
  return axios.put(`/admin/roles/update/`+id, payload);
};
export const deleteRole = (id) => {
  return axios.delete(`/admin/roles/delete/`+id);
};

//= ====================================
//  CUSTOMERS ACTIONS
//--------------------------------------
export const fetchCustomers = () => dispatch => {
  axios.get(`/admin/customers`).then(response => {
      dispatch({
          type: types.CUSTOMERS,
          data: response.data.data
      });
  });
};

export function fundUserWallet(payload) {
  return axios.post(`/admin/customer/fundwallet`, payload);
};

export function customerProfile(id) {
  return dispatch => {
    axios.get(`/admin/customer/profile/`+id).then((response) => { 
      if(response.data.status === 'success')  {
        dispatch({
          type: types.CUSTOMER_PROFILE,
          data: response.data.data
        });
      } 
    });
  }
};


export const setUserStatus = (userId) => {
  return axios.get(`/admin/customer/status/`+userId);
};

export const withdraw = () => dispatch => {
  axios.get(`/admin/withdraw`).then(response => {
    if(response.data.status === 'success')  {
      dispatch({
        type: types.WITHDRAW,
        data: response.data.data
      });
    }
  });
};


//= ====================================
//  WALLET ACTIONS
//--------------------------------------
export const fetchWallets = () => dispatch => {
  axios.get(`/admin/wallets`).then(response => {
    dispatch({
      type: types.WALLETS,
      data: response.data.data
    });
  });
};
export const createWallet = (payload) => {
  return axios.post(`/admin/wallets/create`, payload);
};
export const editWallet = id => dispatch => {
  axios.get(`/admin/wallets/edit/`+id).then(response => {
    dispatch({
      type: types.EDIT_WALLET,
      data: response.data.data
    });
  });
};
export const updateWallet = (payload) => {
  const { 
    id
  } = payload;

  return axios.put(`/admin/wallets/update/`+id, payload);
};
export const deleteWallet = (id) => {
  return axios.delete(`/admin/wallets/delete/`+id);
};


//= ====================================
//  PAYMENT GATEWAYS ACTIONS
//--------------------------------------
export const fetchPaymentGateways = () => dispatch => {
  axios.get(`/admin/paymentgateways`).then(response => {
      dispatch({
          type: types.PAYMENT_GATEWAY,
          data: response.data.data
      });
  });
};
export const createPaymentGateway = (payload) => {
  return axios.post(`/admin/paymentgateways/create`, payload);
}   
export const editPaymentGateway = id => dispatch => {
  axios.get(`/admin/paymentgateways/edit/`+id).then(response => {
      dispatch({
          type: types.EDIT_PAYMENT_GATEWAY,
          data: response.data.data
      });
  });
}; 
export const updatePaymentGateway = (payload) => {
  const { 
      id,
      name, 
      label,
      email, 
      apiLink,
      appFee,
      publicKey, 
      secretKey,
      status
  } = payload;

  return axios.put(`/admin/paymentgateways/update/`+id, {
    name, 
    label,
    email, 
    apiLink,
    appFee,
    publicKey, 
    secretKey,
    status
  });
};
export const deletePaymentGateway = (id) => {
  return axios.delete(`/admin/paymentgateways/delete/`+id);
};
  
//= ====================================
//  TRANSACTIONS ACTIONS
//--------------------------------------
export function fetchTransactions() { 
  return dispatch => {
    axios.get(`/admin/transactions/all`).then((response) => { 
      if(response.data.status === 'success')  {
        dispatch({
          type: types.TRANSACTIONS,
          data: response.data.data
        });
      } 
    });
  }
}

export function fetchUserAuditTypes() { 
  return dispatch => {
    axios.get(`/admin/user/actions`).then((response) => { 
      if(response.data.status === 'success')  {
        dispatch({
          type: types.USER_AUDIT_ACTION_TYPES,
          data: response.data.data
        });
      } 
    });
  }
}
export function filterUserAuditLog(payload) { 
  return dispatch => {
    axios.post(`/admin/user/filter`, payload).then((response) => { 
      if(response.data.status === 'success')  {
        dispatch({
          type: types.FILTER_USER_AUDIT,
          data: response.data.data
        });
      } 
    });
  }
}
export function fetchAdminAuditTypes() { 
  return dispatch => {
    axios.get(`/admin/audit/actions`).then((response) => { 
      if(response.data.status === 'success')  {
        dispatch({
          type: types.ADMIN_AUDIT_ACTION_TYPES,
          data: response.data.data
        });
      } 
    });
  }
}
export function filterAdminAuditLog(payload) { 
  return dispatch => {
    axios.post(`/admin/audit/filter`, payload).then((response) => { 
      if(response.data.status === 'success')  {
        dispatch({
          type: types.FILTER_ADMIN_AUDIT,
          data: response.data.data
        });
      } 
    });
  }
}

  
  
  
  