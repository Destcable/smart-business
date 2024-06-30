async function getListIncome(_, args, context) {
    return await context.prisma.income.findMany({
        include: {
            category: true,
            counterparty: true,
            project: true,
        }
    });
};

module.exports = { 
    getListIncome
}; 