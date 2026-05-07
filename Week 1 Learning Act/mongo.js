const { MongoClient } = require('mongodb');

async function main() {
    //Example from website--this db doesn't actually exist, this is just an example
    const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        //Connect to MongoDB cluster
        await client.connect();
        //Make sure the appropriate DB calls
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);