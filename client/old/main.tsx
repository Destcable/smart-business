import React from 'react'
import ReactDOM from 'react-dom/client'
import { Admin, Resource } from 'react-admin'
import dataProvider from '../dataProvider/dataProvider'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { 
    CostsDataManagementCreate, 
    CostsDataManagementList, 
    CostsSettingsCategoryCreate, 
    CostsSettingsCustomFieldsCreate, 
    CostsSettingsView 
} from '@resources/costs'
import { CounterpartyCreate, CounterpartyList } from '@resources/counterparty'
import { ProjectDataManagementCreate, ProjectDataManagementList } from '@resources/project'
import { IncomeDataManagementCreate, IncomeDataManagementList } from '@resources/income'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <FluentProvider theme={webLightTheme}>
            <Admin dataProvider={dataProvider}>
                <Resource
                    name="project/data"
                    list={ProjectDataManagementList}
                    create={ProjectDataManagementCreate}
                    options={{ label: "Проекты: Управление данными" }}
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
                <Resource
                    name="income/data"
                    list={IncomeDataManagementList}
                    create={IncomeDataManagementCreate}
                    options={{ label: "Доходы: Управление данными" }}
                />
            </Admin>
        </FluentProvider>
    </React.StrictMode>,
)
