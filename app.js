// app.js
const { connect, client } = require('./db');
const createDocument = require('./create');
const readDocuments = require('./read');
const updateDocument = require('./update');
const deleteDocument = require('./delete');

async function main() {
    await connect();

    const dbName = 'school'; // Database name
    const collectionName = 'standard'; // Collection name

    // Create document
    const newDocument = { name: 'John Doe', age: 30 };
    const insertedId = await createDocument(dbName, collectionName, newDocument);

    // Read documents
    const documents = await readDocuments(dbName, collectionName, {});
    console.log('All documents:', documents);

    // Update document
    const filter = { _id: insertedId };
    const update = { age: 35 };
    await updateDocument(dbName, collectionName, filter, update);

    // Delete document
    await deleteDocument(dbName, collectionName, filter);

    // Close MongoDB connection
    await client.close();
}

main().catch(console.error);
