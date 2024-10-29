import React from 'react'
import InputLe from '../Forms/Input';
import ButtonGreen from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './CadastroReceitaForm.module.css';
import { Button } from '../ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { PlusCircle} from 'lucide-react';
import { ComboBoxResponsive } from './ComboboxNovoRemeido';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import TableItensReceita from '../tables/Table-itens-receita/TableItensReceita';
import Input2 from '../Forms/Input2';
import Input4 from '../Forms/Input4';
import Button1 from '../Forms/Button1';

  const CadastroReceitaForm = () => {

    const nomePacienteR = useForm();
    const cpfR = useForm();
    const telefoneR = useForm();
    const nomeMedico = useForm();
    const local = useForm();
    const assinatura = useForm();
    const dataPrescricao = useForm();


  return (
    <section className="animeLeft">
        <div className={styles.containerTituloRe}>
            <h1 className="title2">Nova Receita</h1>
        </div>
        <form className={styles.formContainerRe}>
            <div className={styles.formrowRe}>
                <Input2 label="Nome do Paciente" type="text" name="nomePacienteR" {...nomePacienteR}></Input2>
                <InputLe label="CPF do Paciente" type="number" name="cpfR" {...cpfR}></InputLe>
                <InputLe label="Telefone do Paciente" type="number" name="telefoneR" {...telefoneR}></InputLe>
            </div>
            <div className={styles.formrowRe}>
                <Input2 label="Nome do Médico" type="text" name="nomeMedico" {...nomeMedico}></Input2>
                <Input4 label="CRM do Médico" type="number" name="crm"></Input4>
            </div>

            <div className='mb-5'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">
                            <PlusCircle className='w-4 h-4 mr-2'/>
                            Novo Item
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Novo Item</DialogTitle>
                            <DialogDescription>Escolha um remédio para adicionar a receita</DialogDescription>
                        </DialogHeader>
                        <ComboBoxResponsive></ComboBoxResponsive> 
                        <div className='flex gap-5'>
                            <div>
                                <Label for="qtd">Quantidade</Label>
                                <Input id='qtd' className="w-[100px]" />
                            </div>
                            <div >
                                <Label for="descrição">Descrição</Label>
                                <Input id='descrição' className="w-[350px]" />
                            </div>
                        </div>

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="outline">Cancelar</Button>
                            </DialogClose>
                            <Button type="submit">Salvar</Button>
                        </DialogFooter>
                    </DialogContent>

                </Dialog>


            </div>
            <div>
                <TableItensReceita />
            </div>
            <div className={styles.formrowRe}>
                <Input2 label="Local" type="text" name="local" {...local}></Input2>
                <Input4 label="Assinatura" type="text" name="assinatura" {...assinatura}></Input4>
            </div>
            <Button1>Cadastrar nova Receita</Button1>
        </form>
    </section>
  );
};

export default CadastroReceitaForm