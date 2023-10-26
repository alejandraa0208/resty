import React from 'react';

function History({ history, onClick }) {
  return (
    <div>
      <h3>History:</h3>
      {history.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {item.method} - {item.url}
        </div>
      ))}
    </div>
  );
}

export default History;
