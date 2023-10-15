import express from "express"
import managerRouter from "./routes/send-notify-sms.js"

const app = express()
const PORT = process.env.PORT || 8000

app.use('/api/', managerRouter)


app.listen(PORT, async() => {
  console.log(`Listen on port ${PORT}`)
  // await fetch("https://node-notify-movies.vercel.app/api/send-notity-movies").then(() => console.log("Work")).catch(err => console.error(err))
  // await fetch("http://localhost:8000/api/send-notity-movies")
})