import React, { useState } from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroPacienteForm.module.css';
import InputTw from '../Forms/InputTw';
import Button1 from '../Forms/Button1';
import ValidaCPF from '../validaCPF';

const CadastroPacienteForm = () => {
    const nomePaciente = useForm();
    const cpfPaciente = useForm();
    const dataNascimentoPaciente = useForm();
    const telefonePaciente = useForm();
    const emailPaciente = useForm();
    const observacoes = useForm();
    const [cpfError, setCpfError] = useState('');

    const handleCPFChange = (event) => {    
        const value = event.target.value;
        cpfPaciente.onChange(event); 
        if (!ValidaCPF(value)) {
          setCpfError('CPF inválido');
        } else {
          setCpfError(''); 
        }
    };

  return (
    <section className="animeLeft">
        <div className={styles.containerTituloP}>
            <h1 className="title2 text-3xl font-semibold m-2">Cadastro de Pacientes</h1>
        </div>

        <form className={styles.formcontainerP}>
            <div className="flex gap-5 ">
                <div className='w-full'>
                    <InputTw label="Nome Completo do Paciente" type="text" name="nomePaciente" {...nomePaciente} className="w-full" />
                </div>
                <div>
                    <InputTw label="CPF" type="text" name="cpfPaciente" {...cpfPaciente} onChange={handleCPFChange} className="" />
                    {cpfError && <p style={{ color: 'red' }}>{cpfError}</p>}
                </div>
            </div>

            <div className='flex gap-5'>
                <div className='w-full'>
                    <InputTw label="E-mail" type="text" name="email" {...emailPaciente} className="w-full" />
                </div>
                <div>
                    <InputTw label="Data Nascimento" type="date" name="dataNascimentoPaciente" {...dataNascimentoPaciente} className="" />
                </div>
                <div>
                    <InputTw label="Telefone" type="text" name="telefonePaciente" {...telefonePaciente} className="" />
                </div>
            </div>
            <InputTw label="Observações" type="text" name="observacoes" {...observacoes} className="w-full" />
            <div className='flex justify-center'>
                <Button1>Cadastrar Paciente</Button1>

            </div>
            
        </form>
    </section>
  );
};

export default CadastroPacienteForm;
