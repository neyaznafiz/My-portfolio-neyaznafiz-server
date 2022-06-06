const express = require('express')
const cors = require('cors');
require('dotenv').config()



const app = express()
const port = process.env.PORT || 4000


// middleware
app.use(cors())
app.use(express.json())


async function run() {
    try {

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