import React from 'react';
import styles from './Input4.module.css';

const Input4 = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper2}>
        <label htmlFor={name} className={styles.label2}>
        {label}
        </label>
        <input
            id={name}
            name={name}
            className={styles.input4}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
      />
        
    </div>
  );
};

export default Input4