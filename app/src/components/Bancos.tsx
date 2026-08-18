import React from 'react'
import { bancos } from '../datos/bancos'

function Bancos() {
  return (
    <div>
      <h2>Componente con Importación</h2>
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

export default Bancos
