import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";

import { useState, useEffect } from "react";
import { getItensReceita } from "@/Components/data/lista-itens-receita";
import { Input } from "@/Components/ui/input";
import { CheckCircle2 } from "lucide-react";


export default function TableItensReceita(){

  const [products, setProducts] = useState([]); // State for fetched products
  const [isLoading, setIsLoading] = useState(false); // Loading state for feedback

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await getItensReceita();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch data on component mount

    return(
        <div className="max-w-4xl mx-auto space-y-4 mb-4">

            <div className="border rounded-lg p-3">
                <Table>
                <TableHeader>
                    <TableHead>Id</TableHead>
                    <TableHead>Remédio</TableHead>
                    <TableHead>Qtd</TableHead>
                    <TableHead>Descrição</TableHead>
                </TableHeader>

                <TableBody>
                    {isLoading ? (
                    <TableRow key="loading">
                        <TableCell colSpan={3}>Carregando Receitas...</TableCell>
                    </TableRow>
                    ) : products.length > 0 ? (
                        products.map((product, i) => (
                            <TableRow key={product.i}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.qtd}</TableCell>
                                <TableCell>{product.descricao}</TableCell>
                            </TableRow>
                    ))
                    ) : (
                    <TableRow key="no-results">
                        <TableCell colSpan={3}>Nenhuma receita encontrada.</TableCell>
                    </TableRow>
                    )}
                </TableBody>
                </Table>
            </div>

        </div>
    )
}