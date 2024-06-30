const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const { Query, Mutation} = require('./src/models');
const { readAndConcatenateSchemas } = require('./src/utils/readAndConcatenateSchemas');
const { schemaFilePaths } = require('./schemaFilePaths');

const resolvers = { 
    Query,
    Mutation
};

const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: readAndConcatenateSchemas(schemaFilePaths),
    resolvers,
    context: { 
        prisma,
    }
})

server
    .listen()
    .then(({ url }) => console.log(`❄️  Server ready at: ${url}`))