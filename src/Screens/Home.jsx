import React, { useState } from "react";
import {
  Pagina,
  Container,
  StyledForm,
  Title,
  Input,
  LoginLink,
  Link,
  LinkBotao,
  Botao,
} from "./Styles";
import { Text } from "react-native";
import { useCreateUsuario } from "../Hooks/usuario";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const createUsuario = useCreateUsuario({
    onSuccess: () => alert("usuariio criado com sucesso!"),
    onError: (error) =>
      alert(
        error?.response?.data?.message || error.message || "Erro ao criar usuario"
      ),
  });

  const handleSubmit = () => {
    
    if (!nome || !email || !cargo || !senha || !confirmarSenha) {
      alert("Preencha todos os campos");
      return;
    }
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    const payload = { nome, email, cargo, senha, repetirSenha: confirmarSenha };
    
    createUsuario.mutate(payload);
  };

  return (
    <Pagina>
      <Container>
        <StyledForm>
          <Title>Cadastro</Title>
          <Input
            placeholder="Nome"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />
          <Input
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            placeholder="Cargo"
            placeholderTextColor="#999"
            value={cargo}
            onChangeText={setCargo}
          />
          <Input
            placeholder="Senha"
            placeholderTextColor="#724848"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          <Input
            placeholder="Confirmar senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <LoginLink>
            Já tem conta?{" "}
            <LinkBotao onPress={() => console.log("Ir para login")}>
              <Link>Login</Link>
            </LinkBotao>
          </LoginLink>
        </StyledForm>

        <Botao onPress={handleSubmit} disabled={createUsuario.isLoading}>
          <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>
            {createUsuario.isLoading ? "Enviando..." : "Enviar"}
          </Text>
        </Botao>
      </Container>
    </Pagina>
  );
}
