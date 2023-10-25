import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (requestParams.url) {
      callApi(requestParams);
    }
  }, [requestParams]);

  const callApi = async ({ url, method, body }) => {
    setLoading(true);
    try {
      const response = await axios({ url, method, data: body });
      setData({
        headers: response.headers,
        results: response.data,
      });
    } catch (error) {
      setData({
        headers: error.response?.headers,
        results: error.response?.data,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={setRequestParams} />
      <Results loading={loading} data={data} />
      <Footer />
    </>
  );
}

export default App;
