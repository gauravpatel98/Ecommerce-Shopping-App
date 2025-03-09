import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import brandRoutes from './routes/brandRoutes.js'
import productRoutes from './routes/productRoutes.js'
// import productRoutes from './routes/productRoutes'A

const app = express()
const port = 7000

app.use(express.json())

app.use(cors())

app.use('/user', userRoutes)
app.use('/category', categoryRoutes)
app.use('/brand', brandRoutes)
app.use('/product', productRoutes)
// app.use('/product', productRoutes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))