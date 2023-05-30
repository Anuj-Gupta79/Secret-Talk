import  express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongodb from "./db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
mongodb();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})