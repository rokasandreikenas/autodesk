require("dotenv").config();

const PORT = process.env.PORT || 8080;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

export default { PORT, CLIENT_ID, CLIENT_SECRET };
