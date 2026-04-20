import { useState } from "react" // Hook de estado
import { Link } from "react-router-dom" // Navegación

export default function Dashboard() {

  // Estado para monto
  const [amount, setAmount] = useState("")

  // Estado para concepto
  const [concept, setConcept] = useState("")

  // Estado para categoría
  const [category, setCategory] = useState("")

  // Función al enviar gasto
  const handleSubmit = (e) => {
    e.preventDefault() // Evita recarga

    // Simulación de guardar gasto
    console.log("Monto:", amount)
    console.log("Concepto:", concept)
    console.log("Categoría:", category)
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <form onSubmit={handleSubmit}>

        {/* Input monto */}
        <input
          type="number" // Solo números
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

        {/* Selector de categoría */}
        <select
          value={category} // Valor controlado
          onChange={(e) => setCategory(e.target.value)} // Actualiza estado
        >
          <option value="">Selecciona categoría</option>
          <option value="comida">Comida</option>
          <option value="transporte">Transporte</option>
          <option value="ocio">Ocio</option>
        </select>

        <br />

        <button type="submit">
          Guardar gasto
        </button>

      </form>

      <br />

      <Link to="/">Cerrar sesión</Link>
    </div>
  )
}