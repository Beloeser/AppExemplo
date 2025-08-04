import { useMutation, useQuery } from "@tanstack/react-query";
import {
  GetSessoes,
  CreateSessao,
  DeleteSessao,
} from "../Services/endpoints.js";


export function useGetSessoes() {
  return useQuery({
    queryKey: ["sessoes"],
    queryFn: GetSessoes,
  });
}

export function useCreateSessao({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({
    mutationFn: CreateSessao,
    onSuccess,
    onError,
  });
}

export function useDeleteSessao({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useMutation({
    mutationFn: async (id) => {
      const res = await DeleteSessao(id);
      return res;
    },
    onSuccess,
    onError,
  });
}


