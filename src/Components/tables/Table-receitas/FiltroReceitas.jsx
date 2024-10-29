import Input3 from "@/Components/Forms/Input3";
import { Button } from "../../ui/button";
import { Search } from "lucide-react";

export default function FiltroReceitas() {

    return(
        <form className="flex items-center gap-2 ml-7 mt-7">
            <Input3 label="Data Emissão:" id="data"/>
            <Input3 label="CPF:" id="cpf"/>
            <Button type="submit" variant="secondary" className="mt-2" >
              <Search className="w-4 h-4 mr-2"/>
              Filtrar Resultados
            </Button>
        </form>
    )
}