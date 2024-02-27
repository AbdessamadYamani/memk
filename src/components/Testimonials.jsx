import { Testimonial } from './Testimonial';
import React from 'react';
export const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Justine',
      role: 'PROMO ZEUS',
      text: 'Dans notre promo, on vient tous d’horizons professionnels complètement différents, c’est super enrichissant. On progresse tous ensemble, il y a énormément d’entraide aussi bien technique que morale. Et puis, travailler autant ensemble comme on le fait, je trouve que ça nous prépare bien à la réalité du terrain.',
      imagePath: '/path/to/justine.png',
    },
    {
      name: 'Sara',
      role: 'PROMO ZEUS',
      text: 'Dans notre promo, on vient tous d’horizons professionnels complètement différents, c’est super enrichissant...',
      imagePath: '/path/to/sara.png',
    },
    {
      name: 'Ahmad',
      role: 'PROMO ZEUS',
      text: 'Dans notre promo, on vient tous d’horizons professionnels complètement différents, c’est super enrichissant...',
      imagePath: '/path/to/ahmad.png',
    },
    {
      name: 'Yassine',
      role: 'PROMO ZEUS',
      text: 'Dans notre promo, on vient tous d’horizons professionnels complètement différents, c’est super enrichissant...',
      imagePath: '/path/to/yassine.png',
    },
    // Add more testimonials if needed
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {testimonialsData.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
};