import React from 'react';

const Button = ({ label, style }) => {
  const defaultStyle = {
    padding: '6px 10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const buttonStyle = { ...defaultStyle, ...style };

  return (
    <button style={buttonStyle}>
      {label}
    </button>
  );
};

export default Button;
