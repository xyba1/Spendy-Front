// Importamos useState para manejar el estado de los inputs
import { useState } from "react"

// Importamos Link para navegación y useNavigate para redirección automática
import { Link, useNavigate } from "react-router-dom"

// Importamos la función que hace la petición al backend
import { loginRequest } from "../api/api"


// Definimos el componente Login
export default function Login() {

  // Estado para guardar el email del usuario
  const [email, setEmail] = useState("")

  // Estado para guardar la contraseña
  const [password, setPassword] = useState("")

  // Hook que nos permite redirigir a otra ruta
  const navigate = useNavigate()


  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {

    // Evita que la página se recargue
    e.preventDefault()

    // Creamos un objeto con los datos del usuario
    const data = {
      email,
      password
    }

    try {
      // Llamamos a la función del api.js y enviamos los datos
      const response = await loginRequest(data)

      // Mostramos la respuesta del servidor en consola
      console.log("Respuesta backend:", response)

      // Redirigimos al usuario al dashboard
      navigate("/dashboard")

    } catch (error) {
      // Si ocurre un error, lo mostramos en consola
      console.error("Error en login:", error)
    }
  }


  // Renderizamos el formulario
  return (
    <div>
      <h1>Login</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit}>

        {/* Input de email */}
        <input
          type="email" // Tipo email
          placeholder="Correo"
          value={email} // Conectado al estado
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
        />

        <br />

        {/* Input de contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        {/* Botón para enviar */}
        <button type="submit">
          Iniciar sesión
        </button>

      </form>

      {/* Enlace a registro */}
      <p>
        ¿No tienes cuenta?
        <Link to="/register"> Regístrate</Link>
      </p>
    </div>
  )
}