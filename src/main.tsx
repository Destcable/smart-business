import React from 'react'
import ReactDOM from 'react-dom/client'
import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider/dataProvider'
import { CostsDataManagementCreate, CostsDataManagementList } from './resources/costs'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Admin dataProvider={dataProvider}>
            <Resource
                name="costs" 
                list={CostsDataManagementList} 
                create={CostsDataManagementCreate} 
                options={{ label: "Расходы: Управление данными" }} 
            />
        </Admin>
    </React.StrictMode>,
)
