
import express from 'express'


const app = express()


app.get('/mohamed' , (req,res) => {
    res.send('<h1>Mohamed Elsayed </h1>')
})


app.listen(3005 , () => console.log('listening server'))