import { createBrowserRouter } from "react-router-dom" // Función para crear rutas

// Importamos páginas
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"

// Definimos todas las rutas de la app
export const router = createBrowserRouter([
  {
    path: "/", // Ruta inicial
    element: <Login /> // Vista login
  },
  {
    path: "/register", // Ruta registro
    element: <Register />
  },
  {
    path: "/dashboard", // Ruta dashboard
    element: <Dashboard />
  }
])