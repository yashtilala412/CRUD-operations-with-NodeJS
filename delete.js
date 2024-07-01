// delete.js
const { client } = require('./db');

async function deleteDocument(dbName, collectionName, filter) {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne(filter);
        console.log('Document deleted:', result.deletedCount);
        return result.deletedCount;
    } catch (err) {
        console.error('Failed to delete document', err);
    }
}

module.exports = deleteDocument;
