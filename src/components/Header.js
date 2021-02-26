import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <h1>Lambda Eats</h1>
      <div className='header links'>
        <a href="/"><button>Home</button></a>
        <a href="/pizza"><button>Order</button></a>
      </div>
    </div>
  )
}