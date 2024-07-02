import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from '@shared/ui/Layout/Layout';

const ProjectDataList = lazy(() => import("@pages/project/ProjectDataList"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'project/data',
                element: <ProjectDataList />,
            },
        ],
    },
]);

export default router;