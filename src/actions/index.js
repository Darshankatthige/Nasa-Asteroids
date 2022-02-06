export const asteroidsListAction = (payload) => {
    return {
        type: 'LIST',
        payload:payload
    }
}
export const asteroidsFilteredListAction =(payload) => {
    return {
        type: 'FILTEREDLIST',
        payload:payload
    }
}

export const asteroidsDetailsAction =(payload) => {
    return {
        type: 'DETAILS',
        payload:payload
    }
}