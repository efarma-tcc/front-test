import ModalPages from "@/Components/MoldalPages";
import SidebarMenu from "@/Components/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

export default function Configuracoes() {
    return (
        <div className="flex">
            <SidebarMenu />
            <div className="bg-slate-400 flex flex-1">
            
                <Tabs defaultValue='paciente' className='mt-5 w-full'>
                    <ModalPages >
                        <TabsList className='p-6'>
                            <TabsTrigger className="" value="paciente">Pacientes</TabsTrigger>
                        </TabsList>
                    </ModalPages>
                    <TabsContent value='paciente'>
                        <div className="m-5 ">
                            <h1 className="title2">Cadastro de Pacientes</h1>
                            <div className="flex xl:w-[1200px] lg:w-[800px] md:w-[500px] gap-5">
                                <div className="pt-5 w-full space-y-1">
                                    <label htmlFor="name-paciente">Nome completo do paciente</label>
                                    <input type="text" id="name-paciente" className="w-full rounded bg-slate-300 p-4" />
                                </div>
                                <div className="pt-5  space-y-1">
                                    <label htmlFor="cpf-paciente">CPF</label>
                                    <input type="text" id="cpf-paciente" className="rounded bg-slate-300 p-4" />
                                </div>
                            </div>

                            <div className="flex xl:w-[1200px] lg:w-[800px] md:w-[500px] gap-5">
                                <div className="pt-5 w-full space-y-1">
                                    <label htmlFor="email-paciente">Email</label>
                                    <input type="text" id="email-paciente" className="w-full rounded bg-slate-300 p-4" />
                                </div>
                                <div className="pt-5  space-y-1">
                                    <label htmlFor="data-nascimento-paciente">Data Nacimento</label>
                                    <input type="text" id="data-nascimento-paciente" className="rounded bg-slate-300 p-4" />
                                </div>
                                <div className="pt-5  space-y-1">
                                    <label htmlFor="telefone-paciente">Telefone</label>
                                    <input type="text" id="telefone-paciente" className="rounded bg-slate-300 p-4" />
                                </div>
                            </div>

                            <div className="flex xl:w-[1200px] lg:w-[800px] md:w-[500px] gap-5">
                                <div className="pt-5 w-full space-y-1">
                                    <label htmlFor="telefone-paciente">Telefone</label>
                                    <input type="text" id="telefone-paciente" className="rounded w-full bg-slate-300 p-4" />
                                </div>
                            </div>
                            
                        </div>
                    </TabsContent>
                    
                </Tabs>
           
            </div>
        </div>
    )
}