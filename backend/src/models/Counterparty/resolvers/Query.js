const convertToNumbers = require("../../../utils/convertToNumbers");

async function getListCounterparty(_, args, context) {
    return await context.prisma.counterparty.findMany();
};

async function getManyCounterparty(_, args, context) { 
    const { ids } = args;

    return await context.prisma.counterparty.findMany({ 
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        }
    })
};

module.exports = { 
    getListCounterparty,
    getManyCounterparty
}; 