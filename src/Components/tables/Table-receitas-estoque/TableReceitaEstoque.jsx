import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";

import { useState, useEffect } from "react";
import { getItensReceitaEstoque } from "@/Components/data/lista-itens-receita-estoque";
import FiltrosReceitaEstoque from "./FiltrosReceitaEstoque";

export default function TableReceitaEstoque(){

  const [products, setProducts] = useState([]); // State for fetched products
  const [isLoading, setIsLoading] = useState(false); // Loading state for feedback

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await getItensReceitaEstoque();
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
        <div className="p-6 max-w-4xl mx-auto space-y-4">
          
            <div className="border rounded-lg p-4">
                <Table>
                  <TableHeader>
                      <TableHead>Id</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Dosagem</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead></TableHead>
                  </TableHeader>

                  <TableBody>
                      {isLoading ? (
                      <TableRow key="loading">
                          <TableCell colSpan={3}>Carregando pessoas cadastradas...</TableCell>
                      </TableRow>
                      ) : products.length > 0 ? (
                        products.map((product, i) => (
                          <TableRow key={product.id}>
                              <TableCell>{product.id}</TableCell>
                              <TableCell>{product.name}</TableCell>
                              <TableCell>{product.dosagem}</TableCell>
                              <TableCell>{product.qtd}</TableCell>
                          </TableRow>
                      ))
                      ) : (
                      <TableRow key="no-results">
                          <TableCell colSpan={3}>Nenhuma pessoa encontrada.</TableCell>
                      </TableRow>
                      )}
                  </TableBody>
                </Table>
            </div>
        </div>
    )
}