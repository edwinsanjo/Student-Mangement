import express, { Request, Response, Router } from "express";
import { request } from "http";

import authHelpers from "../helpers/auth";

const router: Router = express.Router();

router.get("", (req: Request, res: Response) =>
  res.status(200).send("ping pong! Working Fine!")
);
router.post("/login/admin", (req: Request, res: Response) => {
  authHelpers.adminLogin(req, res);
});

router.post("/signup/teachers", async (req: Request, res: Response) => {});

router.post("/login/teachers", (req: Request, res: Response) => {});

export default router;
