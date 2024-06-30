async function createCategory(_, args, context) {
    return await context.prisma.category.create({
        data: args.input
    });
}

async function deleteManyCategory(_, args, context) {
    const { ids } = args;

    const dataDeleted = await context.prisma.category.findMany({
        where: {
            id: {
                in: convertToNumbers(ids)
            },
        },
    });

    await context.prisma.category.deleteMany({
        where: {
            id: { in: ids },
        },
    });

    return dataDeleted;
}

module.exports = { 
    createCategory,
    deleteManyCategory
}