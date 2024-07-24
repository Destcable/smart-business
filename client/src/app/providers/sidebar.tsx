export const sidebarData = [ 
    {
        name: "Главная",
        link: "/",
        type: "leaf"
    },
    {
        name: "Платформа документов",
        link: "/docplatform/main",
        type: "leaf"
    },
    {
        name: "Расширения",
        link: "/extensions",
        type: "leaf"
    },
    {
        name: "Проекты",
        link: "",
        type: "branch",
        children: [
            { 
                name: "Управление данными",
                link: "/project/data"
            }
        ]
    },
    { 
        name: "Расходы",
        link: "",
        type: "branch",
        children: [
            {
                name: "Смарт-анализ",
                link: "/cost/analysis"
            },
            { 
                name: "Управление данными",
                link: "/cost/data"
            },
            { 
                name: "Настройки",
                link: "/cost/settings"
            }
        ]
    },
]