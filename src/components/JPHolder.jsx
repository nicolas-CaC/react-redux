import { useState } from "react";
import { useGetPostQuery, useGetPostsQuery } from "../redux"

export const JPHolder = () => {

    const [id, setId] = useState(1);
    const { data, isLoading } = useGetPostsQuery();
    const { data: post, isLoading: postLoading } = useGetPostQuery(id);


    return (
        <div className="container col-3">

            <h2 className="bg-secondary rounded py-1">
                Carga: { isLoading ? 'Cargando' : 'Finalizada' }
            </h2>

            <div style={ { height: '50vh', overflow: 'overlay', marginBottom: '2em' } }>
                { !isLoading && data.map(post =>
                    <div key={ post.id }>
                        <strong>{ post.id }:</strong>
                        { post.title }
                    </div>) }
            </div>

            <ul>
                { postLoading ? <li>'Cargando...'</li>
                    : <div>
                        <strong>{ post.id }:</strong>
                        { post.title }
                    </div>
                }
            </ul>

            <div className="d-flex gap-2 justify-content-center">
                <button
                    className="btn btn-outline-light"
                    onClick={ () => id > 1 && setId(id - 1) }
                >
                    Anterior
                </button>
                <button
                    className="btn btn-outline-light"
                    onClick={ () => setId(id + 1) }
                >
                    Siguiente
                </button>
            </div>


        </div>
    )
}