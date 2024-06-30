import React from 'react'
import ReactDOM from 'react-dom/client'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import Layout from '@pages/Dashboard/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <FluentProvider theme={webLightTheme}>
            <Layout />
        </FluentProvider>
    </React.StrictMode>,
)