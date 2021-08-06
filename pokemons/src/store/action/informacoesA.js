export const changeNumInfo = (num) => {
    const payload = num
    return {
        type: "NUM_INFORMACOES",
        payload
    }
}