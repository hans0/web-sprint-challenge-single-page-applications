import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <h1>Lambda Eats</h1>
      <div className='header links'>
        <button>Home</button>
        <button>Help</button>
      </div>
    </div>
  )
}