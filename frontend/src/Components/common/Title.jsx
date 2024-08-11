// src/Components/common/Title.jsx
import React from 'react';

const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
