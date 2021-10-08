import React from 'react';
import Card from './components/Card';

function Lima() {
    return (
        <div>
            <Card content={{
                title: 'card1',
                desc: 'desc1'
            }} />
            <Card content={{
                title: 'card2',
                desc: 'desc2'
            }} />
            <Card content={{
                title: 'card3',
                desc: 'desc4'
            }} />
        </div>
    );
}

export default Lima;