import TableCadastros from "@/Components/tables/Table-cadastros/TableCadastros"
import SidebarMenu from "../Components/Sidebar/index"
import styles from './Home.module.css';


export default function Page1(){
    return (
        <div className="flex mx-auto space-y-4 w-full">
            <SidebarMenu/>
            <div className="block w-full text-center">
                <h1 className={styles.titulo}>Seja Bem Vindo ao EFarma</h1>
                <h2 className={styles.h2}>Gestão Inteligente de Medicamentos</h2>
                <img className={styles.imagem} src="src/Assets/redux.png" alt="Descrição da Imagem"/>
            </div>
        </div>
    )
}



// <Tabs defaultValue='paciente' className='ml-5'>
//     <ModalPages>
//         <TabsList className='ml-6 p-6'>
//             <TabsTrigger value="paciente">Pacientes</TabsTrigger>
//             <TabsTrigger value="funcionarios">Funcionarios</TabsTrigger>
//             <TabsTrigger value="listaPessoas">Lista</TabsTrigger>
//         </TabsList>
//     </ModalPages>

//     <TabsContent value='paciente'>
//         <CadastroPaciente/>
//     </TabsContent>
//     <TabsContent value='funcionarios'>
//         <CadastroFuncionario/>
//     </TabsContent>
//     <TabsContent value='listaPessoas'>
//         <h1>CODIGO DO listaPessoas</h1>
//     </TabsContent>


// </Tabs>