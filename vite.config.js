// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // A porta em que o servidor de desenvolvimento será executado
    open: true, // Abre o navegador após iniciar o servidor
    proxy: {
      "/api": "http://localhost:5000", // Configuração do proxy para chamadas de API
    },
  },
  resolve: {
    alias: {
      "@components": "/src/components", // Alias para a pasta de componentes
      "@utils": "/src/utils", // Alias para a pasta de utilitários
      // Adicione mais aliases conforme necessário
    },
  },
  // Adicione outras configurações conforme necessário
});
