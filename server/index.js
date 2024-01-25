import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const PORT = 8080

const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))

app.get('/', async (req, res) => {
    res.send('Hello from AImag!')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})