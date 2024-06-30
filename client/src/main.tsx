import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProjectDataManagementList } from '@resources/project';
import Layout from '@components/layout/Layout';

const root = createRoot(document.getElementById('root')!);

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