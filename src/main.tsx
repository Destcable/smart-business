import React from 'react'
import ReactDOM from 'react-dom/client'
import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider/dataProvider'
import { CostsDataManagementCreate, CostsDataManagementList, CostsSettingsCategoryCreate, CostsSettingsView } from './resources/costs'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Admin dataProvider={dataProvider}>
            <Resource
                name="costs/data" 
                list={CostsDataManagementList} 
                create={CostsDataManagementCreate} 
                options={{ label: "Расходы: Управление данными" }} 
            />
            <Resource 
                name="costs/settings"
                list={CostsSettingsView}
                options={{ label: "Расходы: Настройки"}}
            />
            <Resource 
                name="costs/categories"
                create={CostsSettingsCategoryCreate}
                options={{ label: "Расходы: Настройки"}}
            />
        </Admin>
    </React.StrictMode>,
)
