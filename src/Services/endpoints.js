import api from "./api"

// usuários
export async function GetUsuarios() {
  console.log("[endpoints] → GetUsuarios()");
  const { data } = await api.get("/usuarios");
  console.log("[endpoints] ← GetUsuarios() data:", data);
  return data;
}

export async function CreateUsuario(body) {
  console.log("[endpoints] → CreateUsuario() body:", body);
  const { data } = await api.post("/usuarios", body);
  console.log("[endpoints] ← CreateUsuario() data:", data);
  return data;
}

export async function UpdateUsuario(id, body) {
  console.log(`[endpoints] → UpdateUsuario() id: ${id}, body:`, body);
  const { data } = await api.put(`/usuarios/${id}`, body);
  console.log("[endpoints] ← UpdateUsuario() data:", data);
  return data;
}

export async function DeleteUsuario(id) {
  console.log(`[endpoints] → DeleteUsuario() id: ${id}`);
  const { data } = await api.delete(`/usuarios/${id}`);
  console.log("[endpoints] ← DeleteUsuario() data:", data);
  return data;
}

export async function LoginUsuario(dados) {
  console.log("[endpoints] → LoginUsuario() dados:", dados);
  const { data } = await api.post("/login", dados);
  console.log("[endpoints] ← LoginUsuario() data:", data);
  return data;
}

// sessões
export async function GetSessoes() {
  console.log("[endpoints] → GetSessoes()");
  const { data } = await api.get("/sessoes");
  console.log("[endpoints] ← GetSessoes() data:", data);
  return data;
}

export async function CreateSessao(body) {
  console.log("[endpoints] → CreateSessao() body:", body);
  const { data } = await api.post("/sessoes", body);
  console.log("[endpoints] ← CreateSessao() data:", data);
  return data;
}

export async function DeleteSessao(id) {
  console.log(`[endpoints] → DeleteSessao() id: ${id}`);
  const { data } = await api.delete(`/sessoes/${id}`);
  console.log("[endpoints] ← DeleteSessao() data:", data);
  return data;
}
