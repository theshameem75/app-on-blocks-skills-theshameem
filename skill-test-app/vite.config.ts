// Local

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const redirectUrl = new URL(env.VITE_BLOCKS_REDIRECT_URI);
  const domain = redirectUrl.hostname;
  const port = Number(redirectUrl.port || "5173");

  return {
    plugins: [react()],
    server: {
      host: "127.0.0.1",
      port,
      strictPort: true,
      https: {
        key: fs.readFileSync(".cert/dev-key.pem"),
        cert: fs.readFileSync(".cert/dev-cert.pem"),
      },
      allowedHosts: [domain],
    },
  };
});


// DEV
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import fs from "node:fs";

// const DOMAIN = "ddmpzt.slsblx.com";
// const PORT = 5173;

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: DOMAIN,
//     port: PORT,
//     strictPort: true,
//     https: {
//       key: fs.readFileSync(".cert/dev-key.pem"),
//       cert: fs.readFileSync(".cert/dev-cert.pem"),
//     },
//     allowedHosts: [DOMAIN],
//   },
// });
