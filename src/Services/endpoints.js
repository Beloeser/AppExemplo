import api from "./api"

// usuários
export async function GetUsuarios() {
  const { data } = await api.get("/usuarios");
  return data;
}

export async function CreateUsuario(body) {
  const { data } = await api.post("/usuarios", body);
  return data;
}

export async function UpdateUsuario(id, body) {
  const { data } = await api.put(`/usuarios/${id}`, body);
  return data;
}

export async function DeleteUsuario(id) {
  const { data } = await api.delete(`/usuarios/${id}`);
  return data;
}

export async function LoginUsuario(dados) {
  const { data } = await api.post("/login", dados);
  return data;
}

// sessões
export async function GetSessoes() {
  const { data } = await api.get("/sessoes");
  return data;
}

export async function CreateSessao(body) {
  const { data } = await api.post("/sessoes", body);
  return data;
}

export async function DeleteSessao(id) {
  const { data } = await api.delete(`/sessoes/${id}`);
  return data;
}
