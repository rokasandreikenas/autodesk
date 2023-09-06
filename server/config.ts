require("dotenv").config();

const { CLIENT_ID, CLIENT_SECRET, PORT } = process.env;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.warn("Missing some of the environment variables.");
  process.exit(1);
}

export default { CLIENT_ID, CLIENT_SECRET, PORT: PORT || 8080 };
