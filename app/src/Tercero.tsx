import { useEffect } from 'react'
import { peliculas } from './assets/peliculas'

/**
 * Componente 3: Hola Mundo + variables + uso de un archivo de
 * importación (peliculas.js), con registro de tiempos de render.
 */
function Tercero() {

    useEffect(() => {
        const inicio = performance.now();
        return () => {
            const fin = performance.now();
            console.log(`Tercero renderizado en ${(fin - inicio).toFixed(2)} ms`);
        };
    }, []);

    const nombre = 'Regina';
    const apellido = 'Martinez';
    const nombreCompleto = `${nombre} ${apellido}`;

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

    console.log('Nombre completo:', nombreCompleto);
    console.log('Película destacada:', peliculaDestacada);
    console.log('Películas de Nolan:', peliculasNolan);

    return (
        <div>
            <h1>Hola Mundo!</h1>
            <h2>{nombreCompleto}</h2>

            <h3>Lista de Películas</h3>

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
