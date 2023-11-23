import React from 'react';
import Link from './Link';
import MyButton from './MyButton';
import './Header.css';

export default function Header() {
  return (
    <div className="head">
      <div
        style={{
          width: '120px',
          height: '120px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src="./../../../img/logo.png" alt="logo" />
      </div>
      <Link to="/about" text="О нас" />
      <Link to="/services" text="Услуги" />
      <Link to="/rent" text="Аренда" />

      <MyButton />
    </div>
  );
}
