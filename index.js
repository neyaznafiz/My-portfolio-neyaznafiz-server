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
        const projectsCollection = client.db('neyaz_portfolio_collection').collection('projects')

        // get all product api
        app.get('/project', async (req, res) => {
            res.send(await projectsCollection.find({}).toArray())
        });


        app.get('/project/:id', async (req, res) => {
            const result = await projectsCollection.findOne({_id: ObjectId(req.params.id)})
            res.send(result)
        });


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