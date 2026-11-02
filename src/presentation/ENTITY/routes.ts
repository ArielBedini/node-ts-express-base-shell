import { Router } from "express";

export class UserRoutes {
    static get routes(): Router {
        
        const router = Router();

        // instanciamos los repostorios

        router.get("/", UserRoutes.routes)

        return router;
    }
}