import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Primer from './Primer.tsx'
import Segundo from './Segundo.tsx'
import Tercero from './Tercero.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>Laboratorio 1 - Componentes React</h1>
      <hr />
      <Primer />
      <hr />
      <Segundo />
      <hr />
      <Tercero />
    </div>
  </StrictMode>,
)