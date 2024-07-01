// read.js
const { client } = require('./db');

async function readDocuments(school, standard, query) {
    try {
        const db = client.db(school);
        const collection = db.collection(standard);
        const result = await collection.find(query).toArray();
        console.log('Documents found:', result);
        return result;
    } catch (err) {
        console.error('Failed to read documents', err);
    }
}

module.exports = readDocuments;

