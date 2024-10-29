import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroNovaSenhaForm.module.css';
import Input2 from '../Forms/Input2';
import Input4 from '../Forms/Input4';
import Button1 from '../Forms/Button1';
import Input3 from '../Forms/Input3';
import InputTw from '../Forms/InputTw';
import Button2 from '../Forms/Button2';

const CadastroNovaSenhaForm = () => {
    const senhaAtual = useForm();
    const novaSenha = useForm();
    const confirmarSenha = useForm();
    
    return (
        <section className="animeLeft">
            <div className={styles.containerTitulo}>
                <h1 className="title2 text-3xl font-semibold m-2">Cadastro de nova senha</h1>
            </div>
          
            <form className={styles.formcontainerS}>
                <div className="flex gap-5"></div>
                <div className="flex gap-5">
                    <div className={styles.formrowR}>
                        <Input label="Senha Atual" type="password" name="senhaAtual" {...senhaAtual} />
                        <Input label="Nova Senha" type="password" name="novaSenha" {...novaSenha} />
                        <Input label="Confirmar Nova Senha" type="password" name="confirmarSenha" {...confirmarSenha} />
                    </div>
                </div>
                <Button2>Cadastrar Nova Senha</Button2>
            </form>
        </section>
    );
};

export default CadastroNovaSenhaForm;
