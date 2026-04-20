import { StrictMode } from 'react' // Importamos modo estricto de React
import { createRoot } from 'react-dom/client' // Función para renderizar la app

import { RouterProvider } from 'react-router-dom' // Proveedor de rutas

import { router } from './router/router' // Importamos el router que creamos

import './index.css' // Estilos globales

// Renderizamos la aplicación en el div con id "root"
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Activa verificaciones adicionales en desarrollo */}

    {/* Aquí le decimos a React que use nuestro sistema de rutas */}
    <RouterProvider router={router} />

  </StrictMode>,
)