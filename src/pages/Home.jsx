import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/profile", {
          credentials: "include",
        });

        if (!response.ok) {
          window.location.href = "/login";
          return;
        }

        const data = await response.json();
        console.log("PROFILE DATA:", data); 
        setProfile(data.user);              
      } catch (error) {
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, []);

  if (loading) return <Loading message="Verificando sesión..." />;

  return (
    <main className="max-w-5xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold">
        Bienvenido, {profile?.name} {profile?.lastname}
      </h1>
      <p className="text-slate-700 mt-2">
        Sesión activa. Este contenido solo se muestra a usuarios autenticados.
      </p>
    </main>
  );
};

export default Home;
