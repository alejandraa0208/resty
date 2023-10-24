import React from 'react';
import './Results.scss';

function Results({loading, data}) {
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
        </section>
    );
}

export default Results;
