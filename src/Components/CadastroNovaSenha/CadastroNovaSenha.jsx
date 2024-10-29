import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CadastroNovaSenhaForm from './CadastroNovaSenhaForm';
import styles from './CadastroNovaSenha.module.css';


const CadastroNovaSenha = () => {
  return (
    <section className={styles.cadastronovasenha}>
      <div className='mt-5'>
        <CadastroNovaSenhaForm/>
      </div>
    </section>
  );
};

export default CadastroNovaSenha;