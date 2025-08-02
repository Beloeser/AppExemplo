import { useMutation, useQuery } from "@tanstack/react-query";
import {
  GetUsuarios,
  CreateUsuario,
  UpdateUsuario,
  DeleteUsuario,
  LoginUsuario,
  GetSessoes,
  CreateSessao,
  DeleteSessao,
} from "../Services/endpoints.js";


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
  return useMutation({
    mutationFn: LoginUsuario,
    onSuccess,
    onError,
  });
}

// SESSÕES
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
    mutationFn: DeleteSessao,
    onSuccess,
    onError,
  });
}
