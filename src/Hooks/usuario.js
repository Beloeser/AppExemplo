import { useMutation, useQuery } from "@tanstack/react-query";
import {
  GetUsuarios,
  CreateUsuario,
  UpdateUsuario,
  DeleteUsuario,
  LoginUsuario,
} from "../Services/endpoints.js";
import useAuthStore from "../stores/auth.js"


// USUÁRIOS
export function useGetUsuarios() {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: GetUsuarios,
  });
}

export function useCreateUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({
    mutationFn: CreateUsuario,
    onSuccess,
    onError,
  });
}

export function useUpdateUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({
    mutationFn: ({ id, body }) => UpdateUsuario(id, body),
    onSuccess,
    onError,
  });
}

export function useDeleteUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({
    mutationFn: DeleteUsuario,
    onSuccess,
    onError,
  });
}

// LOGIN
export function useLoginUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: async (dados) => {
      const response = await LoginUsuario(dados);

      if (response.token) {
        setToken(response.token);
      } else {
        console.warn("⚠️ Nenhum token encontrado na resposta!");
      }

      return response;
    },
    onSuccess,
    onError,
  });
}


// SESSÕES
