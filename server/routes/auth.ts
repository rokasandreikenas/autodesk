import express from "express";
import axios from "axios";
import config from "../config";
const router = express.Router();

const { CLIENT_ID, CLIENT_SECRET } = config;

router.get("/token", async (_req, res) => {
  try {
    const AUTH_URL =
      "https://developer.api.autodesk.com/authentication/v1/authenticate";
    const authData = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials&scope=viewables:read`;

    const response = await axios.post(AUTH_URL, authData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    res.send({ access_token: response.data.access_token });
  } catch (err) {
    res.status(500).send("Failed to authenticate");
  }
});

export default router;
