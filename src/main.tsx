import React from 'react'
import ReactDOM from 'react-dom/client'
import { Admin, Resource } from 'react-admin'
import dataProvider from '../dataProvider/dataProvider'
import { CostsDataManagementCreate, CostsDataManagementList, CostsSettingsCategoryCreate, CostsSettingsCustomFieldsCreate, CostsSettingsView } from './resources/costs'
import { CounterpartyCreate, CounterpartyList } from './resources/counterparty'
import { ProjectCreate, ProjectList } from './resources/project'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <FluentProvider theme={webLightTheme}>
            <Admin dataProvider={dataProvider}>
                <Resource
                    name="project"
                    list={ProjectList}
                    create={ProjectCreate}
                    options={{ label: "Проекты" }}
                />
                <Resource
                    name="counterparty"
                    list={CounterpartyList}
                    create={CounterpartyCreate}
                    options={{ label: "Контрагенты" }}
                />
                <Resource
                    name="costs/data"
                    list={CostsDataManagementList}
                    create={CostsDataManagementCreate}
                    options={{ label: "Расходы: Управление данными" }}
                />
                <Resource
                    name="costs/settings"
                    list={CostsSettingsView}
                    options={{ label: "Расходы: Настройки" }}
                />
                <Resource
                    name="costs/categories"
                    create={CostsSettingsCategoryCreate}
                    options={{ label: "Расходы: Настройки" }}
                />
                <Resource
                    name="costs/customFields"
                    create={CostsSettingsCustomFieldsCreate}
                />
            </Admin>
        </FluentProvider>
    </React.StrictMode>,
)
