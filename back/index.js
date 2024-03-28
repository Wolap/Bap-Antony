import express from 'express'
import cors from 'cors'
import router from './router.js'

const app = express()

app.use(cors())
app.use(express.json({ limit: '15mb' }))
app.use(express.urlencoded({ extended: true, limit: '15mb' }))

app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000 🚀 ')
})
