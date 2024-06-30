async function createCost(_, args, context) {

    return await context.prisma.cost.create({
        data: args.input,
        include: {
            category: true,
            counterparty: true,
            project: true
        },
    });
}

async function deleteManyCost(_, args, context) {
    const { ids } = args;

    const dataDeleted = await context.prisma.cost.findMany({
        where: {
            id: {
                in: convertToNumbers(ids)
            },
        },
        include: {
            category: true,
            counterparty: true,
            project: true,
        },
    });

    await context.prisma.cost.deleteMany({
        where: {
            id: { in: ids },
        },
    });

    return dataDeleted;
}

module.exports = { 
    createCost,
    deleteManyCost
}