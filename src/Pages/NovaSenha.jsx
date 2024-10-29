import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import SidebarMenu from "../Components/Sidebar/index";
import ModalPages from "@/Components/MoldalPages";
import CadastroNovaSenha from "@/Components/CadastroNovaSenha/CadastroNovaSenha";
import CadastroNovaSenhaForm from "@/Components/CadastroNovaSenha/CadastroNovaSenhaForm";
import '../App.css';
import style from './Navbar.module.css';

export default function NovaSenha() {
  return (
    <div className="flex mx-auto space-y-4 w-full">
      <SidebarMenu />
      <div className="block w-full">
        <Tabs defaultValue="nova-senha" className="ml-5">
          <TabsList className="ml-6 p-6">
            <TabsTrigger value="nova-senha">Nova Senha</TabsTrigger>
          </TabsList>

          <TabsContent value="nova-senha">
            <CadastroNovaSenha />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
