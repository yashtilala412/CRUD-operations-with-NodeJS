// create.js
const { client } = require('./db');

async function createDocument(school, standard, document) {
    try {
        const db = client.db(school);
        const collection = db.collection(standard);
        const result = await collection.insertOne(document);
        console.log('Document created:', result.insertedId);
        return result.insertedId;
    } catch (err) {
        console.error('Failed to create document', err);
    }
}

module.exports = createDocument;
