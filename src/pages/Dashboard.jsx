// Importamos useState para manejar el formulario
import { useState } from "react"

// Importamos Link para navegación
import { Link } from "react-router-dom"

// Importamos función para guardar gastos
import { createExpense } from "../api/api"


// Componente Dashboard
export default function Dashboard() {

  // Estado para monto
  const [amount, setAmount] = useState("")

  // Estado para concepto
  const [concept, setConcept] = useState("")

  // Estado para categoría
  const [category, setCategory] = useState("")


  // Función al enviar el formulario
  const handleSubmit = async (e) => {

    // Evita recarga
    e.preventDefault()

    // Creamos objeto con los datos
    const data = {
      amount,
      concept,
      category
    }

    try {
      // Enviamos gasto al backend
      const response = await createExpense(data)

      // Mostramos respuesta
      console.log("Gasto guardado:", response)

    } catch (error) {
      // Manejo de errores
      console.error("Error:", error)
    }
  }


  // Render
  return (
    <div>
      <h1>Dashboard</h1>

      <form onSubmit={handleSubmit}>

        {/* Input monto */}
        <input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />

        {/* Input concepto */}
        <input
          type="text"
          placeholder="Concepto"
          value={concept}
          onChange={(e) => setConcept(e.target.value)}
        />

        <br />

        {/* Select categoría */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecciona categoría</option>
          <option value="comida">Comida</option>
          <option value="transporte">Transporte</option>
          <option value="ocio">Ocio</option>
        </select>

        <br />

        {/* Botón */}
        <button type="submit">
          Guardar gasto
        </button>

      </form>

      <br />

      {/* Cerrar sesión */}
      <Link to="/">Cerrar sesión</Link>
    </div>
  )
}