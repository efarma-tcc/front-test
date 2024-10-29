import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CadastroFuncionarioForm from './CadastroFuncionarioForm';
import styles from './CadastroFuncionario.module.css';


const CadastroFuncionario = () => {
  return (
    <section className={styles.cadastrofuncionario}>
      <div className='mt-5'>
        <CadastroFuncionarioForm />
      </div>
    </section>
  );
};

export default CadastroFuncionario;