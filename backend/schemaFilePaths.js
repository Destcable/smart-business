const path = require('path');

const schemaFilePaths = [
    path.join(__dirname, 'customTypes.graphql'),
    path.join(__dirname, 'src/models/Cost/schema.graphql'),
    path.join(__dirname, 'src/models/Category/schema.graphql'),
    path.join(__dirname, 'src/models/Counterparty/schema.graphql'),
    path.join(__dirname, 'src/models/Project/schema.graphql'),
    path.join(__dirname, 'src/models/Income/schema.graphql'),
];

module.exports = { 
    schemaFilePaths
};