import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode"; // ✅ Correto agora

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      usuario: null,

      setToken: (token) => {
        console.log("🔑 setToken foi chamado com:", token);
        try {
          const decoded = jwtDecode(token); // ✅ jwtDecode direto
          console.log("👤 Usuário decodificado:", decoded.usuario);
          set({ token, usuario: decoded.usuario });
        } catch (error) {
          console.error("❌ Erro ao decodificar o token:", error);
          set({ token: null, usuario: null });
        }
      },

      setUsuario: (usuario) => set({ usuario }),

      clearAuth: () => set({ token: null, usuario: null }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAuthStore;
