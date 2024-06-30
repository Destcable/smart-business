import { createRoot } from 'react-dom/client';
import { FluentProvider, Text, webLightTheme } from '@fluentui/react-components';
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardList } from '@resources/dashboard';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter([
    {
      path: '/',
      element: <DashboardList />,
      children: [
        {
          path: 'projects/data-management',
          element: <DataManagement />,
        },
      ],
    },
  ]);

  function DataManagement() {
    return <Text weight="bold" size={500}>Data</Text>
}

root.render(
    <FluentProvider theme={webLightTheme}>
        <RouterProvider router={router} />
    </FluentProvider>,
);