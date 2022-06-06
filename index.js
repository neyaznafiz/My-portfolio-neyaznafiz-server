const express = require('express')
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');



const app = express()
const port = process.env.PORT || 4000


// middlewar
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PSS}@cluster0.a36m2.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect()
        const fileCollection = client.db('neyaz_portfolio_collection').collection('My-File')

        app.get('/', (req, res)=>{
            res.download('./Assets/Neyaz Mobalik Nafiz.pdf')
        })

        // app.get('/portfolio', async (req,res)=>{
        //     const id = req.params.id
        //     const query = { _id: ObjectId(id) }
        //     const result = await fileCollection.findOne(query).toArray()
        //     res.download(result)
        // })

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