import Input3 from "@/Components/Forms/Input3";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Search } from "lucide-react";


export default function FiltrosReceitaEstoque() {

    return(
        <form className="flex items-center gap-2">
            <Input3 placeholder="CPF" id="id"/>
            <Input3 placeholder="Nome" id="name"/>
            <Button type="submit" variant="secondary" >
              <Search className="w-4 h-4 mr-2"/>
              Filtrar Resultados
            </Button>
        </form>
    )
}