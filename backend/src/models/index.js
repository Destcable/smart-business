const { getListCategory, getManyCategory } = require("./Category/resolvers/Query");
const { getListCost } = require("./Cost/resolvers/Query");
const { getListCustomField } = require("./CustomField/resolvers/Query");
const { getListCounterparty, getManyCounterparty } = require("./Counterparty/resolvers/Query");
const { getListProject, getManyProject } = require("./Project/resolvers/Query");
const { getListIncome } = require("./Income/resolvers/Query");

const { createCost, deleteManyCost } = require("./Cost/resolvers/Mutation");
const { createCategory, deleteManyCategory } = require("./Category/resolvers/Mutation");
const { createCounterparty } = require("./Counterparty/resolvers/Mutation");
const { createProject } = require("./Project/resolvers/Mutation");
const { createIncome, deleteManyIncome } = require("./Income/resolvers/Mutation");


module.exports = { 
    Query: { 
        getListCost,
        getListCategory,
        getManyCategory,
        getListCounterparty,
        getManyCounterparty,
        getListProject,
        getManyProject,
        getListIncome
    },
    Mutation: {
        createCost,
        deleteManyCost,
        createCategory,
        deleteManyCategory,
        createCounterparty,
        createProject,
        createIncome,
        deleteManyIncome
    }
}