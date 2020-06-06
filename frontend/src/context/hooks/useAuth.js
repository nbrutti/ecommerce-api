import { useEffect, useState } from "react";
import { httpClient } from '../../services/api-service';
import UsuarioService from '../../services/usuario-service';

export default function useAuth() {
  const usuarioService = new UsuarioService();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      let token_obj = JSON.parse(token);
      httpClient.defaults.headers.Authorization = `Bearer ${token_obj}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin({ email, senha }) {
    const { data: { token } } = await usuarioService.autenticar({ email, senha });
    localStorage.setItem('token', JSON.stringify(token));
    httpClient.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    httpClient.defaults.headers.Authorization = undefined;
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
