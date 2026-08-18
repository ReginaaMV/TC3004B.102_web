import React from 'react'
import { bancos } from './assets/bancos'

function Primer() {

    console.log(bancos);

    const getBancoById = (id: number) => bancos.find((banco) => banco.id === id);
    console.log(getBancoById)

    const element = '<h1>Hello</h1>';
    const nombre = 'Regina';
    const apellidos = 'Martinez ';
    const elemento = `<h1>Nombre: ${nombre}</h1>`;

    console.log(element);
    console.log(nombre + ' ' + apellidos);
    console.log(elemento);

    let valor = 5;
    valor = 7;
    console.log(valor);

    function getSaludo(nombre: string) {
        return 'Hola' + ' ' + nombre;
    }

    console.log(getSaludo('Mundo'))

    const estudiante = {
        matricula: 'A01385455',
        nombre: 'Regina',
        edad: 21,
        dirección: {
            ciudad: 'Mty',
            zip: 64800
        },
        clase: 'TC3004B'
    };

    console.log(estudiante);
    console.table(estudiante);

    const estudiante2 = { ...estudiante };

    estudiante2.nombre = 'Ramon';

    console.log(estudiante2);
    console.table(estudiante2);

    const arreglo = [1, 2, 3, 4, 5];
    console.log(arreglo);

    arreglo.pop();
    console.log(arreglo);

    arreglo.push(9);
    console.log(arreglo);

    let arreglo2 = [...arreglo];
    console.log(arreglo2);

    const saludar = function (nombre: string) {
        return `Hola ${nombre}`;
    }

    const saludar2 = (nombre: string) => {
        return `Hola ${nombre}`;
    }

    const saludar3 = (nombre: string) => `Hola ${nombre}`;

    console.log(saludar("Regina"));
    console.log(saludar2("Mariana"));
    console.log(saludar3("Carlos"));

    let a, b, rest;

    [a, b] = [10, 20];

    console.log(a);
    console.log(b);

    [a, b, ...rest] = [10, 20, 30, 40, 50];

    console.log(rest);


    return (
        <div>

            <h1>Hola Mundo!</h1>

            <h2>Regina Martinez</h2>

            <h3>Lista de Bancos</h3>

            <ul>

                {bancos.map((banco) => (

                    <li key={banco.id}>

                        {banco.name} - {banco.country}

                    </li>

                ))}

            </ul>

        </div>
    )
}

export default Primer