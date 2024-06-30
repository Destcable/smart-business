import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Dashboard from '@pages/Dashboard/Dashboard';
import './global.css'

const root = createRoot(document.getElementById('root')!);

root.render(
    <FluentProvider theme={webLightTheme}>
        <Dashboard />
    </FluentProvider>,
);