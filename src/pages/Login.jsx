import { useState } from "react" // Hook para manejar estado
import { Link } from "react-router-dom" // Para navegar entre páginas

export default function Login() {

  // Estado para guardar el email
  const [email, setEmail] = useState("") // Inicializa vacío

  // Estado para guardar la contraseña
  const [password, setPassword] = useState("") // Inicializa vacío

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault() // Evita que la página se recargue

    // Mostramos los datos en consola (simulación de envío)
    console.log("Email:", email)
    console.log("Password:", password)
  }

  return (
    <div>
      <h1>Login</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit}> {/* Ejecuta handleSubmit */}

        {/* Input email */}
        <input
          type="email" // Tipo de dato email
          placeholder="Correo" // Texto de ayuda
          value={email} // Valor controlado por React
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
        />

        <br />

        {/* Input contraseña */}
        <input
          type="password" // Tipo password
          placeholder="Contraseña"
          value={password} // Controlado por estado
          onChange={(e) => setPassword(e.target.value)} // Actualiza estado
        />

        <br />

        {/* Botón enviar */}
        <button type="submit">
          Iniciar sesión
        </button>

      </form>

      <p>
        ¿No tienes cuenta?
        <Link to="/register"> Regístrate</Link>
      </p>
    </div>
  )
}