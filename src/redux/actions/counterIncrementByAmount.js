export const counterIncrementByAmount = (state, action) => {
    state.count += action.payload;
    state.timer += action.payload ** 2;
}