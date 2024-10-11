import express from "express"
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"
//Creating our server
const app = express()

//Become json response
app.use(express.json())
//Hability the cors
app.use(cors())
//define port
const PORT = 3001
app.use(UserRoute)

//Running the server
app.listen(PORT,()=>{
    console.log('server running at the port ' + PORT)
})