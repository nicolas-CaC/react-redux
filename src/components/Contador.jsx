import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from "../redux"
import { counterSelector } from "../redux"

export const Contador = () => {

    const { count } = useSelector(counterSelector)
    const dispatch = useDispatch()

    const styles = "container col-3 d-flex flex-column gap-2"

    return (
        <div className={ styles }>

            <h1>Count: { count }</h1>

            <button className="btn btn-primary"
                onClick={ () => dispatch(increment()) }>
                incrementar</button>
            <button className="btn btn-secondary"
                onClick={ () => dispatch(decrement()) }>
                decrementar</button>
            <button className="btn btn-warning"
                onClick={ () => dispatch(incrementByAmount(2)) }>
                incrementar+2</button>
        </div>
    )
}