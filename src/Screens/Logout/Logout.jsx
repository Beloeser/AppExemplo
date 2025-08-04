import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import {
  Container,
  LogoutButton,
  LogoutText,
  Titulo,
  Separador,
} from "./Styles.js";
import useAuthStore from "../../stores/auth.js";
import { useNotifications } from "../../Hooks/permissoes.js";
import Carrossel from "../../Components/Carrossel/Carrossel";
import TabelaSessao from "../../Components/TabelaSessao/TabelaSessao";
import api from "../../Services/api"; 

export default function Logout({ navigation }) {
  const { token, clearAuth } = useAuthStore();
  const { sendLogoutNotification } = useNotifications();
  const [sessoes, setSessoes] = useState([]);

  useEffect(() => {
    if (!token) {
      navigation.replace("Login");
    }
  }, [token, navigation]);

  useEffect(() => {
    fetchSessoes();
  }, []);

  const fetchSessoes = async () => {
    try {
      const res = await api.get("/sessoes");
      const data = res.data.map((sessao) => ({
        id: sessao._id,
        idUsuario: sessao.id_usuario._id,
        nome: sessao.id_usuario.nome,
        cargo: sessao.id_usuario.cargo,
        chegada: new Date(sessao.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        tempo: calcularDuracao(sessao.createdAt),
        createdAt: sessao.createdAt,
      }));
      setSessoes(data);
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  const calcularDuracao = (createdAt) => {
    const start = new Date(createdAt);
    const end = new Date();
    const duracao = end - start;
    const horas = Math.floor(duracao / (1000 * 60 * 60));
    const minutos = Math.floor((duracao % (1000 * 60 * 60)) / (1000 * 60));
    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
  };

  const handleLogout = async () => {
    clearAuth();
    await sendLogoutNotification();
    Alert.alert("Logout", "Logout efetuado com sucesso");
  };

  if (!token) return null;

  
  const onDelete = () => {
    fetchSessoes();
  };

  return (
    <Container>
      <FlatList
        data={sessoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TabelaSessao item={item} onDelete={onDelete} />}
        ListHeaderComponent={
          <>
            <View style={{ marginTop: 20 }}>
              <Carrossel />
            </View>
            <Titulo>Sessões</Titulo>
            <Separador />
          </>
        }
        ListFooterComponent={
          <LogoutButton onPress={handleLogout}>
            <LogoutText>Logout</LogoutText>
          </LogoutButton>
        }
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </Container>
  );
}
