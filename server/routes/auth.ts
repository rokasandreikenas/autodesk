import express from "express";
import { AuthClientTwoLegged } from "forge-apis";
import config from "../config";

const router = express.Router();

const { CLIENT_ID, CLIENT_SECRET } = config;

const authClient = new AuthClientTwoLegged(
  CLIENT_ID,
  CLIENT_SECRET,
  ["viewables:read"],
  true
);

router.get("/token", async (_req, res) => {
  try {
    const credentials = await authClient.authenticate();
    res.send({ access_token: credentials.access_token });
  } catch (err) {
    res.status(500).send("Failed to authenticate");
  }
});

export default router;
