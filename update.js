// update.js
const { client } = require('./db');

async function updateDocument(school, standard, filter, update) {
    try {
        const db = client.db(school);
        const collection = db.collection(standard);
        const result = await collection.updateOne(filter, { $set: update });
        console.log('Document updated:', result.modifiedCount);
        return result.modifiedCount;
    } catch (err) {
        console.error('Failed to update document', err);
    }
}

module.exports = updateDocument;
