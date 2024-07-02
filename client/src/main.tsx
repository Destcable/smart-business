import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { RouterProvider } from 'react-router-dom';
import router from '@app/providers/router';
import '@app/styles/global.css'

const root = createRoot(document.getElementById('root')!);


root.render(
    <FluentProvider theme={webLightTheme}>
        <RouterProvider router={router} />
    </FluentProvider>,
);