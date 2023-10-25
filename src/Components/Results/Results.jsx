import React from 'react';
import ReactJson from 'react-json-view';
import './Results.scss';

function Results({ loading, data }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      {data?.headers && (
        <>
          <h3>Headers:</h3>
          <ReactJson src={data.headers} name="headers" collapsed={true} />
        </>
      )}
      {data?.results && (
        <>
          <h3>Response:</h3>
          <ReactJson src={data.results} />
        </>
      )}
    </section>
  );
}

export default Results;

