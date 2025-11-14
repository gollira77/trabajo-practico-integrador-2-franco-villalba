import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = () => {
  const [checking, setChecking] = useState(true);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        const resp = await fetch("http://localhost:3000/api/profile", {
          credentials: "include",
        });

        setLogged(resp.ok);
      } catch (error) {
        setLogged(false);
      } finally {
        setChecking(false);
      }
    };

    verify();
  }, []);

  if (checking) return <Loading message="Verificando acceso..." />;

  return logged ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
