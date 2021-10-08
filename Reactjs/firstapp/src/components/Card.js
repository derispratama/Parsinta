import React from 'react';

function Card(props) {
    console.log(props);
    return (
        <div style={{ border: '1px solid black' }}>
            <h1>{props.content.title}</h1>
            <p>{props.content.desc}</p>
        </div>
    );
}

export default Card;