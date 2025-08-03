import React, { useEffect } from "react";
import { Alert } from "react-native";
import { Container, LogoutButton, LogoutText } from "./Styles.js";
import { useDeleteSessao } from "../../Hooks/usuario.js"; // ajuste o caminho se necessário
import useAuthStore from "../../stores/auth.js"; // ajuste o caminho do seu store

export default function Logout({ navigation }) {
  const { token, clearAuth } = useAuthStore();

  useEffect(() => {
  console.log("🧾 useEffect - Token atual:", token);
  if (!token) {
    console.log("⛔ Sem token, redirecionando para Login");
    navigation.replace("Login");
  }
}, [token, navigation]);


  const { mutate: logout, isLoading } = useDeleteSessao({
    onSuccess: () => {
      clearAuth(); // limpa o token e usuário do estado global
      Alert.alert("Logout", "Logout efetuado com sucesso", [
        { text: "OK", onPress: () => navigation.replace("Login") },
      ]);
    },
    onError: () => {
      Alert.alert("Erro", "Erro ao realizar logout");
    },
  });

  const handleLogout = () => {
    logout(); // dispara o hook de logout (delete sessão)
  };

  if (!token) {
    // enquanto o redirecionamento não ocorre, não renderiza nada
    return null;
  }

  return (
    <Container>
      <LogoutButton onPress={handleLogout} disabled={isLoading}>
        <LogoutText>{isLoading ? "Saindo..." : "Logout"}</LogoutText>
      </LogoutButton>
    </Container>
  );
}
