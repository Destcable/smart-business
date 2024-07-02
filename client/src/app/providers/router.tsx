import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from '@shared/ui/Layout/Layout';

const ProjectDataManagementList = lazy(() => import("@resources/project/dataManagement/List"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'projects/data-management',
                element: <ProjectDataManagementList />,
            },
        ],
    },
]);

export default router;