import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./mongoDB/connect.js"

dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))

app.get('/', async (req, res) => {
    res.send('Hello from AImag!')
})

const startServer = async () => {
    try {
      connectDB(process.env.MONGODB_URL);
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();