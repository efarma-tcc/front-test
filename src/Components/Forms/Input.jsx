import React from 'react';
import styles from './Input.module.css';
import { twMerge } from 'tailwind-merge';

const Input = ({ label, type, name, value, onChange, error, onBlur,className }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={twMerge(styles.input,className)}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
