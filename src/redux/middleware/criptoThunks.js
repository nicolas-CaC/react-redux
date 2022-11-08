import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getPrice, startLoading, stateService } from "..";

export const getData = () => {

    return async (dispatch, getState) => {

        const crypto = getState().criptos.crypt;
        try {
            dispatch(startLoading())
            let data;
            data = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`);
            data = await data.json();
            dispatch(getPrice(data))
        }
        catch (err) {
            withReactContent(Swal).fire({
                title: <p>No se encuentra la cripto mencionada</p>,
                icon: "question",
                timer: 3000
            })
        }
    }
}

export const getStateService = () => {

    return async (dispatch) => {
        let data = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
        dispatch(stateService(data.status))
    }
}