import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.css';

const Button = ({ label, onClick, to, external, className }) => {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`button ${className}`}
      >
        {label}
      </a>
    );
  }
  return (
    <Link to={to} className={`button ${className}`} onClick={onClick}>
      {label}
    </Link>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,  
  external: PropTypes.bool,       
  className: PropTypes.string       
};


export default Button;
