import { useState } from "react" // Hook de estado
import { Link } from "react-router-dom" // Navegación

export default function Register() {

  // Estado para nombre
  const [name, setName] = useState("")

  // Estado para email
  const [email, setEmail] = useState("")

  // Estado para contraseña
  const [password, setPassword] = useState("")

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault() // Evita recarga

    // Simulación de registro
    console.log("Nombre:", name)
    console.log("Email:", email)
    console.log("Password:", password)
  }

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

        <button type="submit">
          Registrarse
        </button>

      </form>

      <p>
        ¿Ya tienes cuenta?
        <Link to="/"> Inicia sesión</Link>
      </p>
    </div>
  )
}