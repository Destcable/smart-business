const convertToNumbers = require("../../../utils/convertToNumbers");

async function getListProject(_, args, context) {
    return await context.prisma.project.findMany();
};

async function getManyProject(_, args, context) { 
    const { ids } = args;

    return await context.prisma.project.findMany({ 
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        }
    })
};

module.exports = { 
    getListProject,
    getManyProject
}; 