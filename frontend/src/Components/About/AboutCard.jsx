import React from 'react';
import Head2 from '../Head2';
import './about.css';
import AWrapper from './AWrapper';

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='https://images.unsplash.com/photo-1518085250887-49a4b61df9a3' alt='' />
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
