import express from 'express'
import axios from 'axios'
const app = express()
app.use(express.json())
app.post('/ia',async(req,res)=>{
  const {text} = req.body
  const response = await axios.post('http://localhost:11434/api/generate',
  {
    model: "llama3",
    prompt: text,
    stream: false
  })
  console.log(response.data.response.toString())
  res.json(response.data.response.toString())
})
app.listen(3000,()=>{
  console.log('Rodando em http://localhost:3000')
})