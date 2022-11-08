export const criptoSelector = state => {
    return {
        state: state.criptos.state,
        price: state.criptos.price,
        cripto: state.criptos.crypt,
        loading: state.criptos.loading
    }
}