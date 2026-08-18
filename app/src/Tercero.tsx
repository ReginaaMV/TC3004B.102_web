import { peliculas } from './assets/peliculas'

/**
 * Componente 3: uso de un archivo de importación (peliculas.js).
 *
 * Se apoya en Array.prototype.find y Array.prototype.filter para
 * consultar el arreglo importado antes de renderizarlo con JSX.
 */
function Tercero() {

    /**
     * Busca una película por su id.
     */
    const getPeliculaById = (id: number) =>
        peliculas.find((pelicula) => pelicula.id === id);

    /**
     * Filtra las películas de un director en específico.
     */
    const getPeliculasByDirector = (director: string) =>
        peliculas.filter((pelicula) => pelicula.director === director);

    const peliculaDestacada = getPeliculaById(1);
    const peliculasNolan = getPeliculasByDirector('Christopher Nolan');

    console.log('Película destacada:', peliculaDestacada);
    console.log('Películas de Nolan:', peliculasNolan);

    return (
        <div>
            <h2>Lista de Películas</h2>

            {peliculaDestacada && (
                <p>
                    Película destacada: {peliculaDestacada.titulo} ({peliculaDestacada.anio})
                </p>
            )}

            <p>
                Películas de Christopher Nolan: {peliculasNolan.map((p) => p.titulo).join(', ')}
            </p>

            <ul>
                {peliculas.map((pelicula) => (
                    <li key={pelicula.id}>
                        {pelicula.id}. {pelicula.titulo} - {pelicula.director} ({pelicula.anio})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tercero
