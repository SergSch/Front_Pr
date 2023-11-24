import React from 'react';
import './FirstText.css';

export default function FirstText() {
  return (
    <div className="first_box">
      <div className="block_l">
        <h1 className="first_title">Веломастерская “Велозар”</h1>
        <p className="first_text">
          Мы, мастера веломастерской «Велозар», как раз те самые счастливые
          люди, которые смогли превратить свое увлечение и хобби в профессию. Мы
          сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам
          только радость и удовольствие от езды.
        </p>
      </div>
      <div className="block_r">
        <img src="assets/din 1.png" alt="dinosaur" />
      </div>
    </div>
  );
}
