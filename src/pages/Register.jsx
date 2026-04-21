// Importamos useState para manejar los datos del formulario
import { useState } from "react"

// Importamos Link para navegar entre páginas
import { Link } from "react-router-dom"

// Importamos la función de registro desde api.js
import { registerRequest } from "../api/api"


// Definimos el componente Register
export default function Register() {

  // Estado para el nombre
  const [name, setName] = useState("")

  // Estado para el email
  const [email, setEmail] = useState("")

  // Estado para la contraseña
  const [password, setPassword] = useState("")


  // Función al enviar el formulario
  const handleSubmit = async (e) => {

    // Evita recarga de página
    e.preventDefault()

    // Creamos objeto con los datos
    const data = {
      name,
      email,
      password
    }

    try {
      // Enviamos datos al backend
      const response = await registerRequest(data)

      // Mostramos respuesta
      console.log("Registro:", response)

    } catch (error) {
      // Manejo de errores
      console.error("Error en registro:", error)
    }
  }


  // Render del formulario
  return (
    <div>
      <h1>Registro</h1>

      <form onSubmit={handleSubmit}>

        {/* Input nombre */}
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        {/* Input email */}
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        {/* Input contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        {/* Botón */}
        <button type="submit">
          Registrarse
        </button>

      </form>

      {/* Enlace a login */}
      <p>
        ¿Ya tienes cuenta?
        <Link to="/"> Inicia sesión</Link>
      </p>
    </div>
  )
}