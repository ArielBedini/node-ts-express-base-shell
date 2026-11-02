import { envs } from "./config/plugins/envs.plugin";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";


async function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
    publicPath: envs.PUBLIC_PATH,
  });

  await server.start();
}

try {
    await main();
} catch (error: unknown) {
    console.error("Error starting server:", error);
    process.exitCode = 1;
}