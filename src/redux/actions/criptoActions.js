export const criptoStartLoading = (state) => { state.loading = true }

export const criptoSetCrypto = (state, action) => { state.crypt = action.payload }

export const criptoGetService = (state, action) => { state.state = action.payload }

export const criptoGetPrice = (state, action) => {
    const { ars, usd } = action.payload.market_data.current_price;
    state.price = { ars, usd };
    state.loading = false;
}