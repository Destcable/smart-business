async function getListCustomField(_, args, context) {
    return await context.prisma.customField.findMany({
    });
};

module.exports = { 
    getListCustomField
}; 