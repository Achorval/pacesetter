import * as types from '../constants/SystemConstants';
import axios from '../../core/helpers/Axios';
// import axios from 'axios';

//= ====================================
//  CATEGORY ACTIONS
//--------------------------------------
export const fetchProducts = () => dispatch => {
    axios.get(`/admin/products`).then(response => {
        dispatch({
            type: types.PRODUCTS,
            data: response.data.data
        });
    });
};
export const createProduct = (payload) => {
    return axios.post(`/admin/products/create`, payload);
};
export const editProduct = id => dispatch => {
    axios.get(`/admin/products/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_PRODUCT,
            data: response.data.data
        });
    });
};
export const updateProduct = (payload) => {
    const { 
        id,
    } = payload;

    return axios.put(`/admin/products/update/`+id, payload);
};
export const deleteProduct = (id) => {
    return axios.delete(`/admin/products/delete/`+id);
};

//= ====================================
//  SERVICES ACTIONS
//--------------------------------------
export const fetchServices = () => dispatch => {
    axios.get(`/admin/services`).then(response => {
        dispatch({
            type: types.SERVICES,
            data: response.data.data
        });
    });
};
export const createService = (payload) => {
    return axios.post(`/admin/services/create`, payload);
}
export const editService = id => dispatch => {
    axios.get(`/admin/services/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_SERVICE,
            data: response.data.data
        });
    });
};
export const updateService = (payload) => {
    const { 
        id, 
        productId,
        name,
        status
    } = payload;

    return axios.put(`/admin/services/update/`+id, { productId, name, status });
};
export const deleteService = (id) => {
    return axios.delete(`/admin/services/delete/`+id);
};

//= ====================================
//  NETWORK ACTIONS
//--------------------------------------
export const fetchNetworks = () => dispatch => {
    axios.get(`/admin/networks`).then(response => {
        dispatch({
            type: types.NETWORKS,
            data: response.data.data
        });
    });
};
export const createNetwork = (payload) => {
    return axios.post(`/admin/networks/create`, payload);
};
export const editNetwork = id => dispatch => {
    axios.get(`/admin/networks/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_NETWORK,
            data: response.data.data
        });
    });
};
export const updateNetwork = (payload) => {
    const {
        id,
    } = payload;
    return axios.put(`/admin/networks/update/`+id, payload);
};
export const deleteNetwork = (id) => {
    return axios.delete(`/admin/networks/delete/`+id);
};

//= ====================================
//  PREFIX ACTIONS
//--------------------------------------
export const fetchPrefixes = () => dispatch => {
    axios.get(`/admin/prefixes`).then(response => {
        dispatch({
            type: types.PREFIXES,
            data: response.data.data
        });
    });
};
export const createPrefix = (payload) => {
    return axios.post(`/admin/prefixes/create`, payload);
}
export const editPrefix = id => dispatch => {
    axios.get(`/admin/prefixes/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_PREFIX,
            data: response.data.data
        });
    });
};
export const updatePrefix = (payload) => {
    const {
        id,
        networkId,
        name,
        status
    } = payload;

    return axios.put(`/admin/prefixes/update/`+id, { networkId, name, status });
};
export const deletePrefix = (id) => {
    return axios.delete(`/admin/prefixes/delete/`+id);
};

//= ====================================
//  BILLERS ACTIONS
//--------------------------------------
export const fetchBillers = () => dispatch => {
    axios.get(`/admin/billers`).then(response => {
        dispatch({
            type: types.BILLERS,
            data: response.data.data
        });
    });
};
export const createBiller = (payload) => {
    return axios.post(`/admin/billers/create`, payload);
}
export const editBiller = id => dispatch => {
    axios.get(`/admin/billers/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_BILLER,
            data: response.data.data
        });
    });
};
export const updateBiller = (payload) => {
    const { 
        id,
        name,
        fee,
        image,
        status
    } = payload;
    
    return axios.put(`/admin/billers/update/`+id, {
        name: name,
        fee: fee,
        image: image,
        status: status 
    });
};
export const deleteBiller = (id) => {
    return axios.delete(`/admin/billers/delete/`+id);
};


//= ====================================
//  DOCUMENTS ACTIONS
//--------------------------------------
export const fetchDocuments = () => dispatch => {
    axios.get(`/admin/documents`).then(response => {
        dispatch({
            type: types.DOCUMENTS,
            data: response.data.data
        });
    });
};
export const createDocument = (payload) => {
    return axios.post(`/admin/documents/create`, payload);
}
export const editDocument = id => dispatch => {
    axios.get(`/admin/documents/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_DOCUMENT,
            data: response.data.data
        });
    });
};
export const updateDocument = (payload) => {
    const {
        id,
        name,
        status
    } = payload;

    return axios.put(`/admin/documents/update/`+id, { name, status });
};
export const deleteDocument = (id) => {
    return axios.delete(`/admin/documents/delete/`+id);
};

//= ====================================
//  GIFTCARD ACTIONS
//--------------------------------------
export const fetchGiftcards = () => dispatch => {
    axios.get(`/admin/giftcards`).then(response => {
        dispatch({
            type: types.GIFTCARDS,
            data: response.data.data
        });
    });
};
export const createGiftcard = (payload) => {
    return axios.post(`/admin/giftcards/create`, payload);
}
export const editGiftcard = id => dispatch => {
    axios.get(`/admin/giftcards/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_GIFTCARD,
            data: response.data.data
        });
    });
};
export const updateGiftcard = (payload) => {
    const {
        id,
        name,
        image,
        status
    } = payload;

    return axios.put(`/admin/giftcards/update/`+id, { name, image, status });
};
export const deleteGiftcard = (id) => {
    return axios.delete(`/admin/giftcards/delete/`+id);
};
   
export const fetchGiftcardTypes = () => dispatch => {
    axios.get(`/admin/giftcardTypes`).then(response => {
        dispatch({
            type: types.GIFTCARD_TYPES,
            data: response.data.data
        });
    });
};
export const createGiftcardType = (payload) => {
    return axios.post(`/admin/giftcardTypes/create`, payload);
};
export const editGiftcardType = id => dispatch => {
    axios.get(`/admin/giftcardTypes/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_GIFTCARD_TYPE,
            data: response.data.data
        });
    });
};
export const updateGiftcardType = (payload) => {
    const {
        id,
        name,
        status
    } = payload;

    return axios.put(`/admin/giftcardTypes/update/`+id, { name, status });
};
export const deleteGiftcardType = (id) => {
    return axios.delete(`/admin/giftcardTypes/delete/`+id);
};


export const fetchGiftcardValues = () => dispatch => {
    axios.get(`/admin/giftcardValues`).then(response => {
        dispatch({
            type: types.GIFTCARD_VALUES,
            data: response.data.data
        });
    });
};
export const createGiftcardValue = (payload) => {
    return axios.post(`/admin/giftcardValues/create`, payload);
};
export const editGiftcardValue = id => dispatch => {
    axios.get(`/admin/giftcardValues/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_GIFTCARD_VALUE,
            data: response.data.data
        });
    });
};
export const updateGiftcardValue = (payload) => {
    const {
        id,
        amount,
        status
    } = payload;

    return axios.put(`/admin/giftcardValues/update/`+id, { amount, status });
};
export const deleteGiftcardValue = (id) => {
    return axios.delete(`/admin/giftcardValues/delete/`+id);
};


export const fetchGiftcardRates = () => dispatch => {
    axios.get(`/admin/giftcard/rates`).then(response => {
        dispatch({
            type: types.GIFTCARD_RATES,
            data: response.data.data
        });
    });
};
export const createGiftcardRate = (payload) => {
    return axios.post(`/admin/giftcard/rates/create`, payload);
};
export const editGiftcardRate = id => dispatch => {
    axios.get(`/admin/giftcard/rates/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_GIFTCARD_RATE,
            data: response.data.data
        });
    });
};
export const updateGiftcardRate = (payload) => {
    const {
        id,
        giftcardId, 
        countryId,
        giftcardTypeId,
        giftcardValueId,
        serviceId,
        rate,
        status
    } = payload;

    return axios.put(`/admin/giftcard/rates/update/`+id, { 
        giftcardId, 
        countryId,
        giftcardTypeId,
        giftcardValueId,
        serviceId,
        rate, 
        status 
    });
};
export const deleteGiftcardRate = (id) => {
    return axios.delete(`/admin/giftcard/rates/delete/`+id);
};


//= ====================================
//  CURRENCIES ACTIONS
//--------------------------------------
export const fetchCurrencies = () => dispatch => {
    axios.get(`/admin/currencies`).then(response => {
        dispatch({
            type: types.CURRENCIES,
            data: response.data.data
        });
    });
};
export const createCurrency = (payload) => {
    return axios.post(`/admin/currencies/create`, payload);
};
export const editCurrency = id => dispatch => {
    axios.get(`/admin/currencies/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_CURRENCY,
            data: response.data.data
        });
    });
};
export const updateCurrency = (payload) => {
    const {
        id,
        name, 
        iso,
        image,
        countryId,
        status
    } = payload;

    return axios.put(`/admin/currencies/update/`+id, { 
        id,
        name, 
        iso,
        image,
        countryId,
        status
    });
};
export const deleteCurrency = (id) => {
    return axios.delete(`/admin/currencies/delete/`+id);
};

//= ====================================
//  COUNTRIES ACTIONS
//--------------------------------------
export const fetchCountries = () => dispatch => {
    axios.get(`/admin/countries`).then(response => {
        dispatch({
            type: types.COUNTRIES,
            data: response.data.data
        });
    });
};
export const createCountry = (payload) => {
    return axios.post(`/admin/countries/create`, payload);
};
export const editCountry = id => dispatch => {
    axios.get(`/admin/countries/edit/`+id).then(response => {
        dispatch({
            type: types.EDIT_COUNTRY,
            data: response.data.data
        });
    });
};
export const updateCountry = (payload) => {
    const {
        id,
        name,
        image,
        status
    } = payload;

    return axios.put(`/admin/countries/update/`+id, { name, image, status });
};
export const deleteCountry = (id) => {
    return axios.delete(`/admin/countries/delete/`+id);
};