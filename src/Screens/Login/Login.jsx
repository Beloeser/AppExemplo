import React from "react";
import { Pagina, Container, Title, LoginLink, Link, LinkBotao } from "./Styles";
import Toast from "react-native-toast-message";
import FormSubmit from "../../Components/FormSubmit/FormSubmit.jsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export default function Login({ navigation }) {
  const inputs = [
    { key: "email", label: "Email", placeholder: "Digite seu email", type: "text" },
    { key: "senha", label: "Senha", placeholder: "Digite sua senha", type: "password" },
  ];

  const handleLogin = (data) => {
    Toast.show({
      type: "success",
      text1: "Login efetuado com sucesso!",
    });

    console.log("Login data:", data);
  };

  return (
    <Pagina>
      <Container>
        <Title>Login</Title>
        <FormSubmit
          inputs={inputs}
          onSubmit={handleLogin}
          schema={zodResolver(schema)}
          loading={false}
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
