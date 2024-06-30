async function createProject(_, args, context) { 
    return await context.prisma.project.create({
        data: args.input,
    });
};

module.exports = { 
    createProject
}