import React, { useState } from 'react';
import './Form.scss';

function Form(props) {
    const [url, setUrl] = useState('');
    const [method, setMethod] = useState('GET');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleApiCall({url, method, body});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>URL: </span>
                <input name='url' type='text' value={url} onChange={e => setUrl(e.target.value)} />
            </label>
            <div className="methods">
                {['GET', 'POST', 'PUT', 'DELETE'].map(m => (
                    <span key={m} className={m === method ? 'active' : ''} onClick={() => setMethod(m)}>{m}</span>
                ))}
            </div>
            {(method === 'POST' || method === 'PUT') && (
                <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Enter JSON body"></textarea>
            )}
            <button type="submit">GO!</button>
        </form>
    );
}

export default Form;

