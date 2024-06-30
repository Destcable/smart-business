async function createCounterparty(_, args, context) { 
    
    return await context.prisma.counterparty.create({
        data: args.input,
    });
}

module.exports = { 
    createCounterparty
}