import React from 'react';
import styles from './Button1.module.css';

const Button1 = ({ children, ...props }) => {
  return (
    <div className={styles.containerButton}>
        <button {...props} className={styles.button1}>
        {children}
        </button>
    </div>
  );
};

export default Button1;
