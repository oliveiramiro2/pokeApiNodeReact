export const changePage = (pagina) => {
    const payload = pagina
    return {
        type: "TROCA_PAG",
        payload
    }
}