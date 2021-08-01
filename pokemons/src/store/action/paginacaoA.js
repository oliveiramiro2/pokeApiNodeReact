export const changePage = (pagina) => {
    const payload = pagina
    console.log('paginacaoA', payload)
    return {
        type: "TROCA_PAG",
        payload
    }
}