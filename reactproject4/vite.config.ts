import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base:'/reactproject4/',
    plugins: [plugin()],
    server: {
        port: 60087,
    }
})
