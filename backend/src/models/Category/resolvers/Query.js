const convertToNumbers = require("../../../utils/convertToNumbers");

async function getListCategory(_, args, context) {
    return await context.prisma.category.findMany();
};

async function getManyCategory(_, args, context) { 
    const { ids } = args;

    return await context.prisma.category.findMany({ 
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        }
    })
};

module.exports = { 
    getListCategory,
    getManyCategory
}; 