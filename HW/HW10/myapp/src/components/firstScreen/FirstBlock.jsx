import React from 'react';
import Header from './header/Header';
import FirstText from './firstScreenContent/FirstText';

export default function FirstBlock() {
  return (
    <div style={{ background: '#F4F9E2' }}>
      <div style={{ width: '1200px', margin: '0 auto' }}>
        <Header />
        <FirstText />
      </div>
    </div>
  );
}
