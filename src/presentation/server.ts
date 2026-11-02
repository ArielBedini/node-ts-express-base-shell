import express from "express";
import { parseJsonSecure } from "./parseJsonSecure";
import path from "path";

interface Options {
  port: number;
  routes: express.Router;
  publicPath?: string;
}

export class Server {
  public readonly app = express();
//   private readonly port: number;
//   private readonly publicPath: string;
//   private readonly routes: express.Router;

  //   constructor(options: Options) {
  //     const { port, routes, publicPath = "public" } = options;
  //     this.port = port;
  //     this.routes = routes;
  //     this.publicPath = publicPath;
  //   }

  constructor(private readonly options: Options) {}

  public async start(): Promise<void> {

    const { port, routes, publicPath = "public" } = this.options;

    //* Middlewares
    // manejar envío de formato JSON  incorrecto del body
    this.app.use(parseJsonSecure());
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencode

    //* Routes ... Neceario para manejar nuestros endpoints de la API
    this.app.use(routes);

    //* Public Folder
    this.app.use(express.static(publicPath));

    //* Ante cada solicitud devolvemos las rutas de nuestra SPA
    this.app.get("/*splat", (req, res) => {
      const indexPath = path.join(
        import.meta.dirname,
        `../../${publicPath}`,
      );

      res.sendFile(
        "index.html",
        {
          root: indexPath,
        },
        (err) => {
          if (err) {
            console.log(err);
          }
        },
      );
      return;
    });

    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
