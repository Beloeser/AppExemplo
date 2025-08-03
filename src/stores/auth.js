import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode"; 

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      usuario: null,

      setToken: (token) => {
        try {
          const decoded = jwtDecode(token); 
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
