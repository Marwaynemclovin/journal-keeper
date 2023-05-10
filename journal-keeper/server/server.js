import express from "express"

const app = express()

app.use(express.json())

app.listen(1612, ()=>{
    console.log('Connected')
})