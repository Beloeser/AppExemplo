import React from "react";
import {
  Pagina,
  Container,
  Title,
  LoginLinkContainer,
  LoginLinkText,
  LoginLinkHighlight,
} from "./Styles.js";
import { useCreateUsuario } from "../../Hooks/usuario.js";
import Toast from "react-native-toast-message";
import FormSubmit from "../../Components/FormSubmit/FormSubmit.jsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    nome: z.string().min(1, "Nome obrigatório"),
    email: z.string().min(1, "Email obrigatório").email("Email inválido"),
    cargo: z.string().min(1, "Cargo obrigatório"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmarSenha: z.string().min(6, "Confirme sua senha"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

export default function Cadastro({ navigation }) {
  const createUsuario = useCreateUsuario({
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Usuário criado com sucesso!",
      });
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1:
          error?.response?.data?.message ||
          error.message ||
          "Erro ao criar usuário",
      });
    },
  });

  const inputs = [
    { key: "nome", label: "Nome", placeholder: "Digite seu nome", type: "text" },
    { key: "email", label: "Email", placeholder: "Digite seu email", type: "text" },
    { key: "cargo", label: "Cargo", placeholder: "Digite seu cargo", type: "text" },
    { key: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
    {
      key: "confirmarSenha",
      label: "Confirmar Senha",
      placeholder: "Confirme sua senha",
      type: "password",
    },
  ];

  const handleSubmit = (data) => {
    const payload = {
      nome: data.nome,
      email: data.email,
      cargo: data.cargo,
      senha: data.senha,
      repetirSenha: data.confirmarSenha,
    };

    createUsuario.mutate(payload);
  };

  return (
    <Pagina>
      <Container>
        <Title>Cadastro</Title>
        <FormSubmit
          inputs={inputs}
          onSubmit={handleSubmit}
          schema={zodResolver(schema)}
          loading={createUsuario.isLoading}
          buttonText="Cadastrar"
        />

        <LoginLinkContainer onPress={() => navigation.navigate("Login")}>
          <LoginLinkText>Já tem conta? </LoginLinkText>
          <LoginLinkHighlight>Faça login</LoginLinkHighlight>
        </LoginLinkContainer>
      </Container>
    </Pagina>
  );
}
