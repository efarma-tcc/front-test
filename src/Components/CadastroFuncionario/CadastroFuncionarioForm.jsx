import React, { useState } from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroFuncionarioForm.module.css';
import Input2 from '../Forms/Input2';
import Input4 from '../Forms/Input4';
import Button1 from '../Forms/Button1';
import Input3 from '../Forms/Input3';
import InputTw from '../Forms/InputTw';
import ValidaCPF from '../validaCPF';

const CadastroFuncionarioForm = () => {
    const nomeFuncionario = useForm();
    const dataNascimento = useForm();
    const telefone = useForm();
    const email = useForm();
    const senhaGenerica = useForm();
    const crm = useForm();
    const [select, setSelect] = React.useState('');
    const [cpfError, setCpfError] = useState('');
    const emailFiscal = useForm();
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleCPFChange = (event) => {
      const value = event.target.value;
      cpf.onChange(event); 
      if (!ValidaCPF(value)) {
        setCpfError('CPF inválido');
      } else {
        setCpfError(''); 
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      /*
      try {
        const newEmployee = {
          nome: nomeFuncionario.value,
          cpf,
          email: email.value,
          dataNascimento: dataNascimento.value,
          telefone: telefone.value,
          cargo: select,
          crm: crm.value,
          emailFiscal: emailFiscal.value,
          senhaGenerica: senhaGenerica.value
        };
        await createEmployee(newEmployee);
            setSuccess("Funcionário cadastrado com sucesso!");
            nomeFuncionario.setValue('');
            setCpf('');
            email.setValue('');
            dataNascimento.setValue('');
            telefone.setValue('');
            setSelect('');
            crm.setValue('');
            emailFiscal.setValue('');
            senhaGenerica.setValue('');
      }catch (err) {
        setError("Erro ao cadastrar funcionário.");
      }
      */

    };
    
  return (
    <section className="animeLeft">
        <div className={styles.containerTitulo}>
            <h1 className="title2 text-3xl font-semibold m-2 ">Cadastro de Funcionários</h1>
        </div>
      
      <form className={styles.formcontainerF}>
        <div className="flex gap-5">
          <div className='w-full'>
            <InputTw label="Nome Completo" type="text" name="nomeFuncionario" {...nomeFuncionario} className="w-full" />
          </div>
          <div className='w-4/12'>
            <InputTw label="CPF" type="text" name="cpf" {...cpf.value} onChange={handleCPFChange} className="w-full" />
            {cpfError && <p style={{ color: 'red' }}>{cpfError}</p>}
          </div>

        </div>
        <div className="flex gap-5">
          <div className='w-full'>
            <InputTw label="E-mail" type="email" name="email" {...email} className="w-full" />
          </div>
          <div className='w-4/12'>
            <InputTw label="Data Nascimento" type="date" name="dataNascimento" {...dataNascimento} className="w-full" />
          </div>
          <div className='w-4/12'>
            <InputTw label="Telefone" type="number" name="telefone" {...telefone} className="w-full" />
          </div>
        </div>
        <label htmlFor="cargoSelect" className={styles.label}>Cargo</label>
        <div className="flex gap-5">
          <div className='w-3/4'>
            <select id="cargoSelect" className={styles.select} value={select} onChange={({target}) => setSelect(target.value)}>
                <option disabled value="">Selecione</option>
                <option value="medico">Médico</option>
                <option value="estoquista">Estoquista</option>
                <option value="enfermeiro">Enfermeiro</option>
                <option value="farmaceutico">Farmacêutico </option>
                <option value="administrador">Administrador</option>
            </select>
          </div>
            <InputTw label="CRM (para médicos)" type="text" name="crm" {...crm} className="w-full" />
        </div>
        <div className="flex gap-5">
          <div className='w-full'>
            <InputTw label="E-mail do Responsável" type="text" name="emailFiscal" {...emailFiscal} className="w-full" />
          </div>
          <div className='w-4/12'>
            <InputTw label="Senha Genérica (CPF Funcionário)" type="text" name="cpf" {...senhaGenerica} className="w-full" />
          </div>
        </div>
        <Button1>Cadastrar Funcionário</Button1>
        {success && <p>{success}</p>}
        {error && <p>{error}</p>}
      </form>
    </section>
  );
};

export default CadastroFuncionarioForm;