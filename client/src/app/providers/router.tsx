import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from '@shared/ui/Layout/Layout';

const ProjectDataList = lazy(() => import("@pages/project/ProjectDataList"));
const CostDataList = lazy(() => import("@pages/cost/CostDataList"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'project/data',
                element: <ProjectDataList />,
            },
            {
                path: 'cost/data',
                element: <CostDataList />,
            },
        ],
    },
]);

export default router;