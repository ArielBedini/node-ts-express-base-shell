import express from "express";

export function parseJsonSecure() {
  const jsonMiddleware = express.json();

  return function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    jsonMiddleware(req, res, function (err) {
      if (err) {
        return res.status(400).json({
          ok: false,
          error: "El body de la request no se pudo parsear como JSON.",
          detalle: err.message,
        });
      }
      next();
    });
  };
}
