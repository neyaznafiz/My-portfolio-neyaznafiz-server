const express = require('express')
const cors = require('cors');
require('dotenv').config()



const app = express()
const port = process.env.PORT || 4000


// middlewar
app.use(cors())
app.use(express.json())


async function run() {
    try {

        app.get('/', (req, res)=>{
            res.download('./Assets/Neyaz Mobalik Nafiz.pdf')
        })

    }
    finally { }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Hey Neyaz I am running')
})


app.listen(port, () => {
    console.log('Listning to port', port)
})