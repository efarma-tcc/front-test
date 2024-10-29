export async function getItensReceitaEstoque(){

    let cadastros = [
        {id: '1', name: 'Medicamento A', dosagem: '5ml' ,qtd:'5' },
        {id: '2', name: 'Medicamento B', dosagem: '10g', qtd:'2' },
        {id: '3', name: 'Medicamento C', dosagem: 'x', qtd:'1' },
        {id: '4', name: 'Medicamento D', dosagem: 'y', qtd:'0' },
        {id: '5', name: 'Medicamento E', dosagem: 'z', qtd:'0' },
    ]

    return cadastros
}