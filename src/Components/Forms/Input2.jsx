import React from 'react'
import styles from './Input2.module.css';

const Input2 = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper1}>
        <label htmlFor={name} className={styles.label1}>
        {label}
        </label>
        <input
            id={name}
            name={name}
            className={styles.input2}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
      />
      {error && <p className={styles.error1}>{error}</p>}
        
    </div>
  );
};

export default Input2

