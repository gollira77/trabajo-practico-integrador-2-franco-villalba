import { useState } from "react";
import useForm from "../../hooks/useForm";
import Loading from "../../components/Loading";

const Login = () => {
  const { values, handleChange, handleReset } = useForm({
    username: "",   
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!values.username.trim() || !values.password.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      setLoading(true);

      console.log("VALORES ENVIADOS:", values);
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), 
      });

      if (!response.ok) {
        const { message } = await response.json();
        setError(message || "Error inesperado en el servidor.");
        return;
      }

      window.location.href = "/home";
    } catch (err) {
      console.error(err);
      setError("Error de conexión. Intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-md mx-auto mt-10 bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Iniciar sesión</h1>

      {loading && <Loading message="Validando credenciales..." />}

      {!loading && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <p className="text-red-600 text-sm bg-red-100 px-3 py-2 rounded">
              {error}
            </p>
          )}

          <input
            type="text"
            name="username"                             
            placeholder="Nombre de usuario"              
            className="border px-3 py-2 rounded w-full"
            value={values.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="border px-3 py-2 rounded w-full"
            value={values.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
          >
            Ingresar
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 rounded py-2 hover:bg-gray-400 transition"
          >
            Limpiar
          </button>
        </form>
      )}
    </main>
  );
};

export default Login;
