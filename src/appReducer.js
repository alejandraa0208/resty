// appReducer.js

export const initialState = {
    requestParams: {
      url: null,
      method: 'GET',
      body: null,
    },
    currentData: {
      headers: null,
      results: null,
      url: null,
      method: null,
    },
    loading: false,
    history: [],
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload,
        };
  
      case 'SET_REQUEST_PARAMS':
        return {
          ...state,
          requestParams: action.payload,
        };
  
      case 'SET_DATA':
        return {
          ...state,
          currentData: {
            headers: action.payload.headers,
            results: action.payload.results,
            url: action.payload.url,
            method: action.payload.method,
          },
          history: [action.payload, ...state.history].slice(0, 10),
        };
  
      default:
        return state;
    }
  }
  