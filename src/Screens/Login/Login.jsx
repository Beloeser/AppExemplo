import React from "react";
import { Alert } from "react-native";
import { Pagina, Container, Title, LoginLink, Link, LinkBotao } from "./Styles";
import FormSubmit from "../../Components/FormSubmit/FormSubmit.jsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUsuario } from "../../Hooks/usuario.js"; // ajuste o caminho se necessário

const schema = z.object({
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export default function Login({ navigation }) {
  const { mutate: loginUsuario, isPending } = useLoginUsuario({
    onSuccess: () => {
      Alert.alert("Sucesso", "Login efetuado com sucesso!");
    },
    onError: (error) => {
      Alert.alert(
        "Erro ao fazer login",
        error?.response?.data?.message || "Verifique suas credenciais"
      );
    },
  });

  const inputs = [
    { key: "email", label: "Email", placeholder: "Digite seu email", type: "text" },
    { key: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
  ];

  return (
    <Pagina>
      <Container>
        <Title>Login</Title>
        <FormSubmit
          inputs={inputs}
          onSubmit={loginUsuario}
          schema={zodResolver(schema)}
          loading={isPending}
          buttonText="Entrar"
        />
        <LoginLink>
          Não tem conta?{" "}
          <LinkBotao onPress={() => navigation?.navigate("Cadastro")}>
            <Link>Cadastre-se</Link>
          </LinkBotao>
        </LoginLink>
      </Container>
    </Pagina>
  );
}
