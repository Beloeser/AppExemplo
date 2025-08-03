import { Alert } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,   // substitui shouldShowAlert
    shouldShowList: true,     // opcional, para exibir no centro de notificações
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const useNotifications = () => {
  const requestNotificationPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão Negada", "Não é possível enviar notificações sem a sua permissão.");
      return false;
    }
    return true;
  };

  const sendLoginNotification = async () => {
    const granted = await requestNotificationPermission();
    if (!granted) return false;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem Vindo ao meu app!",
        body: "Você efetuou o login com sucesso, parabéns!!!",
        data: { type: "login" },
      },
      trigger: { seconds: 1 },
    });

    return true;
  };

  const sendLogoutNotification = async () => {
    const granted = await requestNotificationPermission();
    if (!granted) return false;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bom descanso!",
        body: "Você saiu da sua conta com sucesso.",
        data: { type: "logout" },
      },
      trigger: { seconds: 1 },
    });

    return true;
  };

  return {
    requestNotificationPermission,
    sendLoginNotification,
    sendLogoutNotification,
  };
};
