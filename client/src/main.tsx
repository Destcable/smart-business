import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@components/layout/Layout';

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