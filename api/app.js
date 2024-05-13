import express, { json } from 'express'
import router from './routes/routes.js'
import cors from 'cors'

const port = 5000;
const app = express()

app.use(json());
app.use(cors({ origin: '*', credentials: true }))
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})