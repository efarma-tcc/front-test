export async function getItensEstoque(){

    let cadastros = [
        {id: '1', name: 'Medicamento A', dosagem: '5ml' ,qtd:'5', sala:'A', prateleira:'1' },
        {id: '2', name: 'Medicamento B', dosagem: '10g', qtd:'2', sala:'B', prateleira:'2'  },
        {id: '3', name: 'Medicamento C', dosagem: 'x', qtd:'1', sala:'A', prateleira:'2' },
        {id: '4', name: 'Medicamento D', dosagem: 'y', qtd:'0', sala:'B', prateleira:'3' },
        {id: '5', name: 'Medicamento E', dosagem: 'z', qtd:'15', sala:'A', prateleira:'4' },
        {id: '6', name: 'Medicamento F', dosagem: 'z', qtd:'0', sala:'A', prateleira:'5' },
    ]

    return cadastros
}