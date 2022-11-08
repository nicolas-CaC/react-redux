import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getData, criptoSelector, setCrypto, getStateService } from './../redux'


export const Criptos = () => {


    const { price, cripto, loading, state } = useSelector(criptoSelector)
    const dispatch = useDispatch();

    const styles = "container col-4 d-flex flex-column gap-2"

    useEffect(() => {
        dispatch(getStateService())
    }, [dispatch])

    const handleChange = (e) => {
        dispatch(setCrypto(e.target.value))
    }

    const handleClick = (e) => {
        dispatch(getData())
    }


    return (
        <div className={ styles }>

            <h1>Criptos:</h1>
            <h2 className='bg-warning text-dark rounded'>{ cripto }</h2>

            <div className='d-flex gap-2 justify-content-center'>
                <h4>Estado del servicio:</h4>
                <h4>{ state
                    ? state === 200
                        ? <div className='badge bg-success'>En línea</div>
                        : <div className='badge bg-danger'>Error de conexión</div>
                    : <div className='badge bg-secondary'>Verificando...</div>
                }</h4>
            </div>

            <h3 className='bg-white text-dark rounded p-1'>
                ARS: { price.ars }
            </h3>
            <h3 className='bg-success text-light rounded p-1'>
                USD: { price.usd }
            </h3>

            <h5>Loading: <b>{ JSON.stringify(loading) }</b></h5>

            <input
                className="form-control text-center"
                value={ cripto }
                onChange={ handleChange }
            />
            <button
                className="btn btn-primary"
                onClick={ handleClick }
            >
                Buscar precio
            </button>

        </div>
    )
}