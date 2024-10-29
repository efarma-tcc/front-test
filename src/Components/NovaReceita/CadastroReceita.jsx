import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CadastroReceitaForm from './CadastroReceitaForm';
import styles from './CadastroReceita.module.css';

const CadastroReceita = () => {
  return (
    <section className={styles.cadastroreceita}>
        <div className='mt-5'>
            <CadastroReceitaForm />
        </div>
    </section>
  )
}

export default CadastroReceita

