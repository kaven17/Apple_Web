import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "kaven", // Your Sentry organization slug
      project: "three-react", // Your Sentry project slug
      release: {
        name: "apple_website@0.0.0", // Replace with your app version
      },
      telemetry: false, // Optional: Disable telemetry
    }),
  ],

  build: {
    sourcemap: true, // Ensure source maps are generated for Sentry
  },
});
