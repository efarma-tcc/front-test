import React from 'react'
import { Route, Routes } from 'react-router-dom';
import styles from './CadastroRemedio.module.css';
import CadastroRemedioForm from './CadastroRemedioForm';

const CadastroRemedio = () => {
  return (
    <selection className={styles.cadastroremedio}>
        <div>
            <Routes className={styles.formRemedio}>
                <Route path="/" element={<CadastroRemedioForm />}></Route>
            </Routes>
        </div>
    </selection>
  );
};

export default CadastroRemedio