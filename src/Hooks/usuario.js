import { useMutation } from "@tanstack/react-query";
import { CreateUsuario } from "../Services/endpoints";

export function useCreateUsuario({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({
    mutationFn: async (body) => {
      return CreateUsuario(body);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error) => {
      onError(error);
    },
  });
}
