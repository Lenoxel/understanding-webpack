import React from 'react';
import ReactDOM from 'react-dom';

const myName = 'Gabriel Lenon';

ReactDOM.render(
    <div>Nome: {myName}</div>,
    document.querySelector('#app')
);

console.log('Everything works fine!');