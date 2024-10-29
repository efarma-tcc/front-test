import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import ProdutsFilters from "./FiltroReceitas";
import { getReceitas } from "@/Components/data/lista-receitas";
import { Edit } from "lucide-react";

// Simples modal component
const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Editar Receita</h2>
        {product && (
          <div>
            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Nome:</strong> {product.name}</p>
            <p><strong>CPF:</strong> {product.cpf}</p>
            <p><strong>Data Emissão:</strong> {product.data}</p>
            {/* Aqui você pode adicionar mais campos editáveis */}
          </div>
        )}
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default function TableReceitas() {
  const [products, setProducts] = useState([]); // State for fetched products
  const [isLoading, setIsLoading] = useState(false); // Loading state for feedback
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product for editing
  const rowsPerPage = 6; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await getReceitas();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch data on component mount

  const totalPages = Math.ceil(products.length / rowsPerPage); // Calculate total pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product); // Set the product to be edited
    setIsModalOpen(true); // Open the modal
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex); // Slice products for current page

  return (
    <div className="p-6 max-w-4xl space-y-4">
      <div className="border rounded-lg p-4">
        <Table>
          <TableHeader>
            <TableHead>Id</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Data Emissão</TableHead>
            <TableHead>Editar</TableHead>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow key="loading">
                <TableCell colSpan={5}>Carregando Receitas...</TableCell>
              </TableRow>
            ) : products.length > 0 ? (
              paginatedProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.cpf}</TableCell>
                  <TableCell>{product.data}</TableCell>
                  <TableCell>
                    <Edit
                      className="w-4 cursor-pointer"
                      onClick={() => handleEditClick(product)} // Open modal on click
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow key="no-results">
                <TableCell colSpan={5}>Nenhuma receita encontrada.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && ( // Only show pagination if there are multiple pages
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  href="#"
                />
              </PaginationItem>
            )}
            {[...Array(totalPages)].map((_, pageIndex) => (
              <PaginationItem key={pageIndex + 1}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === pageIndex + 1}
                  onClick={() => handlePageChange(pageIndex + 1)}
                >
                  {pageIndex + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  href="#"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}

      {/* Render the modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}
