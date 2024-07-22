import React from 'react';
import { Link } from 'react-router-dom';
import './Tool.css';

const Tool = ({ name, icon, path }) => {
  return (
    <Link to={path} className="tool">
      <img src={icon} alt={`${name} icon`} className="tool-icon" />
      <p class="text-center ">{name}</p>
    </Link>
  );
};

export default Tool;
