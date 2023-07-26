import { config } from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'

config()
const uri = `mongodb+srv://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASS}@twitter.3fqwmsa.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function run() {
  try {
    await client.connect()
    const db = client.db('admin')
    await db.command({ ping: 1 })
    console.log('Pinged your deployment. You successfully connected to MongoDB!')
  } finally {
    await client.close()
  }
}
