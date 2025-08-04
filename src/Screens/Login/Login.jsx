import React from "react";
import { Alert } from "react-native";
import { Pagina, Container, Title, LoginLinkContainer, LoginLinkText, LoginLinkHighlight } from "./Styles";
import FormSubmit from "../../Components/FormSubmit/FormSubmit.jsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUsuario } from "../../Hooks/usuario.js";
import { useNotifications } from "../../Hooks/permissoes.js"; 
import Carrossel from "../../Components/Carrossel/Carrossel";

const schema = z.object({
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export default function Login({ navigation }) {
  const { sendLoginNotification } = useNotifications(); 

  const { mutate: loginUsuario, isPending } = useLoginUsuario({
    onSuccess: () => {
      sendLoginNotification(); 

      Alert.alert("Sucesso", "Login efetuado com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.replace("Logout"),
        },
      ]);
    },
    onError: (error) => {
      console.error("❌ Erro ao fazer login:", error);
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

        <LoginLinkContainer onPress={() => navigation.navigate("Cadastro")}>
          <LoginLinkText>Não tem conta? </LoginLinkText>
          <LoginLinkHighlight>Cadastre-se</LoginLinkHighlight>
        </LoginLinkContainer>
      </Container>
    </Pagina>
  );
}
