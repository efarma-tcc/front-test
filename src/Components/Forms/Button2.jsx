import React from 'react';
import styles from './Button2.module.css';

const Button2 = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button2}>
      {children}
    </button>
  );
};

export default Button2;
