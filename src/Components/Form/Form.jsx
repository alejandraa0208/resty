import React, { useState } from 'react';
import './Form.scss';

function Form(props) {
    const [url, setUrl] = useState('');
    const [method, setMethod] = useState('GET');
    const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleApiCall({ url, method });
    }

    return (
        <div className="form-container">
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <div className="methods">
                {methods.map(m => (
                    <button 
                        key={m} 
                        className={m === method ? 'active' : ''} 
                        onClick={(e) => {
                            e.preventDefault();
                            setMethod(m);
                        }}
                        title={`Select ${m} method`}
                    >
                        {m}
                    </button>
                ))}
            </div>

            <button onClick={handleSubmit}>
                Go!
            </button>
        </div>
    );
}

export default Form;


