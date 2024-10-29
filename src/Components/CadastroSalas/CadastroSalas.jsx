import React from 'react'
import { Route, Routes } from 'react-router-dom';
import styles from './CadastroSalas.module.css';
import CadastroSalasForm from './CadastroSalasForm';

const CadastroSalas = () => {
  return (
    <section className={styles.cadastrosala}>
        <div className='mt-5'>
            <CadastroSalasForm />

        </div>
    </section>
  );
};

export default CadastroSalas