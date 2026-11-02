import { Router } from "express";


export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // Definimos las rutas
    // router.use("/api/entity", /* entity routes */) ;
    return router;
  }
}
