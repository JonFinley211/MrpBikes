import React from 'react';
import './SignUpButton.css';
import { Link } from 'react-router-dom';

export function SignUpButton() {
  return (
    <Link to='sign-up'>
      <button className='subtn'>Sign Up</button>
    </Link>
  );
}
