import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from '@shared/ui/Layout/Layout';

const ProjectDataList = lazy(() => import("@resources/Project/dataManagement/List/ProjectDataList"));
const CostSmartAnalysisList = lazy(() => import("@resources/Cost/smartAnalysis/List/CostSmartAnalysisList"))
const CostDataList = lazy(() => import("@resources/Cost/dataManagement/List/CostDataList"));
const CostSettingsList = lazy(() => import("@resources/Cost/settings/List/CostSettingsList"));
const CostDataCreate = lazy(() => import("@resources/Cost/dataManagement/Create/CostDataCreate"));
const DocPlatformExtansionMain = lazy(() => import("@app/extensions/docPlatform/DocPlatformExtansionMain"));
const ExtensionsList = lazy(() => import("@resources/Extensions/ExtensionsList"))

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
            {
                path: 'cost/data/create',
                element: <CostDataCreate />,
            },
            {
                path: 'cost/settings',
                element: <CostSettingsList />,
            },
            {
                path: 'cost/analysis',
                element: <CostSmartAnalysisList />,
            },
            {
                path: 'docplatform/main',
                element: <DocPlatformExtansionMain />
            },
            { 
                path: 'extensions',
                element: <ExtensionsList />
            }
        ],
    },
]);

export default router;