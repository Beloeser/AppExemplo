import React, { useEffect } from "react";
import { Alert } from "react-native";
import { Container, LogoutButton, LogoutText } from "./Styles.js";
import useAuthStore from "../../stores/auth.js";
import { useNotifications } from "../../Hooks/permissoes.js";  

export default function Logout({ navigation }) {
  const { token, clearAuth } = useAuthStore();
  const { sendLogoutNotification } = useNotifications(); 

  useEffect(() => {
    if (!token) {
      navigation.replace("Login");
    }
  }, [token, navigation]);

  const handleLogout = async () => {
    clearAuth(); 
    await sendLogoutNotification(); 
    Alert.alert("Logout", "Logout efetuado com sucesso");
  };

  if (!token) return null;

  return (
    <Container>
      <LogoutButton onPress={handleLogout}>
        <LogoutText>Logout</LogoutText>
      </LogoutButton>
    </Container>
  );
}
