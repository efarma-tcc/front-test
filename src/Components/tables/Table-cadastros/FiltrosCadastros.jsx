
import { Button } from "../../ui/button";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Input3 from "@/Components/Forms/Input3";


export default function FiltrosCadastros() {

    return(
        <form className="flex items-center gap-2">
            <Input3 label="CPF:" id="id"/>
            <Input3 label="Nome:" id="name"/>
            <Button type="submit" variant="secondary" >
              <Search className="w-4 h-4 mr-2"/>
              Filtrar Resultados
            </Button>
        </form>
    );
};