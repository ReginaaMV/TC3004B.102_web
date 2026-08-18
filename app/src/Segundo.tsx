import { videojuegos } from './assets/videojuegos'

function Segundo() {

    const nombre = 'Regina'
    let edad = 21
    edad = 22

    const apellido = 'Martinez'
    const nombreCompleto = nombre + ' ' + apellido
    const nombreCompleto2 = `${nombre} ${apellido}`

    console.log(nombreCompleto)
    console.log(nombreCompleto2)

    function saludo(nombre: string) {
        return 'Hola ' + nombre
    }

    console.log(saludo('mundo'))

    const persona = {
        nombre: 'Regina',
        carrera: 'ITC',
        semestre: 6
    }

    const persona2 = { ...persona }
    persona2.nombre = 'Carlos'

    console.log(persona)
    console.log(persona2)

    const numeros = [1, 2, 3, 4]
    numeros.push(5)
    console.log(numeros)

    const numeros2 = [...numeros, 6]
    console.log(numeros2)

    let x, y, resto
    x = 1
    y = 2
    ;[x, y, ...resto] = [1, 2, 3, 4, 5]
    console.log(x)
    console.log(y)
    console.log(resto)

    console.log(videojuegos)

    return (
        <div>
            <h2>Variables</h2>
            <p>{nombreCompleto2}</p>
            <p>Edad: {edad}</p>
            <p>{saludo('Regina')}</p>

            <h3>Lista de Videojuegos</h3>
            <ul>
                {videojuegos.map((juego) => (
                    <li key={juego.id}>
                        {juego.id}. {juego.title} - {juego.developer} ({juego.year})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Segundo
