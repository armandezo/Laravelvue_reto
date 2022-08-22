import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "url";
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    resolve: {
    alias: {
      "@": fileURLToPath(new URL("./resources", import.meta.url)),
      "@images": fileURLToPath(new URL("./resources/images", import.meta.url)),
      "@css": fileURLToPath(new URL("./resources/css", import.meta.url)),
      "@plugins": fileURLToPath(new URL("./resources/plugins", import.meta.url)),
    },
    }
});
