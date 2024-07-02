import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@shared/ui/Layout/Layout';
import '@app/styles/global.css'

const root = createRoot(document.getElementById('root')!);

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

root.render(
    <FluentProvider theme={webLightTheme}>
        <RouterProvider router={router} />
    </FluentProvider>,
);