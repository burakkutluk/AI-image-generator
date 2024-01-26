import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";
// Routes
import postRoutes from "./routes/postRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();
const port = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from AImag!",
  });
});

app.use('/api/post', postRoutes);
app.use('/api/aImage', aiRoutes);


const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
