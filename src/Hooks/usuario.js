import { useMutation } from "@tanstack/react-query";
import { CreateUsuario } from "../Services/endpoints";

export function useCreateUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({
    mutationFn: async (body) => {
      console.log("[useCreateUsuario] mutate body:", body);
      return CreateUsuario(body);
    },
    onSuccess: (data) => {
      console.log("[useCreateUsuario] onSuccess data:", data);
      onSuccess(data);
    },
    onError: (error) => {
      console.error("[useCreateUsuario] onError error:", error);
      onError(error);
    },
  });
}
