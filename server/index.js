import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTIONG_ULR = 'mongodb+srv://MoeMahdi:Moe123@cluster0.qzenxij.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTIONG_ULR, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))


