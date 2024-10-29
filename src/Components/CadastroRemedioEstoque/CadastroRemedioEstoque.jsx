import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CadastroRemedioEstoqueForm from './CadastroRemedioEstoqueForm';
import styles from './CadastroRemedioEstoque.module.css';

const CadastroRemedioEstoque = () => {
  return (
    <selection className={styles.cadastroremedioest}>
        <div>
            <Routes className={styles.formcadastroestoque}>
                <Route path="/" element={<CadastroRemedioEstoqueForm />}></Route>
            </Routes>
        </div>
    </selection>

  );
};

export default CadastroRemedioEstoque