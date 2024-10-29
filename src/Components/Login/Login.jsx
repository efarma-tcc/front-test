import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm'; 
import styles from './Login.module.css';

const Login = () => {
  return (
    <section className={styles.login}>
      <div>
        <Routes className={styles.form}>
          <Route path="/" element={<LoginForm />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
