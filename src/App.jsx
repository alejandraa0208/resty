import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results';
import History from './Components/History/History';
import { reducer, initialState } from './appReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.requestParams.url) {
      callApi(state.requestParams);
    }
  }, [state.requestParams]);

  const callApi = async ({ url, method, body }) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await axios({ url, method, data: body });
      dispatch({ type: 'SET_DATA', payload: {
        headers: response.headers,
        results: response.data,
        url,
        method,
      }});
    } catch (error) {
      dispatch({ type: 'SET_DATA', payload: {
        headers: error.response?.headers,
        results: error.response?.data,
        url,
        method,
      }});
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <>
      <Header />
      <History history={state.history} onClick={(item) => dispatch({ type: 'SET_DATA', payload: item })} />
      <Form handleApiCall={(params) => dispatch({ type: 'SET_REQUEST_PARAMS', payload: params })} />
      <Results loading={state.loading} data={state.currentData} />
      <Footer />
    </>
  );
}

export default App;

