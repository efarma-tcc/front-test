import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroSalasForm.module.css';

const CadastroSalasForm = () => {
    const nomeSala = useForm();

  return (
    <section className="animeLeft">
        <div>
            <h1 className="title2 text-3xl font-semibold m-2 ">Cadastro de Salas</h1>
        </div>
        <form className={styles.formcontainerS}>
            <Input label="Nome ou Número da sala" type="text" name="nomeSala" {...nomeSala}/>
            <Button>Cadastrar Sala</Button>
        </form>
    </section>
  );
};

export default CadastroSalasForm