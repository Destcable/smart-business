async function getListCost(_, args, context) {
    return await context.prisma.cost.findMany({
        include: {
            category: true,
            counterparty: true,
            project: true,
        }
    });
};

module.exports = { 
    getListCost
}; 