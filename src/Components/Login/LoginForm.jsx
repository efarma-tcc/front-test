import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();
  const navigate = useNavigate();

  function handleClick(){
    navigate('cadastro-funcionario');
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form}>
        <Input label="Matrícula" type="text" name="username" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button onClick={handleClick}>Entrar</Button>
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Esqueceu a Senha?</Link>
      <div className={styles.cadastro}>
        <p>Ainda não possui cadastro? Entre em contato com o RH</p>
      </div>
    </section>
  );
};

export default LoginForm;
