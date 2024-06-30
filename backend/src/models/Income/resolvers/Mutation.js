async function createIncome(_, args, context) {

    return await context.prisma.income.create({
        data: args.input,
        include: {
            category: true,
            counterparty: true,
            project: true
        },
    });
};

async function deleteManyIncome(_, args, context) {
    const { ids } = args;

    const dataDeleted = await context.prisma.income.findMany({
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
    createIncome,
    deleteManyIncome
}